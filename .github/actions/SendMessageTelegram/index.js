const core = require("@actions/core");
const TelegramBot = require('node-telegram-bot-api');

const token = core.getInput("TokenBot");
const chatid=core.getInput("ChatId");
const name = core.getInput("Name");

const bot = new TelegramBot(token, {polling: false});



try {
    bot.sendMessage(chatid, "Workflow ejecutado correctamente tras el último commit. Saludos "+name);


    bot.on('polling_error', (error) => {
      console.log("----------------");  // => 'EFATAL'

      console.log(error.code);  // => 'EFATAL'
    });
  
  } catch (error) {
    core.setFailed(error.message);

    bot.on('polling_error', (error) => {
      console.log("----------------");  // => 'EFATAL'
      console.log(error.code);  // => 'EFATAL'
    });
  }

core.setOutput("message", "Mensaje enviado con exito");
