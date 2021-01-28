const TelegramBot = require('node-telegram-bot-api');

const token = 'secrets.BOTTOKEN';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/^\/start/, function(msg){
    console.log(msg);
    var chatId = msg.chat.id;
    var username = msg.from.username;
    bot.sendMessage(chatId, "Workflow ejecutado correctamente tras el último commit. Saludos" + username );
});

bot.on('message', function(msg){
    console.log(msg);
    var chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Mensaje enviado');
});
