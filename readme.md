# AhkFramework

> A discord framework to easily create bot, with commands and events.

## Install

```bash
npm i -S ahkframwork
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
        //Permissions see [here](http://discordjs.readthedocs.io/en/latest/docs_permissionconstants.html)
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

## License

[MIT](http://vjpr.mit-license.org)

[npm-image]: https://img.shields.io/npm/v/live-xxx.svg
[npm-url]: https://npmjs.org/package/live-xxx
[travis-image]: https://img.shields.io/travis/live-js/live-xxx/master.svg
[travis-url]: https://travis-ci.org/live-js/live-xxx
[coveralls-image]: https://img.shields.io/coveralls/live-js/live-xxx/master.svg
[coveralls-url]: https://coveralls.io/r/live-js/live-xxx?branch=master
