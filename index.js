const TelegramBot = require("node-telegram-bot-api");
const Token = "8000665333:AAEjhx_OzWwcjqlEm6EEPzF_hCpvjKQDvQI";

const bot = new TelegramBot(Token, {polling:true});


// Start bot

bot.onText(/\/start/, (msg, match) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "Hi Mr Shahidi");
})
