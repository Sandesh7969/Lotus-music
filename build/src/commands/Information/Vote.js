import OrasCommand from "../../abstract/OrasCommand.js";
export default class Vote extends OrasCommand {
    constructor(client) {
        super(client);
        this.name = "vote";
        this.aliases = [];
        this.desc = "Gives you the vote link for the bot";
        this.usage = "vote";
        this.cat = "info";
        this.exec = async (message, args, prefix) => {
            return message.reply({
                embeds: [
                    this.client.utils
                        .premiumEmbed(message.guildId)
                        .setAuthor({
                            name: `Vote`,
                            iconURL: this.client.user.displayAvatarURL(),
        })
        .setDescription(`Wanna Vote Me?\n Click the Button.`),
    ]
                
})
        }



    }
}
//# sourceMappingURL=Vote.js.map