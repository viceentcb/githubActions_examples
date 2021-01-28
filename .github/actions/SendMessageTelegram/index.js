let core = require("@actions/core");
let TelegramBot = require('node-telegram-bot-api');

let token = core.getInput("TokenBot");
let chatid=core.getInput("ChatId");
let name = core.getInput("Name");

let bot = new TelegramBot(token, {polling: false});



try {
    bot.sendMessage(chatid, "Workflow ejecutado correctamente tras el último commit. Saludos "+name);
  
  } catch (error) {
    core.setFailed(error.message);
  }

core.setOutput("message", "Mensaje enviado con exito");
