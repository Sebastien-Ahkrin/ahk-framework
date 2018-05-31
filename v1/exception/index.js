const Discord = require('discord.js')

function exception (channel, type, obj) {
    switch(type){
        case 'permission':
            channel.send(permissions(obj))
            break;
        case 'arguments':
            channel.send(argument(obj))
            break;
        default:
            break;
    }
}

function argument (obj) {
    const argument = new Discord.RichEmbed()
        .setTitle("")
        .setColor("#b8001e")
        .setDescription("")
        .setThumbnail("http://litarvan.github.io/krobot_icons/error.png")
        .addField("**Error**", "You need arguments.")
        .addField('**args**', obj.args)

    return argument
}

function permissions (obj) {
    const permission = new Discord.RichEmbed()
        .setTitle("")
        .setColor("#b8001e")
        .setDescription("")
        .setThumbnail("http://litarvan.github.io/krobot_icons/error.png")
        .addField("**Error**", "You need more permissions.")
        .addField('**From**', obj.from)
        .addField('**Needed**', obj.permissions)

    return permission
}

module.exports = exception
