'use strict'

import { promisify } from 'util'
import { readFile } from 'fs'
import Discord from 'discord.js'

const readFileAsync = promisify(readFile)
const client = new Discord.Client()

export default class Bot {

  constructor () {}

  LoginBot () {
    return new Promise((resolve, reject) => {
      client.login(this._token).catch(reject).then(_ => {
        client.on('message', message => {
          this.onMessage(message, this._config.prefix)
        })
        if(this._config.icon_path) this.setAvatar(this._config.icon_path).catch(reject)
        resolve(client.user)}
      )
    })
  }

  addEvent (event, callback) {
    client.on(event, callback)
  }

  addCommand (regex, callback, options) {
    if(this._commands) this._commands.push({ regex, callback, options })
    else {
      this._commands = []
      this._commands.push({ regex, callback, options })
    }
  }

  onMessage (message, prefix) {
    if(!message.content.startsWith(prefix)) return

    const cmd = message.content.split(' ')[0].substring(prefix.length)
    const args = message.content.split(' ').slice(1)

    this._commands.filter(command =>
      cmd.toLowerCase().match(command.regex)
    ).forEach(command => {
      if(this.permissions(command, message)){
        command.callback(command, message)
      }
    })

  }

  permissions (command, message) {
    const member = message.member
    return (this.hasPermissions(member, command.options.permissions.user) 
      && this.hasPermissions(client, command.options.permissions.client))
  }

  hasPermissions (member, permissions) {
    let data = true
    permissions.forEach(permission => {
      if(!member.hasPermission(permission)){
        data = false
      }
    })
    return data
  }

  setAvatar (icon) {
    return readFileAsync(icon).then(client.user.setAvatar)
  }

}