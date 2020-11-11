const Discord = require("discord.js");
exports.run = (client,message,args)  =>{
    const embed = new Discord.MessageEmbed()
    .setColor("#fc0303")
    .setTitle("❓𝙋𝙀𝙍𝙂𝙐𝙉𝙏𝘼𝙎-𝙁𝙍𝙀𝙌𝙐𝙀𝙉𝙏𝙀𝙎 ❓")
    .setDescription(`**${message.author.username} seja bem-vindo a aba de perguntas frequentes**`)
    .addField("Tenho 12 anos, posso construir?", "Apenas 13 ou mais, infelizmente")
    .addField("Precisa de Mine original?", "Sim")
    .addField("Pocket Edition serve?", "Basicamente não")
    .addField("Bedrock Edition?", "É um pouco diferente o sistema, nosso time infelizmente só trabalha com Java Edition")
    .addField("Não tenho mine original, abre uma exceção?", "Não, esse requisito faz parte de uma politica de credibilidade do BTE inteiro.")

    message.channel.send(embed);
}