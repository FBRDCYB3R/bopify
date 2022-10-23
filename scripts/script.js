new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
               {
          name: "Fly Me To The Moon Lofi Cover",
          artist: "Yung Prod",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Fly Me To The Moon Lofi Cover Prod YungRhythm.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        
  
        {
          name: "Astronaut in the ocean",
          artist: "Masked wolf",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/9.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/- Masked Wolf Astronaut in the Ocean.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Ride it",
          artist: "Unknown",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/6.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/- Nightcore Ride It Lyrics.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "My Head, My Heart",
          artist: "Ava Max",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/12.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Ava Max - My Head & My Heart (Lyrics).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Wild fire",
          artist: "Against the Current",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/7.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Against The Current - Wildfire (Lyrics).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "again and again",
          artist: "Against the current",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/6.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Against The Current - again&again (Lyrics) (feat. guardin).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
                {
          name: "Jump",
          artist: "Against the current",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/10.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Against The Current - jump (Lyrics_Letra).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
                 {
          name: "Lullaby",
          artist: "Against the current",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/11.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Against the Current - Lullaby (Lyrics).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
                 {
          name: "Weapon",
          artist: "Against the current",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/11.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Against the Current - Weapon (Lyrics).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
                  {
          name: "Man on the moon",
          artist: "Alan Walker",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/1.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Alan Walker & Benjamin Ingrosso - Man On The Moon.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Running out of roses",
          artist: "Alan Walker",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/2.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Alan Walker x Jamie Miller - Running Out Of Roses (Official Lyric Video).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
         {
          name: "Space melody",
          artist: "Alan Walker",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/2.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Alan Walker x VIZE Space Melody Lyrics Edward Artemyev ft Leony.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Fuego",
          artist: "Alok",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/1.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Alok & Bhaskar - Fuego.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
         {
          name: "Typical",
          artist: "Alok",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/16.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Alok & Steve Aoki - Typical (feat. Lars Martin) [Official Audio].mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
         {
          name: "Pain",
          artist: "CYBERPUNK 2077",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/15.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/CYBERPUNK 2077 SOUNDTRACK - PAIN by Le Destroy & The Red Glare (Official Video).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
         {
          name: "How deep your love",
          artist: "Calvin Harris",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/6.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Calvin Harris & Disciples - How Deep Is Your Love (Audio).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Drug from God",
          artist: "Chris Lake",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/17.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Chris Lake & NPC - A Drug From God.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Heartbeat",
          artist: "Claptone",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/3.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Claptone - Heartbeat.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Enemy",
          artist: "Imagine Dragons",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/4.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Enemy.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Moonligt",
          artist: "Gaullin",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/13.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/GAULLIN - MOONLIGHT.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
         {
          name: "Goosebumps",
          artist: "HVME",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/16.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/HVME - GOOSEBUMPS.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
         {
          name: "Golden",
          artist: "Harry Styles",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/18.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Harry Styles Golden Official Audio.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Just the two of Us",
          artist: "Lucy Ellis",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/2.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Just the Two of Us.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "KDA Villain",
          artist: "KDA",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/9.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/K_DA - VILLAIN (feat. Madison Beer & Kim Petras).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Lithium",
          artist: "OCCXLLT",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/4.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Lithium.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Animals",
          artist: "Martin Garrix",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/5.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Martin Garrix - Animals (Official Lyrics Video).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Call me now",
          artist: "Inna",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/6.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Michael Calfan x INNA - Call Me Now (Official Lyric Video).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "MMM",
          artist: "Minelli",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/7.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Minelli - MMM.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Nothing Hurts",
          artist: "Minelli",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/8.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Minelli - Nothing Hurts.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Deep sea",
          artist: "Minelli",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/9.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Minelli x R3HAB - Deep Sea.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },        
        {
          name: "Beggin",
          artist: "Måneskin",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/10.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Måneskin - Beggin (Lyrics).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "I wanna be your slave",
          artist: "Måneskin",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/13.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Måneskin I WANNA BE YOUR SLAVE LyricsTesto Eurovision 2021.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Nightfall",
          artist: "OCCXLLT",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/15.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/OCCXLLT - NIGHTFALL.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Bad Generation",
          artist: "Della",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/16.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/ORGAN & DELLA - Bad Generation (Magic Release).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "I don't wanna Know",
          artist: "Punctual",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/17.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Punctual - I Dont Wanna Know.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "SAYONARA Baby",
          artist: "Kaze",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/19.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/SAYONARA Baby.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Desert Rose",
          artist: "Sting",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/20.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Sting - Desert Rose (Official Music Video).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "ILY",
          artist: "Surf Mesa",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/3.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Surf Mesa - ily.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Moth to a flame",
          artist: "Swedish House Mafia",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/2.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Swedish House Mafia - Moth To A Flame (Lyrics) ft. The Weeknd.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "The Business",
          artist: "Tiesto",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/1.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Tiesto - The Business (Official Lyric Video).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Glassy Sky",
          artist: "Tokyo Ghoul",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/17.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Tokyo Ghoul - Glassy Sky [東京喰種 -トーキョーグール-].mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Tsumi No Kaori",
          artist: "Kaze",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/6.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Tsumi No Kaori.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Unprocessed",
          artist: "LLUCID",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/8.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Unprocessed - Real feat. Polyphia s Tim Henson & Clay Gober - LLUCID Remix_50k.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Flyday Chinatown",
          artist: "Yasuha",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/10.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/Yasuha - Flyday Chinatown.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "aLIEz",
          artist: "?",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/12.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/aLIEz.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "cant get over you",
          artist: "?",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/14.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/cant get over you.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "e wa",
          artist: "Kaze",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/17.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/e wa.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "It don't matter",
          artist: "?",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/13.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/it dont matter.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "All the Things she said",
          artist: "Gaullin",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/9.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/t.A.T.u.- All The Things She Said (Gaullin Remix)(Bass boosted).mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        },
        {
          name: "Not so bad",
          artist: "Yevs V",
          cover: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/img/20.jpg",
          source: "https://raw.githubusercontent.com/FBRDCYB3R/bopify/master/mp3/yt1s.com - Yves V Ilkay Sencan Not So Bad feat Emie Official Music Video.mp3",
          url: "https://twitter.com/home?lang=en",
          favorited: false
        }
       ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
