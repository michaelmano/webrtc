# Setting up on windows.

## NVM

Install NVM from [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases) and then `nvm  install v16.13.2 && nvm use v16.13.2 && npm install -g npm@8.15.1`

## Global Node Packages

`npm install -g eslint`


## Editor setup

use [VSCode](https://code.visualstudio.com/) or an editor of your choice as long as it has the following extensions:

### Install Extensions:

Vue Language Features (Volar)
ESLint

### Config setup
Config and settings:

`File > Prefrences > Settings > search for onsave > extensions in the sidebar > eslint > edit in settings.json`
replace all with the following.
```
{
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "eslint.validate": [
      "javascript",
      "typescriptreact",
      "javascriptreact",
      "vue"
    ],
    "files.eol": "\n"
}
```