/*
    1. render song
    2. scroll top
    3. play / pause / seek 
    4. CD rotate
    5. next / preview
    6. random
    7. next / repeat when end
    8. active song
    9. scroll active song
    10. play song when click
*/
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const cd = $(".cd");
const btnPlay = $(".btn-toggle-play");
const player = $(".player");
const progress = $('#progress')

const app = {
  currentIndex: 0,
  isPlaying: false,
  songs: [
    {
      name: "Faded",
      singer: "Alan Walker",
      path: "/assets/music/Alan Walker - Faded Mp3 Song Download.mp3",
      image: "/assets/img/Alan-Walker-Faded-Mp3-Song-Download.jpg",
    },
    {
      name: "Dark-Horse",
      singer: "Katy Perry",
      path: "/assets/music/Katy Perry - Dark Horse Mp3 Song Download Ft Juicy J.mp3",
      image:
        "/assets/img/Katy-Perry-Dark-Horse-Mp3-Song-Download-Ft-Juicy-J.jpg",
    },
    {
      name: "Sugar",
      singer: "Maroom 5",
      path: "/assets/music/Sugar Mp3 Maroon 5.mp3",
      image: "/assets/img/Maroon-5-–-Sugar-Mp3-Download-Song-2019.jpg",
    },
    {
      name: "Synphony",
      singer: "Clean Badit",
      path: "/assets/music/Clean Bandit - Symphony Mp3 Song Download Ft Zara Larsson.mp3",
      image:
        "/assets/img/Clean-Bandit-Symphony-Mp3-Song-Download-Ft-Zara-Larsson.jpg",
    },
    {
      name: "See you again",
      singer: "Charlie Puth and Wiz Khalifa",
      path: "/assets/music/See You Again Mp3 By Charlie Puth and Wiz Khalifa.mp3",
      image: "/assets/img/Wiz-Khalifa-See-You-Again-Mp3-Download.jpg",
    },
    {
      name: "See you again",
      singer: "Charlie Puth and Wiz Khalifa",
      path: "/assets/music/See You Again Mp3 By Charlie Puth and Wiz Khalifa.mp3",
      image: "/assets/img/Wiz-Khalifa-See-You-Again-Mp3-Download.jpg",
    },
    {
      name: "See you again",
      singer: "Charlie Puth and Wiz Khalifa",
      path: "/assets/music/See You Again Mp3 By Charlie Puth and Wiz Khalifa.mp3",
      image: "/assets/img/Wiz-Khalifa-See-You-Again-Mp3-Download.jpg",
    },
    {
      name: "See you again",
      singer: "Charlie Puth and Wiz Khalifa",
      path: "/assets/music/See You Again Mp3 By Charlie Puth and Wiz Khalifa.mp3",
      image: "/assets/img/Wiz-Khalifa-See-You-Again-Mp3-Download.jpg",
    },
    {
      name: "See you again",
      singer: "Charlie Puth and Wiz Khalifa",
      path: "/assets/music/See You Again Mp3 By Charlie Puth and Wiz Khalifa.mp3",
      image: "/assets/img/Wiz-Khalifa-See-You-Again-Mp3-Download.jpg",
    },
    {
      name: "See you again",
      singer: "Charlie Puth and Wiz Khalifa",
      path: "/assets/music/See You Again Mp3 By Charlie Puth and Wiz Khalifa.mp3",
      image: "/assets/img/Wiz-Khalifa-See-You-Again-Mp3-Download.jpg",
    },
  ],
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvent: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;
    // handleEvent zoom cd
    document.onscroll = function () {
      var scroll = window.scrollY || document.documentElement.scrollTop;
      var cdWidthAfter = cdWidth - scroll;
      cd.style.width = cdWidthAfter > 0 ? cdWidthAfter + "px" : 0;
      cd.style.opacity = cdWidthAfter / cdWidth;
    };

    // handleEvent play cd
    btnPlay.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // handleEvent play cd
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
    };

    // handleEvent pause cd
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
    };
  },
  render: function () {
    var htmls = this.songs.map((song) => {
      return `
          <div class="song">
            <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
      `;
    });
    $(".playlist").innerHTML = htmls.join("");
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = "url(" + this.currentSong.image + ")";
    audio.src = this.currentSong.path;
  },
  start: function () {
    this.defineProperties();
    this.render();
    this.handleEvent();
    this.loadCurrentSong();
  },
};

app.start();


// nothing in here

// another test
