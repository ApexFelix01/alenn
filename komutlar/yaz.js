﻿const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('Ne Yazayım Hava Mı?');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor("Yazdıran: " + message.author.username)
    .setColor(3447003)
    .setDescription(`“${mesaj}”`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz Şeyi Bota Yazdırır.',
  usage: 'yaz [Ne Yazayım Hava Mı?]'
};
