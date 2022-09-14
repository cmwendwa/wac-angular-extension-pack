export const sharedSettings = {
  // Shared editor settings
  "editor.autoClosingBrackets": "always",
  "editor.codeLens": true,
  "editor.autoIndent": "advanced",
  "editor.autoClosingQuotes": "always",
  "editor.autoSurround": "languageDefined",
  "editor.tabCompletion": "on",
  "editor.suggestSelection": "recentlyUsedByPrefix",
  "editor.snippetSuggestions": "inline",
  // Uniform formatting with default vs code formatters
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  // Other code like PS formatted with prettier
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  // tslint options
  "tslint.autoFixOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true
  },

  // Javascript settings
  "javascript.preferences.quoteStyle": "single",
  "javascript.referencesCodeLens.enabled": true,
  "javascript.referencesCodeLens.showOnAllFunctions": true,

  // white space settings
  "files.trimTrailingWhitespace": true,
  "diffEditor.ignoreTrimWhitespace": false,

  // Make material UI default theme
  "workbench.iconTheme": "material-icon-theme",

  // CSS Peek settings
  "cssPeek.supportTags": false,

  // NPM intellisense settings
  "npm-intellisense.scanDevDependencies": true,

  // Better comments
  "better-comments.multilineComments": true,

  // Native bracket colorization
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active"
};
