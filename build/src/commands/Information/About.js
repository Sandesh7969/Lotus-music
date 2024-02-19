import OrasCommand from "../../abstract/OrasCommand.js";
export default class About extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "about";
        this.desc = "Provides you with the information of the bot";
        this.usage = "about";
        this.aliases = [];
        this.cat = "info";
        this.exec = async (message, args, prefix) => {
            return message
                    .reply({
                    embeds: [
                        this.client.utils
                            .embed()
                            .setAuthor({
                                name: `${message.author.username}`,
                                iconURL: message.author.displayAvatarURL(),
                            })
                            .setTitle(`About`)
                            .setDescription(`<:boost_flora:1206855199013085235> Hey, It's **${client.user.username}** A Quality Music Bot With Breathtaking Features For Greater Experience While On Discord. **${client.user.username}** Is Making Music More Enhanced In Discord. Try **${client.user.username}** Now!\n\n**Developers**\n**[Akshay](https://discord.com/users/1191577120288297000) & [Radhe](https://discord.com/users/1146450017327009903)**\n\n**Owners**\n**[Supreme](https://discord.com/users/1131953433134497923) & [Radhe](https://discord.com/users/1146450017327009903)**\n\n**Contributors**\n**[Annyix](https://discord.com/users/1013123408097189938)**`)                            .setFooter({
                                text: `made by Akshay ${this.client.user.username}`,
                                iconURL: this.client.user.displayAvatarURL({ dynamic: true }),
                            }),
                    ],
                    components: [
                        this.client.utils.actionRow([
                            this.client.utils.button(`https://discord.com/api/oauth2/authorize?client_id=1203216933583978577&permissions=551906761088&scope=bot`, `Invite Me`, null, null, `${this.client.config.botinvite}`),
                            this.client.utils.button(`https://discord.gg/GPzYFx7zfe`, `Support`, null, null, `${this.client.config.server}`),
                            this.client.utils.button(`https://discord.gg/GPzYFx7zfe`, `Premium`, null, null, `${this.client.config.server}`),
                        ]),
                    ],
                })
        };
    }
}
//# sourceMappingURL=About.js.map