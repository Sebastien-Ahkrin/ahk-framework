const fs = require('fs')

const Listener = require('./commands')

const discord = require('discord.js')
const client = new discord.Client()

class Bot {

    constructor (bot) {
        this._prefix = bot.prefix
        this._listener = new Listener(bot.prefix, client)
        this.ready(bot)
        client.login(bot.token)
    }

    ready (bot) {
        client.on('ready',
            () => {

                fs.readFile(bot.icon_path, (error, avatar) => {
                    if(error) throw error
                    client.user.setAvatar(avatar, err => { if (err) throw err; })
                })

                client.user.username = bot.name
                client.user.setPresence({ game: bot.presence })

                console.log(`Logged in as ${client.user.tag}\nTOKEN = "${client.token}"\n`)
            }
        )
    }

    registerCommand (cmd, action) {
        this._listener.addCommand(cmd, action)
    }

    createDefaultCommand () {
        this._listener.createHelp(this._prefix)
    }

}

module.exports = Bot
