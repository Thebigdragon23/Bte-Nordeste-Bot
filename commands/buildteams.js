const Discord = require("discord.js");
exports.run = (client,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#00edd1")
    .setTitle("<:minecraft:743653316973821983> BuildTeams <:minecraft:743653316973821983>")
    .addField("Link para times brasileiros do BTE", "| \[Link]\(https://buildtheearth.net/buildteams?search_search=&search_country=31) |")
    message.channel.send(embed);
}