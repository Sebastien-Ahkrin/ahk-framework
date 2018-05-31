# AhkFramework

> A framework to create discord robots easily, with commands and events.

## Install

```bash
npm install ahkframework
```

## Usage

```javascript
// Require the AhkFramework package
const Bot = require('ahkframework');

// Creating the config, with all the stuff we'll need
const config = {
    token: "your token",
    name: "your bot name",
    prefix: "?",
    version: "X.X.X",
    icon_path: "your path, can be a internet link",
    presence: { name: config.prefix + "help" }
};

const x = {
    name: 'name',
    description: 'your description',
    examples: ['examples for the command'],
    aliases: ['a first aliases', 'a second aliases'],
    permissions: {
        user: ['MANAGE_MESSAGES'],
        client: ['MANAGE_MESSAGES']
    }
};

const client = new Bot(config)

client.registerEvent('typingStart', (channel, user) => {
    console.log('A user start typing')
});

client.registerCommand(x, (message, channel, client, args) => {
    //Action when a user use your commands
    console.log("a user use 'x' commands")
});

//Use this to create the default command : help with your prefix
client.createDefaultCommand();
```

For more informations about "permissions" see [HERE](http://discordjs.readthedocs.io/en/latest/docs_permissionconstants.html)
Source code on github : [HERE](https://github.com/Sebastien-Ahkrin/ahk-framework)

## License

[MIT](http://vjpr.mit-license.org)
