const Discord = require('discord.js');

module.exports = {
  name: "kiss", 
  alias: [], 
  

execute (client, message, args){

const yo = message.member;

const mencion = message.mentions.members.first()
/////////Definimos usuario, que seria el autor del mensaje o la primera mencion//////
 const kiss = new Discord.MessageEmbed()
 .setTitle(yo.user.username + ' ha besado a  ' + mencion.user.username )
 .setDescription("")
 .setTimestamp()
 .setColor("BLUE") 
 .setFooter("TRICK X HUMAN SERVER")
 .setImage("https://media.discordapp.net/attachments/882323304587882496/882416568317906984/16304548704681869953216.gif")
 
message.channel.send(kiss)


  
}
}