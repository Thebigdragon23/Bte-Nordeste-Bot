const Discord = require("discord.js");
exports.run = (client,message,args) =>{
    const Embed = new Discord.MessageEmbed()
    .setColor("#e7fc03")
    .setTitle("<:fluffysmily:743651515998404658> Como Participar <:fluffysmily:743651515998404658>")
    .setDescription(`**${message.author.username} seja bem-vindo a aba de Como Participar**`)
    .addField("Para participar do projeto peço que primeiramente se registre em #info┇comece por aqui.", "**Após fazer isso escolha seu estado em #🧭-𝐄𝐬𝐜𝐨𝐥𝐡𝐚-𝐬𝐮𝐚-𝐑𝐞𝐠𝐢𝐚𝐨.**")
    .addField("Após você ter se registrado no servidor, você irá se registrar no site(https://buildtheearth.net/buildteams/217).", "**Após ter sido aprovado no site, leia os chats #𝐑𝐞𝐬𝐞𝐫𝐯𝐚𝐬📑 e #𝑹𝒆𝒈𝒓𝒂𝒔-𝑷𝒂𝒓𝒂-𝑻𝒊𝒎𝒆**")
    .addField("Depois de você ter lido os chats reserve uma área e leia #𝑺𝒆𝒓𝒗𝒆𝒓-𝑰𝒏𝒇𝒐❓", "**Após você ter todas lido tudo e ter sido aprovado, poder começar a construir!**")
    .setFooter("Para infos mais específicas vá para #como-fazer-parte-do-projeto")
    message.channel.send(Embed);
}