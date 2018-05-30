import { Bot, Config, Login, Event, Command } from '../src/'

const prefix = "$"

@Config({
  version: "1.0",
  prefix,
  username: "name",
  icon_path: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/000080_Navy_Blue_Square.svg/2000px-000080_Navy_Blue_Square.svg.png",
  presence: { name: prefix + "help" }
})
class Ahk extends Bot {

  @Login('token')
  login ({ id }) {
    console.log("Connected")
  }

  @Event('ready')
  ready () {
    console.log('I\'m ready !')
  }

  @Command(/^help$/, {
    description: "",
    permissions: {
      user: ['ADMINISTRATOR'],
      client: []
    }
  })
  helpCommand (command, message) {
    message.reply('Hi')
  }

}

new Ahk()