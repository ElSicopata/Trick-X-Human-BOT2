//-----------------------------------------------------//
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function(request, response) {
	response.sendFile(__dirname + '/views/index.html');
});
app.listen(3000, () => console.log(`FUNCIONAMIENTO CORRECTO`));


//-------------------------FS(HANDLER Y MAS)---------------------------//

const fs = require('fs');


//-------------------------DISCORD---------------------------//

const { Client , Intents} = require('discord.js');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

//------------------------PRESENCIA DEL BOT--------------------------//

client.on("ready", () => {
   function presence() {
   client.user.setPresence({
     status: 'on',
     activity: {
     name: 'Trick X Human server',
     type: 'WATCHING'
     }
   })
   }
   presence();
   console.log(`INICIADO COMO BOT: ${client.user.tag}`); 
});


//-------------------------CONST EXTRAS---------------------------//
const Monitor = require('ping-monitor');
const logger = require('njs-logger')();

require('dotenv').config();



//---------------------------- CODIGO DEL BOT ----------------------------//




//-------------------------TOKEN---------------------------//

const mySecret = process.env['TOKEN']

client.login(mySecret);