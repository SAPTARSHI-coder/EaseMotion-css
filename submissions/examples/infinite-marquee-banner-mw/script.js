/**
 * Infinite Marquee Feature Showcase Banner for SaaS Landing Pages
 * EaseMotion-css Component Script
 * Minimal JS for interactive speed control slider and pause/reverse controls.
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM References
  const speedSlider = document.getElementById('speed-slider');
  const speedVal = document.getElementById('speed-val');
  const btnTogglePause = document.getElementById('btn-toggle-pause');
  const btnReverseDir = document.getElementById('btn-reverse-dir');
  const pauseBtnText = document.getElementById('pause-btn-text');
  const iconPause = btnTogglePause.querySelector('.icon-pause');
  const iconPlay = btnTogglePause.querySelector('.icon-play');

  const trackTop = document.getElementById('track-top');
  const trackBottom = document.getElementById('track-bottom');

  // State
  let isPaused = false;
  let isReversed = false;

  // Speed Slider → Update CSS Custom Property --marquee-duration
  speedSlider.addEventListener('input', (e) => {
    const duration = `${e.target.value}s`;
    speedVal.textContent = duration;
    document.documentElement.style.setProperty('--marquee-duration', duration);
  });

  // Global Pause / Resume Toggle
  btnTogglePause.addEventListener('click', () => {
    isPaused = !isPaused;

    if (isPaused) {
      trackTop.classList.add('is-paused');
      trackBottom.classList.add('is-paused');
      iconPause.classList.add('hidden');
      iconPlay.classList.remove('hidden');
      pauseBtnText.textContent = 'Resume Animation';
    } else {
      trackTop.classList.remove('is-paused');
      trackBottom.classList.remove('is-paused');
      iconPause.classList.remove('hidden');
      iconPlay.classList.add('hidden');
      pauseBtnText.textContent = 'Pause Animation';
    }
  });

  // Reverse Direction Toggle (swaps animation names)
  btnReverseDir.addEventListener('click', () => {
    isReversed = !isReversed;

    if (isReversed) {
      trackTop.style.animationName = 'marqueeRight';
      trackBottom.style.animationName = 'marqueeLeft';
    } else {
      trackTop.style.animationName = 'marqueeLeft';
      trackBottom.style.animationName = 'marqueeRight';
    }

    btnReverseDir.style.color = isReversed
      ? 'var(--accent-cyan)'
      : '';
  });
});
