'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221128221852.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221128221852.png",
    title: "ユリイカ ",
    album: "834.194",
    year: 2019,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E3%83%A6%E3%83%AA%E3%82%A4%E3%82%AB%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129074917.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129074917.png",
    title: "ミュージック",
    album: "魚図鑑",
    year: 2018,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%83%83%E3%82%AF%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129100204.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129100204.png",
    title: "『バッハの旋律を夜に聴いたせいです。』",
    album: "『バッハの旋律を夜に聴いたせいです。』",
    year: 2011,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E3%80%8E%E3%83%90%E3%83%83%E3%83%8F%E3%81%AE%E6%97%8B%E5%BE%8B%E3%82%92%E5%A4%9C%E3%81%AB%E8%81%B4%E3%81%84%E3%81%9F%E3%81%9B%E3%81%84%E3%81%A7%E3%81%99%E3%80%82%E3%80%8F%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E3%81%95%E3%82%88%E3%81%AA%E3%82%89%E3%81%AF%E3%82%A8%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%EF%BC%8F%E8%93%AE%E3%81%AE%E8%8A%B1.jpg",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E3%81%95%E3%82%88%E3%81%AA%E3%82%89%E3%81%AF%E3%82%A8%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%EF%BC%8F%E8%93%AE%E3%81%AE%E8%8A%B1.jpg",
    title: "さよならはエモーション",
    album: "さよならはエモーション／蓮の花",
    year: 2014,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E3%81%95%E3%82%88%E3%81%AA%E3%82%89%E3%81%AF%E3%82%A8%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/109951167353435255.jpg",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/109951167353435255.jpg",
    title: "忘れられないの",
    album: "忘れられないの／モス (限定盤)",
    year: 2019,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E5%BF%98%E3%82%8C%E3%82%89%E3%82%8C%E3%81%AA%E3%81%84%E3%81%AE%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/109951164515338568.jpg",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/109951164515338568.jpg",
    title: "新宝島",
    album: "新宝島",
    year: 2015,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E6%96%B0%E5%AE%9D%E5%B3%B6%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221128221852.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221128221852.png",
    title: "「聴きたかったダンスミュージック、リキッドルームに」",
    album: "834.194",
    year: 2019,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E3%80%8C%E8%81%B4%E3%81%8D%E3%81%9F%E3%81%8B%E3%81%A3%E3%81%9F%E3%83%80%E3%83%B3%E3%82%B9%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%83%83%E3%82%AF%E3%80%81%E3%83%AA%E3%82%AD%E3%83%83%E3%83%89%E3%83%AB%E3%83%BC%E3%83%A0%E3%81%AB%E3%80%8D%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129143248.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129143248.png",
    title: "表参道26時",
    album: "kikUUiki",
    year: 2010,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E8%A1%A8%E5%8F%82%E9%81%9326%E6%99%82%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129143506.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129143506.png",
    title: "多分、風。",
    album: "多分、風。",
    year: 2016,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E5%A4%9A%E5%88%86%E3%80%81%E9%A2%A8%E3%80%82%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129143817.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129143817.png",
    title: "蓮の花 -movie version-",
    album: "蓮の花 -movie version-",
    year: 2014,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E8%93%AE%E3%81%AE%E8%8A%B1%20-movie%20version-%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.mp3",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129150023.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129150023.png",
    title: "僕と花",
    album: "僕と花",
    year: 2012,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E5%83%95%E3%81%A8%E8%8A%B1%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129150354.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129150354.png",
    title: "三日月サンセット",
    album: "GO TO THE FUTURE",
    year: 2007,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E4%B8%89%E6%97%A5%E6%9C%88%E3%82%B5%E3%83%B3%E3%82%BB%E3%83%83%E3%83%88%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221128221852.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221128221852.png",
    title: "モス",
    album: "834.194",
    year: 2019,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E3%83%A2%E3%82%B9%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129175504.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129175504.png",
    title: "月の椀",
    album: "アダプト (ADAPT)",
    year: 2022,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E6%9C%88%E3%81%AE%E6%A4%80%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129074917.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129074917.png",
    title: "夜の踊り子",
    album: "魚図鑑",
    year: 2018,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E5%A4%9C%E3%81%AE%E8%B8%8A%E3%82%8A%E5%AD%90%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/109951167358926282.jpg",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/109951167358926282.jpg",
    title: "Aoi",
    album: "sakanaction",
    year: 2013,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/Aoi%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129180205.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129180205.png",
    title: "years",
    album: "DocumentaLy",
    year: 2011,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/years%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129180422.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129180422.png",
    title: "アルクアラウンド",
    album: "アルクアラウンド",
    year: 2011,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E3%82%A2%E3%83%AB%E3%82%AF%E3%82%A2%E3%83%A9%E3%82%A6%E3%83%B3%E3%83%89%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.flac",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129180745.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129180745.png",
    title: "アイデンティティ (identity)",
    album: "アイデンティティ",
    year: 2010,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E3%82%A2%E3%82%A4%E3%83%87%E3%83%B3%E3%83%86%E3%82%A3%E3%83%86%E3%82%A3%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.mp3",
  },
  {
    backgroundImage: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129180205.png",
    posterUrl: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/20221129180205.png",
    title: "エンドレス (Endless)",
    album: "DocumentaLy",
    year: 2011,
    artist: "サカナクション",
    musicPath: "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/5115/%E3%82%A8%E3%83%B3%E3%83%89%E3%83%AC%E3%82%B9%20-%20%E3%82%B5%E3%82%AB%E3%83%8A%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3.mp3",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);