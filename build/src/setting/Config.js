export default class OrasConfig extends Object {
    token;
    prefix;
    nodes;
    spotiId;
    owners;
    spotiSecret;
    spotiNodes;
    webhooks;
    supportId;
    color;
    server;
    botinvite;
    voteUrl;
    voteApi;
    setupBgLink;
    constructor() {
        super();
        this.token =
            "" || process.env['token'];
        this.prefix = "+";
        this.nodes = [
            {
                name: `Oras`,
                url: `lava.link:80`,
                auth: `kronix`,
                secure: false,
            },
        ];
        this.voteApi =
            "";
        this.webhooks = {
            guildCreate: "https://discord.com/api/webhooks/1206509224796880906/ac0KbKQv5FmoUaLVijQmKRO_mUtb0Dg8hLwFyeGuBePlhc6rB-i5l2Rj87xV8Z1VUBHR",
            guildDelete: "https://discord.com/api/webhooks/1206509224796880906/ac0KbKQv5FmoUaLVijQmKRO_mUtb0Dg8hLwFyeGuBePlhc6rB-i5l2Rj87xV8Z1VUBHR",
            Cmds: "https://discord.com/api/webhooks/1206509224796880906/ac0KbKQv5FmoUaLVijQmKRO_mUtb0Dg8hLwFyeGuBePlhc6rB-i5l2Rj87xV8Z1VUBHR",
        };
        this.server = "https://discord.gg/GPzYFx7zfe";
        this.botinvite = `https://discord.com/api/oauth2/authorize?client_id=1203216933583978577&permissions=551906761088&scope=bot`;
        this.spotiId = "ada2f0339dd340df9aa14c76f33f84f3";
        this.spotiSecret = "9fd6d604c0f343b4a998839f43ef88c7";
        this.owners = ["1131953433134497923"];
        this.color = "#089be4";
        this.supportId = "1183922582366457856";
        this.spotiNodes = [
            {
                id: `Oras`,
                host: `lava.link`,
                port: 80,
                password: `kronix`,
                secure: false,
            },
        ];
        this.voteUrl = "https://discord.gg/GPzYFx7zfe";
        this.setupBgLink =
            "https://media.discordapp.net/attachments/1183400627875893348/1191395121133002752/Screenshot_2023-11-24-17-27-19-53_dba69a5e82e939c3ddef13f99a115ca3.jpg?ex=65a5482b&is=6592d32b&hm=a18f222cf78ea7ee1ba56b7ce987fdfe82d9471e3e9f6655ebec44d5acae0da6&=&format=webp&width=1155&height=515";
    }
}
//# sourceMappingURL=Config.js.map
