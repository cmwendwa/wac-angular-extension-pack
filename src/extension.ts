'use strict';

import * as vscode from 'vscode';
import TelemetryReporter from '@vscode/extension-telemetry';
import { sharedSettings } from './shared-settings';

const extensionId = 'wac-angular-extension-pack';


const packageObj = require('../package.json');
const extensionVersion = packageObj.version;
const dependencyExtensions = packageObj.extensionPack;

const key = process?.env?.WACLPINSTRUMENTATIONKEY || '';

if(!key){
	throw new Error('Instrumentation key is needed!')
}

let reporter: TelemetryReporter;

export async function activate(context: vscode.ExtensionContext) {
	reporter = new TelemetryReporter(extensionId, extensionVersion, key);

	const config = vscode.workspace.getConfiguration();


	const allDependantExtensions = dependencyExtensions.map(
		(extId: string) => vscode.extensions.getExtension(extId)
	);
	const allDependantExtensionsExist = allDependantExtensions.every(
		(extension: vscode.Extension<any>) => !!extension
	);
	const extensionIds = allDependantExtensions.map((e: vscode.Extension<any>) => e && e.id)

	if (allDependantExtensionsExist) {
		Object.entries(sharedSettings).forEach(async ([key, value]) => {
			try {
				await config.update(key, value, true);

			} catch (error) {
				reporter.sendTelemetryErrorEvent('ApplySettingError', { errorContents: JSON.stringify(error), extensionIds });
			}
		});

	} else {
		reporter.sendTelemetryErrorEvent('ForgoingApplySetting', { extensionIds });
	}

	context.subscriptions.push(reporter);
}

// this method is called when your extension is deactivated
export function deactivate() { }
