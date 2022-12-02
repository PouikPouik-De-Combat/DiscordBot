const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: 3276799 });
const express = require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server)


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async interaction => {
    console.log(interaction.content);
    var sp = interaction.content.split(" ");
    if(sp[0] === '!add-Image') {
        console.log(sp[1]);
        io.emit('img', sp[1]);
    }
    if(sp[0] === '!add-Text') {
        let text = sp.slice(1).join(" ");
        console.log(text);
        io.emit('p', text);
    }
    if(sp[0] === '!add-Titre') {
        let text = sp.slice(1).join(" ");
        console.log(text);
        io.emit('titre', text);
    }
    if(sp[0] === '!clear') {
        //console.log(sp[1]);
        io.emit('clear');
    }

    if(sp[0] === '!claire') {
        //console.log(sp[1]);
        io.emit('claire');
    }
    if(sp[0] === '!sombre') {
        //console.log(sp[1]);
        io.emit('sombre');
    }

});
io.on('connection', (socket) => {
    console.log('a user connected');


});


client.login('MTA0ODAwMTMwNzYyNzI0NTY5OA.GHV8-Y.4EVwFDjNdMll9PDeI_AY7p4dZb2lM6GOK5Sd9U');

server.listen(3000);

