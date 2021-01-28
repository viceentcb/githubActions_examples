let core = require("@actions/core");
let TelegramBot = require('node-telegram-bot-api');
let github = require("@actions/github")
github = github.context.payload;

let token = core.getInput("TokenBot");
let chatid=core.getInput("ChatId");
let name = core.getInput("Name");

let bot = new TelegramBot(token, {polling: false});

try {
    bot.sendMessage(chatid, `Workflow ejecutado correctamente tras el último commit. Saludos ${name} \n 
                             Autor: ${github.head_commit.author.name} \n
                             Email Autor:${github.head_commit.author.email} \n
                             Committer: ${github.head_commit.committer.name} \n 
                             Email Committer: ${github.head_commit.committer.email} \n
                             Message Committer : ${github.head_commit.message}
                             Repository: ${github.head_commit.url}`);
  } catch (error) {
    core.setFailed(error.message);
  }

 core.setOutput("message", "Mensaje enviado con exito");
