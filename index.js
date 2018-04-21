const Bot = require("./bot")

const prefix = "?"

const config = {
    token: "non",
    name: "Ahk",
    prefix: prefix,
    version: "1.0.0",
    icon_path: "./ressource/Ahk.png",
    presence: { name: prefix + "help" }
}

const clr = {
    name: 'clear',
    description: 'Clear a channel',
    examples: ['clear ["number"]'],
    aliases: ['clr'],
    permissions: {
        user: ['MANAGE_MESSAGES'],
        client: ['MANAGE_MESSAGES']
    }
}

const user_bot = new Bot(config)

user_bot.registerEvent('typingStart', (channel, user) => {

})

user_bot.registerCommand(clr, (message, channel, client, args) => {
    console.log("clrs")
})

user_bot.createDefaultCommand()
