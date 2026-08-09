/* =============================================================
   Interactive Audio Waveform Player Control Bar
   EaseMotion — Vanilla JS Logic
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  const playerCard = document.querySelector('.audio-player');
  const playBtn = document.getElementById('play-pause-btn');
  const seekSlider = document.getElementById('seek-slider');
  const seekFill = document.getElementById('seek-fill');
  const timeCurrent = document.getElementById('time-current');

  let isPlaying = false;
  let progressInterval = null;
  let currentSeconds = 0;
  const TOTAL_SECONDS = 260; // 4:20

  // 1. Play / Pause Toggle Logic
  playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    
    // Update ARIA pressed state for icon morphing
    playBtn.setAttribute('aria-pressed', isPlaying);
    
    // Toggle class on parent to trigger CSS animation-play-state for waveforms
    if (isPlaying) {
      playerCard.classList.add('is-playing');
      startSimulatedProgress();
    } else {
      playerCard.classList.remove('is-playing');
      stopSimulatedProgress();
    }
  });

  // 2. Seek Slider Drag Logic
  seekSlider.addEventListener('input', (e) => {
    const val = e.target.value;
    updateSeekUI(val);
    
    // Calculate new current time based on slider percentage
    currentSeconds = Math.floor((val / 100) * TOTAL_SECONDS);
    updateTimeDisplay();
  });

  function updateSeekUI(percentage) {
    seekFill.style.width = `${percentage}%`;
  }

  // 3. Format Time (seconds to M:SS)
  function formatTime(totalSeconds) {
    const m = Math.floor(totalSeconds / 60);
    const s = Math.floor(totalSeconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function updateTimeDisplay() {
    timeCurrent.textContent = formatTime(currentSeconds);
  }

  // 4. Simulated Progress for Demo Purposes
  // In a real application, you would bind this to the <audio> element's 'timeupdate' event
  function startSimulatedProgress() {
    progressInterval = setInterval(() => {
      if (currentSeconds >= TOTAL_SECONDS) {
        stopSimulatedProgress();
        isPlaying = false;
        playBtn.setAttribute('aria-pressed', 'false');
        playerCard.classList.remove('is-playing');
        return;
      }
      currentSeconds++;
      updateTimeDisplay();
      
      const percent = (currentSeconds / TOTAL_SECONDS) * 100;
      seekSlider.value = percent;
      updateSeekUI(percent);
    }, 1000); // update every 1 second
  }

  function stopSimulatedProgress() {
    clearInterval(progressInterval);
  }
});
