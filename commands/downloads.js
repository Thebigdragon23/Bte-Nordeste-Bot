const Discord = require("discord.js");
exports.run = (client,message,args) =>{
    const embed = new Discord.MessageEmbed()
    .setTitle("💾 Downloads 💾")
    .setColor("#0016ba")
    .setDescription(`**${message.author.username} seja bem-vindo a aba de Downloads!**`)
    .addField("Agora nós temos instaladores automáticos para o nosso modpack! Tudo que você precisa fazer é ter o cliente vanilla instalado.", "**Faça o download do nosso instalador automatico, pressione 'Install' e todos os mods, configurações e configurações são feitos para você!**")
    .addField("<:windows:775753890322317372> Windows <:windows:775753890322317372>", "| \[Download]\(https://bte-installer.s3.amazonaws.com/public/installer/v1.11/BTEInstaller-1.11-windows.zip) |")
    .addField("<:Mac:775754231222108229> MAC <:Mac:775754231222108229>",  "| \[Download]\(https://bte-installer.s3.amazonaws.com/public/installer/v1.11/BTEInstaller-1.11-mac.dmg) |")
    .addField("<:linux:775754270280122380> Linux <:linux:775754270280122380>", "| \[Download]\(https://bte-installer.s3.amazonaws.com/public/installer/v1.11/BTEInstaller-1.11-linux.tar.gz) |")
    .addField("<:java:775754340258152519> Universal <:java:775754340258152519>", "| \[Download]\(https://bte-installer.s3.amazonaws.com/public/installer/v1.11/BTEInstaller-1.11-universal.jar) |")
    .addField("No Windows, você precisa pressionar 'More info' e depois 'Run anyways'\n", "**Atenção: O arquivo Mac funciona apenas com o MacOS 10.15, enquanto o arquivo universal também funciona com outras versões.**")
    message.channel.send(embed);
}