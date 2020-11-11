const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
    let Status = [
        `Digite =ajuda para ver os comandos!`,
        `Bot oficial do BTE Nordeste Brasil`,
        `type =ajuda to see the commands!`,
        `Para participar do projeto peça ajuda para os admins`
    ],
    i = 0;
    setInterval(() => client.user.setActivity(`${Status[i++ % Status.length]}`, {type: "PLAYING"}), 10000);
    console.log(`Logado com o bot ${client.user.username} com sucesso`);
});

client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.toLowerCase().startsWith(config.prefix)) return;

    var comando = message.content.toLowerCase().split(" ")[0];
    comando = comando.slice(config.prefix.length);

    var args = message.content.split(" ").slice(1);

    try{
        var ArquivoComando = require(`./commands/${comando}.js`)
        ArquivoComando.run(client, message, args)
    } catch (erro) {
        console.log(erro)
    }
});

client.login(config.token);