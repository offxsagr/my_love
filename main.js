const playButton = document.getElementById('playButton');
const audio = document.getElementById('myAudio');

playButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pause Song';
  } else {
    audio.pause();
    playButton.textContent = 'Play Song';
  }
});

window.addEventListener('beforeunload', function() {
  localStorage.setItem('audioPlaybackTime', audio.currentTime);
});
