function fullscreen(obj) {
    switch (obj.getAttribute("mask")) {
        case "url(#fullscreen-enter)":
            document.body.requestFullscreen();
            obj.setAttribute("mask", "url(#fullscreen-exit)");
            break;
        case "url(#fullscreen-exit)":
            document.exitFullscreen();
            obj.setAttribute("mask", "url(#fullscreen-enter)");
            break;
    }
}

let colors = new ColorThief();
var trackList = new Array();
var rectifiedList = new Array();
$.ajax({
  url: "../mp3",
  success: function(data) {
	console.info("Tracks successfully loaded!");
	$(data).find("a:contains('.mp3')").each(function(e){
	  if (this.innerHTML !== "") {
		    rectifiedList.push(this);
          }
	});
	rectifiedList.forEach((e, i) => {
	  var trclass = {
	    name: "*",
	    artist: "*",
	    cover: "../img/*",
        source: "../mp3/*",
	    url: "#",
	    favorited: false,
	  };
	  var name = e; //filenames should be `[artistofsong - nameofsong].mp3`
	  trclass.source = `../mp3/${name.innerHTML}`;
	  trclass.url = `../mp3/${name.innerHTML}`;
	  if (i !== 0) {
		CoverModulation: while (true) {
		  var cover = String(Math.round(Math.random()*20+1))+".jpg";
		  if (trackList[i - 1].cover !== `../img/${cover}`) {
			trclass.cover = `../img/${cover}`;
			break;
		  } else {
		    continue CoverModulation;
		  }
		}
	  } else {
	    var cover = String(Math.round(Math.random()*20+1))+".jpg";
		trclass.cover = `../img/${cover}`;
	  }
  
	  var trimmed = undefined;
	  var broken = false;
	  var loaded = true;
	  if (name.innerHTML.match(/\[(.*)\]/) !== null) { trimmed = name.innerHTML.match(/\[(.*)\]/).pop().split(" - "); } else { broken = true; }
	  if (loaded && !broken) {
	    trclass.artist = trimmed[0][0].toUpperCase()+trimmed[0].slice(1, trimmed[0].length); //Capitalize
		trclass.name = trimmed[1][0].toUpperCase()+trimmed[1].slice(1, trimmed[1].length);
		trackList.push(trclass);
	  }
	});
	vueInit();
    var cl = new Image(500,500); cl.src = trackList[0].cover; cl.onload = ()=>{$("div#app.wrapper").css({'background': `radial-gradient(gray, rgb(${String(colors.getColor(cl))}))`})};
  }
});

function vueInit() {
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
      tracks: trackList,
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
        var cl = new Image(500,500); cl.src = this.currentTrack.cover; cl.onload = ()=>{$("div#app.wrapper").css({background: `radial-gradient(gray, rgb(${String(colors.getColor(cl))}))`})};
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
      link.as = "image";
      document.head.appendChild(link);
    }
  }
});
}
