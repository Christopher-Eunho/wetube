const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeButton");
const fullScrnBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume")

const registerView = () => {
  const videoId = window.location.href.split("/videos/")[1]; // how to get the current address
   fetch(`/api/${videoId}/view`, {
     method: "POST"
   });
};

function handlePlayClick() {
    if(videoPlayer.paused){
        videoPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>'
    } else {
        videoPlayer.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>'
    }
}

function handleVolumeClick() {
    if(videoPlayer.muted){
        volumeRange.value = videoPlayer.volume;
        videoPlayer.muted = false;
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        
    } else {
        volumeRange.value = 0;
        videoPlayer.muted = true;
        volumeBtn.innerHTML = '<i class="fas fa-volume-mute"></i>'
    }
}

function exitFullScreen() {
    fullScrnBtn.innerHTML = '<i class="fas fa-expand"></i>'
    fullScrnBtn.addEventListener("click", goFullSceern);
    if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
}

function goFullSceern() {
    if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
      } else if (videoContainer.mozRequestFullScreen) {
        videoContainer.mozRequestFullScreen();
      } else if (videoContainer.webkitRequestFullscreen) {
        videoContainer.webkitRequestFullscreen();
      } else if (videoContainer.msRequestFullscreen) {
        videoContainer.msRequestFullscreen();
      }; // prefixes are for different browsers 
    fullScrnBtn.innerHTML = '<i class="fas fa-compress"></i>'
    fullScrnBtn.removeEventListener("click", goFullSceern);
    fullScrnBtn.addEventListener("click", exitFullScreen);
}

function formatTime(seconds) {
    const secondsNumber = parseInt(seconds, 10);
    let hours = Math.floor(secondsNumber / 3600);
    let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
    let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (totalSeconds < 10) {
      totalSeconds = `0${totalSeconds}`;
    }
    return `${hours}:${minutes}:${totalSeconds}`;
};

function handleEnded() {
    videoPlayer.currentTime = 0;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    registerView(); // add 1 to the view when user finishes a video.

}

function setTotalTime() {
    const totalTimeString = formatTime(videoPlayer.duration);
    totalTime.innerHTML = totalTimeString;
};

function setCurrentTime() {
    currentTime.innerHTML = formatTime(Math.floor(videoPlayer.currentTime));
}

function handleDrag(event) {
    const {
        target: { value }
    } = event;
    videoPlayer.volume = value;
    if(value >= 0.66){
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else if(value >= 0.2){
        volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>';
    } else {
        volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>';
    }
    videoPlayer.volume = value;

}

function init() {
    videoPlayer.volume = 0.1;
    playBtn.addEventListener("click", handlePlayClick);
    volumeBtn.addEventListener("click", handleVolumeClick);
    fullScrnBtn.addEventListener("click", goFullSceern);
    videoPlayer.addEventListener("loadedmetadata", setTotalTime);
    videoPlayer.addEventListener("timeupdate", setCurrentTime);
    videoPlayer.addEventListener("ended", handleEnded);
    volumeRange.addEventListener("input", handleDrag)
};

// execute init only when there is a id of "jsVideoPlayer" 
if(videoContainer) {
    init();
}