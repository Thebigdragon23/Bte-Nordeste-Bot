const Discord = require("discord.js");
exports.run = (client,message,args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#0dfc11")
    .setTitle(`${message.author.username} seja bem-vindo a aba de ajuda!`)
    .setDescription("**Lembre-se sempre de usar `=` antes de qualquer comando.**")
    .addField("<:blobevil:743651093753364511> Comandos <:blobevil:743651093753364511>", "`buildteams`, `comoparticipar`, `downloads`, `ip`, `perguntasfrequentes`")
    .addField(`Links`, `| \[Bot icon]\(https://cdn.discordapp.com/attachments/765966431652151316/775727830569975838/BTE_nordeste_5.png) | \[Server original]\(https://discord.gg/X4fg9nXt) |`)
    message.channel.send(embed);
}