import { setupAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  const runtime = setupAnimations();
  
  if (!runtime.animation) {
    document.getElementById('status').innerText = 'Reduced Motion Enabled. Animations disabled.';
    return;
  }

  const btnPlay = document.getElementById('btnPlay');
  const btnPause = document.getElementById('btnPause');
  const btnResume = document.getElementById('btnResume');
  const btnReverse = document.getElementById('btnReverse');
  const btnCancel = document.getElementById('btnCancel');
  const btnFinish = document.getElementById('btnFinish');
  const btnRestart = document.getElementById('btnRestart');
  const sliderSeek = document.getElementById('sliderSeek');
  const sliderSpeed = document.getElementById('sliderSpeed');
  const speedLabel = document.getElementById('speedLabel');

  btnPlay.addEventListener('click', () => runtime.play());
  btnPause.addEventListener('click', () => runtime.pause());
  btnResume.addEventListener('click', () => runtime.play());
  btnReverse.addEventListener('click', () => runtime.reverse());
  btnCancel.addEventListener('click', () => runtime.cancel());
  btnFinish.addEventListener('click', () => runtime.finish());
  btnRestart.addEventListener('click', () => runtime.restart());
  
  sliderSeek.addEventListener('input', (e) => {
    runtime.seek(parseFloat(e.target.value));
  });

  sliderSpeed.addEventListener('input', (e) => {
    const rate = parseFloat(e.target.value);
    runtime.setPlaybackRate(rate);
    speedLabel.innerText = `${rate}x`;
  });

  // Sync seek slider occasionally
  setInterval(() => {
    if (runtime.animation && runtime.animation.playState === 'running') {
      sliderSeek.value = runtime.getProgress();
    }
  }, 50);
});
