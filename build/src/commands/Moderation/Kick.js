import OrasCommand from "../../abstract/OrasCommand.js";
import { Client } from "discord.js";
import { PermissionsBitField } from "discord.js";

export default class Kick extends OrasCommand {
 constructor(client) {
  super(client);
  this.name = "kick",
  this.cat = "moderation",
  this.desc = "Kicks the specified user.",
  this.args = true,
  this.usage = "<user>",
  this.userPerms = ["KickMembers"],
  this.clientPerms = ["KickMembers"],
      this.premium = {
      guild: false,
      user: false,
    };
  this.exec = async (message, args, prefix) => {
    const member = message.mentions.members.first();

    if(!message.member.permissions.has(PermissionsBitField.Flags.KickMembers)){

      return message.channel.send({content : "You are lacking permissions : Kick Members"})
    } else {

    if (!member) {
      return message.reply("Please mention a valid member of this server");
    }
      

    if (!member.kickable) {
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    }
      

    const reason = args.slice(1).join(" ") || "No reason provided";

    await member.kick(reason)
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} for "${reason}"`);


  }
}
}
}