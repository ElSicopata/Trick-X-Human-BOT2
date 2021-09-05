const Discord = require('discord.js');

module.exports = {
  name: "hola", 
  alias: ["Hola"], 

execute (client, message, args){

  message.channel.send("Hola")

 }

} 