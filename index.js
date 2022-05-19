const Discord = require("discord.js")
require("dotenv").config()
const TOKEN = "OTc2NjkxMDE4NDgzMjUzMzA4.GIbZnW.it8jtoyG3XVyaGYmwLIyW7N5_niVFAZGY3tNFw"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]

})

client.on("ready", () => {
    console.log('Logged in as ${WelcomeBot.#4684}')
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello !")
    }
})

client.login(process.env.TOKEN)