const Discord = require("discord.js");
const TestBot = new Discord.Client();

// Bot開啟好並有連接上帳號的提示訊息

TestBot.on("ready", () =>

    {

        console.log(`成功登入進 ${TestBot.user.tag}`);

    }

);

// Bot發生錯誤時的觸發處(目前暫當防當機用)

TestBot.on("error", error =>

    {

        console.log(`發生錯誤 OAO`);

    }

);

// 主要訊息觸發地

TestBot.on("message", message =>

    {

        
        
    }

);

// Bot登入時用

TestBot.login("<把Token複製到這>");