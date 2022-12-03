const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { prefix, developerID, color, support, bot } = require("../../config.json")

module.exports = {
  name: "donasi",
  aliases: ["donet"],
  description: "Information",

  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle(`Donasi untuk korban di cianjur ${bot}`)
      .setDescription(`*kalian bisa klik button donasi dibawah 👇🏻*`)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(`Requested by: ${message.author.tag}`)
      .setColor(`${color}`)


    let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💰 Saweria')
      .setURL(`https://saweria.co/streamersepi`);
    let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('💰 Sociabuzz')
      .setURL(`https://sociabuzz.com/streamersepi/tribe`);


    return message.channel.send(helpEmbed, {
      button: [button1, button2],
    });

  },
};