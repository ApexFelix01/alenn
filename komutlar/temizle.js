﻿const Discord = require('discord.js');
exports.run = function(client, message, args) {

  if (!message.guild) {
    return message.author.send('`temizle` **Komutu Sadece Sunucularda Kullanılabilir.**');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('**Kaç mesaj silmem gerektiğini belirtmedin.**')
  if (mesajsayisi > 100) return message.channel.send('**__100__** **Adetden Fazla Mesaj Silemem!**');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send('**__' + mesajsayisi + '__** **Adet Mesaj Sildim!** ')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirlenen Miktar Mesajı Siler.',
  usage: 'temizle <temizlenecek mesaj sayısı>'
};
