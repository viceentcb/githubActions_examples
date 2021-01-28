const core = require("@actions/core");
const TelegramBot = require('node-telegram-bot-api');

const token = core.getInput("TokenBot");
const chatid=core.getInput("ChatId");
const name = core.getInput("Name");

const bot = new TelegramBot(token, {polling: false});

try {
    bot.sendMessage(chatid, "Workflow ejecutado correctamente tras el último commit. Saludos "+name);
  
  } catch (error) {
    core.setFailed(error.message);
  }

core.setOutput("message", "Mensaje enviado con exito");
