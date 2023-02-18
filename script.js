const hustle = (sound) => {
  let music = document.getElementById(sound)

  music.play();
  music.loop = true
}

const stopHustling = (sound) => {
  let music = document.getElementById(sound)
  music.pause();
  music.currentTime = 0
}
