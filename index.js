const Discord = require('discord.js');

const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const token = 'NzU3NjgxODA5OTY1MTg3MTQz.X2j8LA.2sCCQTATxQIk16iGBuXMLDprqcI';

const prefix = '<@!757681809965187143>';

bot.login(token)

bot.on('ready', () => console.log('O pai ta on'))

bot.on('message', msg => {

    const filter = (reaction) => {
        return reaction.emoji.name === '🚫';
    };
    
    const collector = msg.createReactionCollector(filter, { time: 600000 });
    
    collector.on('collect', (reaction,) => {
        console.log(`Collected ${reaction.emoji.name}`);

        if(content.includes('o') || content.includes('a')){
            let newMsg = content.replace("<@!757681809965187143>", "");
            let newMsg2 = newMsg.replace(/a/g, "e")
            msg.reply(newMsg2.replace(/o/g, "e"));
            console.log(newMsg);
        }

    });
    
    collector.on('end', collected => {
        console.log(`Collected ${collected.size} items`);
    });

    var contentAux = msg.content.toLowerCase()
    var content = contentAux.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
    console.log(content)

    if(msg.author.bot)return;
    if(!msg.content.startsWith(prefix)) return;

    if(content.includes('help')){
        msg.author.send('Me marque "@Gender Bot" e coloque uma frase na frente, ou reaja com "🚫" na frase que você escolher que vou corrigi-la pra você :)\nAssim você aprende a escrever direito seu misógino\nFeito por Bruno Cavalcanti\nGithub: https://github.com/brunoccavalcanti')
    }

    else if(content.includes('creditos')){
        msg.reply('Criado por Bruno Cavalcanti')
    }

    else if(content.includes('o') || content.includes('a') && !(content.includes('help'))){
        let newMsg = content.replace("<@!757681809965187143>", "");
        let newMsg2 = newMsg.replace(/a/g, "e")
        msg.reply(newMsg2.replace(/o/g, "e"));
        console.log(newMsg);
    }

    else if(content.includes('ei') || content.includes('emigue')){
        msg.reply("Ei amigue, tude bem?");
    }

    else if(!(content.includes('o')) || !(content.includes('a')) || !(content.includes('help'))){
        msg.reply("Vece je escreveu cem genere neutre, perebens");
    }
})
