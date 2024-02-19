import OrasCommand from "../../abstract/OrasCommand.js";
import { PermissionsBitField } from "discord.js";
import { Client } from "discord.js";

export default class Ban extends OrasCommand {
 constructor(client) {
  super(client);
  this.name = "ban",
  this.aliases = ['ban'],
  this.cat = "moderation",
  this.desc = "Bans a user from the server."
  this.usage = "<user> [reason]",
      this.premium = {
      guild: false,
      user: false,
    };
  this.userPerms = ["BanMembers"],
  this.clientPerms = ["BanMembers"],
  this.exec = async (message, args, prefix) => {
    const member = message.mentions.members.first();
    const reason = args.slice(1).join(' ');
      
      if(!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)){

            return message.channel.send({content : "You are lacking permissions : Ban Members"})
      } else {

    if (!member) {
      return message.reply({ content: 'Please mention a valid user.' });
    }

    if (!member.bannable) {
      return message.reply({ content: 'I cannot ban this user.' });
    }

    if (!reason) {
      return message.reply({ content: 'Please provide a ban reason.' });
    }

    try {
      await member.ban({ reason });
      message.channel.send({ content: `${member.user.tag} has been banned from the server.` });
    } catch (err) {
      console.error(err);
      message.reply({ content: 'An error occurred while trying to ban this user.' });
    }
  }
}
 }
}
