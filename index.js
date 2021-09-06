//-----------------------24/7 REPLIT------------------------------//
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

//-------------------------- CONST EXTRAS ---------------------------//
const Monitor = require('ping-monitor');

const { BOT } = require('./src/config')

const { Client , Intents, MessageEmbed, Collection, Util } = require('discord.js');

const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

//-------------------------FS HANDLER Y MAS---------------------------//

const fs = require('fs');

const path = require('path');

const { comandos } = require(`${__dirname}/src/utils/handler/comandos.js`);

const { eventos } = require(`${__dirname}/src/utils/handler/eventos.js`);

comandos(fs, client, Collection)
eventos(fs, client, MessageEmbed, Util)


//------------------------PRESENCIA DEL BOT--------------------------//

//---------------------------- CODIGO DEL BOT ----------------------------//


//-------------------------TOKEN---------------------------//

client.login(BOT.token);