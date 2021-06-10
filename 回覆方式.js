const Discord = require("discord.js");
const TestBot = new Discord.Client();

// 主要訊息觸發地

TestBot.on("message", message =>

    {

        // 下面這就是用Switch來達成收到特定的關鍵詞來觸發
        // 以下面的為例：
        // 成員：喵~
        // Bot：喵～～

        // 但是，當如果成員打"喵"或"喵~~"，都不會觸發，一定要是"喵~"

        switch(message.content)
        {

            case "喵~":
            message.channel.send("喵～～");

            break;

        }


        
    }

);