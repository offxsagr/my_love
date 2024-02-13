window.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    const audioPlaybackTime = localStorage.getItem('audioPlaybackTime');
    if (audioPlaybackTime !== null) {
      audio.currentTime = parseFloat(audioPlaybackTime);
      audio.play();
    }
  });
  