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

            case "Hi":

                message.channel.send("Hello!!!");

            break;

        }

        // 那如果是要當那個關鍵詞有出現在語句中就觸發是要怎樣呢
        // 像是玩過我的Bot的人都知道，當您打"應該"打成"因該"，就會觸發"抓到!!!(๑･`▱´･๑)"
        // 就要用到includes了，如下：

        if(message.content.includes("因該"))
        {

            message.channel.send("抓到!!!");
            return;

        }

        // 如果要加入表情符號
        
    }

);