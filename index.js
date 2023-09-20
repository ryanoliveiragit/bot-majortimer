require('dotenv').config();
const { MessageEmbed, Activity } = require('discord.js');
const { Client, Intents } = require('discord.js');
const axios = require('axios');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
});

client.on('ready', () => {
    setInterval(() => {
        const newYers = "19 January 2024"
        const newYearsDate = new Date(newYers);
        const currentDate = new Date();
        const totalSeconds = (newYearsDate - currentDate) / 1000;
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const data = (`${days} dias, ${hours} horas e ${mins} minutos`)
        client.user.setPresence({
            activities: [{
                name: data,
                type: 'PLAYING'
            }],
            status: 'online'
        });
    }, 1 * 60 * 1000);
    console.log('Discord presence atualizado!')
})

client.on('ready', () => {
    setInterval(() => {
        const newYers = "19 January 2024"
        const newYearsDate = new Date(newYers);
        const currentDate = new Date();
        const totalSeconds = (newYearsDate - currentDate) / 1000;
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const data = (`${days} dias, ${hours} horas e ${mins} minutos`)
        let chanel = client.channels.cache.get("961357693405265960")
        const msgembed = new MessageEmbed()
            .setColor('#ffff00')
            .setTitle('#Road to Galinhas')
            .setDescription(`Faltam: ${data}`)
            .setImage('https://www.esports.net/br/wp-content/uploads/sites/3/2022/05/Novo-Projeto.jpg')
            .setTimestamp()
            chanel.send({ content: `@everyone`, embeds: [msgembed] }).then(msg => setTimeout(() => msg.delete(), 100000));
            chanel.messages.delete('1015634901866905662', { timeout: 10000 });
    }, 86400000);
    console.log('Servidor Atualizado!')
})

client.on('messageCreate', async (message) => {
    const newYers = "19 January 2024"
    const newYearsDate = new Date(newYers);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const data = (`${days} dias, ${hours} horas e ${mins} minutos`)

    if (message.author.bot) return;

    if (message.content === '!galinhas') {
        try {
            const msgembed = new MessageEmbed()
                .setColor('#ffff00')
                .setTitle('#Road to Galinhas')
                .setDescription(`Faltam: ${data}`)
                .setImage('https://media.discordapp.net/attachments/961357693405265960/1154099734043164723/Victor_H._bodybuilder_chicken_on_sky_with_red_eyes_lightning_te_81214435-1bd1-423c-a1e1-c9404c687f4c.png?width=675&height=675') // Use a URL da imagem obtida
                .setTimestamp()
            message.channel.send({ embeds: [msgembed] }).then(msg => setTimeout(() => msg.delete(), 20000));
            setTimeout(() => message.delete(), 200000);
        } catch (error) {
            console.error(error);
            message.channel.send('Ocorreu um erro ao buscar a imagem.');
        }
    }
});
client.login(process.env.token)