const Discord = require("discord.js");
exports.run = (client,message,args) =>{
    const Embed = new Discord.MessageEmbed()
    .setTitle("📜Info Bot📜")
    .setDescription(`**${message.author.username} seja bem-vindo a aba de info Bot(informações sobre mim :3)**`)
    .addField(`Por quem eu fui criado?`, `O meu autor foi @zZ#2929`)
    .addField(`Em que Linguagem fui feito?`, `Bom eu fui feito em português... pera não era isso que você queria saber? Ahhh linguagem de programação, eu fui feito em javascript <:js:776203003933884456>`)
    .addField(`Onde posso encontrar seu codigo?`, `ele esta disponível no \[GitHub]\()`)
}