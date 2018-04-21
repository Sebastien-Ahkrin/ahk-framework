# AhkFramework

> A discord framework to easily create bot, with commands and events.

## Install

```bash
npm i -S ahkframework
```

## Usage

```javascript
const Bot = require('ahkframework')
const prefix = "?"

const config = {
    token: "your token",
    name: "your bot name",
    prefix: prefix,
    version: "X.X.X",
    icon_path: "your path",
    presence: { name: "text" }
}

const x = {
    name: 'name',
    description: 'your description',
    examples: ['a little examples'],
    aliases: ['an aliases', 'a second aliases'],
    permissions: {
        user: ['MANAGE_MESSAGES'],
        client: ['MANAGE_MESSAGES']
    }
}

const user_bot = new Bot(config)

user_bot.registerEvent('typingStart', (channel, user) => {
    console.log('A user start typing')
})

user_bot.registerCommand(x, (message, channel, client, args) => {
    //Action when a user use your commands
    console.log("a user use 'x' commands")
})

//Use this to create the default command : help with your prefix
user_bot.createDefaultCommand()
```

For more informations about "permissions" see [HERE](http://discordjs.readthedocs.io/en/latest/docs_permissionconstants.html)
Source code on github : [HERE](https://github.com/Sebastien-Ahkrin/ahk-framework)

## License

[MIT](http://vjpr.mit-license.org)
