const exception = require('../exception')
const Discord = require('discord.js')

class Listener {

    constructor (prefix, client) {
        this._commands = []
        this._client = client
        this._client.on('message', message => {
            this.onMessage(message, prefix)
        })
    }

    addCommand (command, action) {
        this._commands.push({command: command, action: action})
    }

    onMessage(message, prefix){

        if (!message.content.startsWith(prefix)) return

        const cmd = message.content.split(' ')[0].substring(prefix.length)
        const args = message.content.split(' ').slice(1)

        this._commands.filter(({command}) =>
            command.aliases.includes(cmd.toLowerCase()) || cmd.toLowerCase() === command.name.toLowerCase()
        ).forEach(({command, action}) => {
            if(command.args !== undefined){
                if(command.args.length !== args.length){
                    return exception(message.channel, 'arguments', {
                        args: command.args
                    })
                }
            }
            this.permissions({command, action}, message, args)
        })

    }

    permissions ({command, action}, message, args) {

        const member = message.member
        const client = message.client
        const guild = message.guild

        command.permissions.user.forEach(perm => {
            if (!member.hasPermission(perm)){
                return exception(message.channel, 'permission', {
                    from: 'user',
                    permissions: command.permissions.user
                })
            }
        })

        guild.fetchMember(client.user, true).then(m => {
            for(let i = 0; i < command.permissions.client.length; i++){
                let permission = command.permissions.client[i]
                if(!m.hasPermission(permission)){
                    return exception(message.channel, 'permission', {
                        from: 'client',
                        permissions: command.permissions.client
                    })
                }
            }
            action(message, message.channel, this._client, args)
        })
    }

    createHelp (prefix) {
        const help = {
            name: 'help',
            description: 'get list of all commands',
            examples: ['help'],
            aliases: [],
            permissions: { user: [], client: [] }
        }

        this._commands.push({command: help, action: () => {}})

        const helpMessage = new Discord.RichEmbed()
            .setTitle("")
            .setColor("#016AC7")
            .setDescription("__**List of commands :**__")
            .setThumbnail("http://litarvan.github.io/krobot_icons/info_v2.png")

        this._commands.forEach(({command}) => {
            helpMessage.addField(prefix + '**' + command.name + ' ' +
                (command.aliases !== undefined && command.aliases.length > 0 ? '[' + command.aliases + ']' : '') + '**' +
                (command.args !== undefined ? command.args : ""), command.description)
        })

        this.addCommand(help, (message, channel, client, args) => {
            channel.send(helpMessage)
        })
    }

}

module.exports = Listener
