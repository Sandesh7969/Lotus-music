export default class AvonEmoji extends Object {
  constructor(client) {
      super();
      this.tick = "<a:tick_kastro:1191703538485702727>";
      this.cross = "<a:wrong_kastro:1191703733457911820>";
      this.playing = "<:playing_flora:1206832840776355871>";
      this.exclamation = "<:exclamation_kastro:1191704038681616466>";
      this.queue = "<:icons_queue:1191875521856942181>";
      this.info = "<:info:1206834266407833681>";
      this.defSearch = "<:youtube:1175853535343165550>";
      this.premium = "<a:premium:1206834878084026419>";
      this.invite = "<:icons_invite:1191704777143373834>";
      this.support = "<:Support:1191705751228534784>";
      this.spotiSearch = "<:Spotify:1175478136486494369>";
      this.deezSearch = "<:Deezer_avon:1065634451603861545>";
      this.vote = "<:voter:1191706388024524810>";
      this.soundSearch = "<:Soundcloud:1175479201386745868>";
      this.badges = {
          named: "<:owner:1191706635081621504>",
          owner: "<:owner:1191706635081621504>",
          dev: "<a:developer_bot:1191706873615880273>",
          admin: "<:mod_badge:1191707743048974366>",
          codev: "<:codev:1206836807858257930>",
          author: "<:kronix_member:1191708016903471115>",
          friend: "<:bsdk_friends:1191707379138572338>",
          angel: "<:heart_flora:1191613717570404474>",
          vip: "<:vip_trixo:1191730469541269625>",
          premiumUser: "<:premuser_trixo:1191731653312270446>",
          mod: "<:mod_trixo:1191731648031633438>",
          staff: "<:staff_trixo:1191731661872836760>",
          supporter: "<:supporter_trixo:1191731669745545327>",
          user: "<:user_trixo:1191731656718041188>",
      };
      this.helpMenu = {
          music: "<:music__kastro:1191703892438822913>",
          home: "<:Home:1191708364019875932>",
          filters: "<:icons_richpresence:1191708935351181372>",
          info: "<:info:1206834266407833681>",
          settings: "<:settings:1191708779016900609>",
          moderation: "<:mod_badge:1191707743048974366>",
          utility: "<:utility:1199190902149746688>",
          allCommands: "<:save:1206840215289724958>",
      };
      this.setup = {
          pause: "<a:pauseplay:1175848721959899246>",
          resume: "<:Resume:1175848855376515223>",
          skip: "<a:skip:1175849020497866814>",
          previous: "<:Previous:1175849257023066118>",
          shuffle: "<:shuffle:1175849805944197201>",
          author: "<:author:1175849969769525400>",
          nowPlaying: "<a:Playing:1175466820371742731>",
          requester: "<a:requester_astoria:1175850447941140560>",
          duration: "<a:trixo_m_time:1149968548941267024>",
          stop: "<:Stop:1175851326987571313>",
          loop: "<:loop_button:1175851610002440337>",
          volLow: "<:speaker_low_volume:1175851799253618779>",
          volHigh: "<:high_volume:1175852096071925790>",
          fav: "<a:favorite:1137974920081584269>",
          autoplay: "<:autoplayy:1175852470115774626>",
          filters: "<:filters:1149974881765695629>",
      };
      this.avonNew = {
          emote: "<a:botplaying:1206840787363696640>",
          nowPlaying: "<:playing_flora:1206832840776355871>",
          requester: "<:requester_flora:1206841220211548181>",
          duration: "<:time_flora:1206841364663377930>",
          author: "<:author_flora:1206841481407500319>",
          pause: "<:pause_flora:1206841600114696243>",
          resume: "<:resume_flora:1206841741173329920>",
          skip: "<:skip_flora:1206841900519129088>",
          fav: "",
          previous: "<:skip_flora:1206841900519129088>",
          stop: "<:stop_flora:1206842180652507196>",
      };
      this.spotify = {
          emote: "<:Spotify:1175478136486494369>",
          filters: "<:filter_flora:1175441337722622115>",
          nowPlaying: "<:playing_flora:1175744376647974982>",
          requester: "<:requester_flora:1175748353741566072>",
          duration: "<:time_flora:1176027273766383636>",
          pause: "<:pause_flora:1175756159278387282>",
          author: "<:author_flora:1175756101208256572>",
          resume: "<:resume_flora:1175756223363158036>",
          stop: "<:stop_flora:1175756028772626442>",
          loop: "<:loop_flora:1175759763154407484>",
          shuffle: "<:shuffle_flora:1176147704972333056>",
          forward: "<:skip_flora:1176147582356037704>",
          backward: "<:backward_flora:1176147635573366945>",
          volLow: "<:lowvol_flora:1175760416337559692>",
          volHigh: "<:highvol_flora:1175760342928850975>",
          previous: "<:skip_flora:1176147582356037704>",
          skip: "<:skip_flora:1176147582356037704>",
      };
      this.special = {
          emote: "<a:premium:1175845057618792510>",
          nowPlaying: "<:playing_flora:1175744376647974982>",
          requester: "<:requester_flora:1175748353741566072>",
          duration: "<:time_flora:1176027273766383636>",
          pause: "<:pause_flora:1175756159278387282>",
          author: "<:author_flora:1175756101208256572>",
          resume: "<:resume_flora:1175756223363158036>",
          stop: "<:stop_flora:1175756028772626442>",
          loop: "<:loop_flora:1175759763154407484>",
          shuffle: "<:shuffle_flora:1176147704972333056>",
          forward: "<:skip_flora:1176147582356037704>",
          backward: "<:backward_flora:1176147635573366945>",
          volLow: "<:lowvol_flora:1175760416337559692>",
          volHigh: "<:highvol_flora:1175760342928850975>",
          previous: "<:skip_flora:1176147582356037704>",
          skip: "<:skip_flora:1176147582356037704>",
      };
      this.noButtons = {
          emote: "<:playing_flora:1175744376647974982>",
          nowPlaying: "<:playing_flora:1175744376647974982>",
          author: "<:author_flora:1175756101208256572>",
          requester: "<:requester_flora:1175748353741566072>",
          duration: "<:time_flora:1176027273766383636>",
          filters: "<:filter_flora:1175441337722622115>",
      };
      this.simple = {
          emote: "<:playing_flora:1175744376647974982>",
          nowPlaying: "<:playing_flora:1175744376647974982>",
          requester: "<:requester_flora:1175748353741566072>",
          author: "<:author_flora:1175756101208256572>",
          duration: "<:time_flora:1176027273766383636>",
          previous: "<:previous_trixo:1197166527342968842>",
          filters: "<:filter_flora:1175441337722622115>",
          pause: "<:pause_trixo:1197166524759294003>",
          resume: "<:resume_trixo:1197166519843569695>",
          stop: "<:stop_trixo:1197166538504011806>",
          skip: "<:skip_trixo:1197166531134619719>",
          loop: "<:loop_trixo:1197166514047033474>",
      };
      this.oldStyle = {
          emote: "<:playing_flora:1175744376647974982>",
          nowPlaying: "<:playing_flora:1175744376647974982>",
          author: "<:author_flora:1175756101208256572>",
          requester: "<:requester_flora:1175748353741566072>",
          duration: "<:time_flora:1176027273766383636>",
      };
  }
}
//# sourceMappingURL=Emoji.js.map