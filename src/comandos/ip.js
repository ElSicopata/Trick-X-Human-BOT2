const Discord = require('discord.js');

module.exports = {
  name: "ip", 
  alias: [], 

execute (client, message, args){
 
 const ayy = client.emojis.cache.get("882804107822391296");
 
 const java = new Discord.MessageEmbed()
 .setTitle("IP DE JAVA\n")
 .setDescription(`—————————————————\n\n *Ip del servidor para version de java*\n\n ${ayy} **Version de Minecraft:** \n 1.17.1 \n\n •**IP:**\n r1.falix.gg:26952\n\n—————————————————`)
 .setTimestamp()
 .setColor("BLUE")
 .setFooter("TRICK X HUMAN SERVER")
 .setThumbnail("https://media.discordapp.net/attachments/842485298993954867/881795896403173466/images.jpeg")
 
 const bedrock = new Discord.MessageEmbed()
 .setTitle("IP DE BEDROCK\n")
 .setDescription("—————————————————\n\n *Ip del servidor para version de bedrock / pe(pocket edition)*\n\n •** Version de Minecraft bedrock / pe:** \n 1.17.1,1.17.2,1.17.10 o 1.17.11 \n\n •** IP:**\n r1.falix.gg\n\n •** PUERTO:**\n 27047\n\n—————————————————")
 .setTimestamp()
 .setColor("BLUE")
 .setFooter("TRICK X HUMAN SERVER")
 .setThumbnail("https://media.discordapp.net/attachments/842485298993954867/881807258428780564/91dbnbwcrfu51.png")
 
 
 message.channel.send(java)
 
 message.channel.send(bedrock)
 
 message.channel.send(`${ayy} xd`)

  
}
}