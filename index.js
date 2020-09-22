const Discord = require('discord.js');

const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

const token = 'NzU3NjgxODA5OTY1MTg3MTQz.X2j8LA.2sCCQTATxQIk16iGBuXMLDprqcI';

const prefix = '<@!757681809965187143>';

bot.login(token)

bot.on('ready', () => console.log('O pai ta on'))

bot.on('message', async (msg) => {

    var contentAux = msg.content.toLowerCase()
    var content = contentAux.normalize("NFD").replace(/[\u0300-\u036f]/g, '');

    if(content.includes('mute')){
        const role = msg.guild.roles.cache.find(role => role.id === '285831986998935552');
        const member = msg.mentions.members.last();

        if(member.id === '302172430024179722'){

            member.roles.remove(role) 
            //console.log(member.id)

            bot.setTimeout(() => {
                member.roles.add(role)
                //console.log(msg.guild.roles) 
            }, 30000)
        }
        
    }
})

bot.on('message', async (msg) => {

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

    if(content.includes('creditos')){
        try{
            msg.reply('Criado por Bruno Cavalcanti')
        }catch(e){
            console.log(e)
        }
    }

    else if(content.includes('o') || content.includes('a') && !(content.includes('help'))){
        try{
            let newMsg = content.replace("<@!757681809965187143>", "");
            let newMsg2 = newMsg.replace(/a/g, "e")
            msg.reply(newMsg2.replace(/o/g, "e"));
            console.log(newMsg);
        }catch(e){
            console.log(e)
        }
    }

    else if(content.includes('ei') || content.includes('emigue')){
        try{
            msg.reply("Ei amigue, tude bem?");
        }catch(e){
            console.log(e)
        }
    }

    else if(!(content.includes('o')) || !(content.includes('a')) && !(content.includes('help'))){
        try{
            msg.reply("Vece je escreveu cem genere neutre, perebens");            
        }catch(e){
            console.log(e)
        }
    }
})
