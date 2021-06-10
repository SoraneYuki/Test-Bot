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

TestBot.on("message", message =>

    {

        switch(message.content)
        {

            case "大姐姐":

                message.channel.send("哪裡有香香大姐姐!!!!");

            break;

            case "沒有大姐姐":

                message.channel.send("我要香香大姐姐:neneseal:!!!!");

            break;

        }

        if((message.content.includes("大姊姊")) && (message.author.id != `852449801252503572`))
        {

            message.channel.send("我要大姊姊(๑･`▱´･๑)!");
            return;

        }
        
    }

);

// Bot登入時用

TestBot.login("ODUyNDI0MDM4ODMxNjIwMTQ4.YMGnwA.c4X_U6OaW-RmiuTtjIwA_z_LhVk");