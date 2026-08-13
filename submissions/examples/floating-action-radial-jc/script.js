/**
 * EaseMotion CSS: Floating Action Hub with Morphing Radial Expand
 * JavaScript Module for Radial Angle Calculation, Sound Feedback & Accessibility
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const container = document.getElementById('radial-fab-container');
  const triggerBtn = document.getElementById('fab-trigger');
  const menu = document.getElementById('fab-menu');
  const backdrop = document.getElementById('fab-backdrop');
  const items = Array.from(menu.querySelectorAll('.fab-item'));
  const toast = document.getElementById('action-toast');

  // Control Elements
  const posSelect = document.getElementById('pos-select');
  const radiusRange = document.getElementById('radius-range');
  const radiusVal = document.getElementById('radius-val');
  const soundToggle = document.getElementById('sound-toggle');
  const backdropToggle = document.getElementById('backdrop-toggle');

  // Web Audio Context for zero-dependency sound synthesis
  let audioCtx = null;

  function initAudio() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContextClass();
    }
  }

  function playOpenSound() {
    if (!soundToggle.checked) return;
    try {
      initAudio();
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(640, audioCtx.currentTime + 0.15);

      gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.18);
    } catch (e) {
      console.warn('Audio playback error:', e);
    }
  }

  function playCloseSound() {
    if (!soundToggle.checked) return;
    try {
      initAudio();
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(260, audioCtx.currentTime + 0.12);

      gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.15);
    } catch (e) {
      console.warn('Audio playback error:', e);
    }
  }

  function playItemClickSound() {
    if (!soundToggle.checked) return;
    try {
      initAudio();
      if (!audioCtx) return;
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
      console.warn('Audio playback error:', e);
    }
  }

  /**
   * Calculates trigonometric arc positioning for each sub-button
   */
  function updateRadialLayout() {
    const position = container.getAttribute('data-position') || 'bottom-right';
    const radius = parseFloat(radiusRange.value) || 130;
    const total = items.length;

    let startDeg = 180;
    let endDeg = 270;

    switch (position) {
      case 'bottom-right':
        // 90deg arc from Left (180deg) to Up (270deg)
        startDeg = 180;
        endDeg = 270;
        break;
      case 'bottom-center':
        // 180deg fan from Left (180deg) to Up (270deg) to Right (360deg)
        startDeg = 180;
        endDeg = 360;
        break;
      case 'bottom-left':
        // 90deg arc from Up (270deg) to Right (360deg)
        startDeg = 270;
        endDeg = 360;
        break;
      case 'center':
        // 360deg radial full circle
        startDeg = 0;
        endDeg = 360 * ((total - 1) / total);
        break;
    }

    container.style.setProperty('--distance', `${radius}px`);
    container.style.setProperty('--total', total);

    items.forEach((item, index) => {
      let angleDeg;
      if (total === 1) {
        angleDeg = startDeg;
      } else {
        angleDeg = startDeg + (index * (endDeg - startDeg)) / (total - 1);
      }

      const angleRad = (angleDeg * Math.PI) / 180;
      const tx = Math.round(Math.cos(angleRad) * radius);
      const ty = Math.round(Math.sin(angleRad) * radius);

      item.style.setProperty('--i', index);
      item.style.setProperty('--angle', `${angleRad}rad`);
      item.style.setProperty('--angle-deg', `${angleDeg}deg`);
      item.style.setProperty('--transform-x', `${tx}px`);
      item.style.setProperty('--transform-y', `${ty}px`);
    });
  }

  /**
   * Toggle Floating Action Menu Open/Close
   */
  function toggleMenu(open) {
    const isActive = open !== undefined ? open : !container.classList.contains('is-active');

    if (isActive) {
      container.classList.add('is-active');
      triggerBtn.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
      
      // Enable tab focus on sub-items
      items.forEach(item => item.setAttribute('tabindex', '0'));
      playOpenSound();
    } else {
      container.classList.remove('is-active');
      triggerBtn.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      
      // Disable tab focus on sub-items when hidden
      items.forEach(item => item.setAttribute('tabindex', '-1'));
      playCloseSound();
    }
  }

  function closeMenu() {
    if (container.classList.contains('is-active')) {
      toggleMenu(false);
    }
  }

  /**
   * Show Toast Notification when an action is triggered
   */
  let toastTimer = null;
  function showToast(actionName) {
    if (!toast) return;
    toast.textContent = `Action triggered: ${actionName}`;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  // --------------------------------------------------------------------------
  // Event Listeners
  // --------------------------------------------------------------------------

  // Main Trigger Click
  triggerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Action Item Clicks
  items.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const action = item.getAttribute('data-action') || 'Item Clicked';
      playItemClickSound();
      showToast(action);
      closeMenu();
      triggerBtn.focus();
    });
  });

  // Backdrop Click & Outside Click Dismiss
  backdrop.addEventListener('click', (e) => {
    e.stopPropagation();
    closeMenu();
  });

  document.addEventListener('click', (e) => {
    if (container.classList.contains('is-active') && !container.contains(e.target)) {
      closeMenu();
    }
  });

  // Keyboard Shortcuts & Navigation
  document.addEventListener('keydown', (e) => {
    if (!container.classList.contains('is-active')) return;

    if (e.key === 'Escape') {
      closeMenu();
      triggerBtn.focus();
    }
  });

  // Arrow key navigation between radial sub-buttons
  items.forEach((item, index) => {
    item.addEventListener('keydown', (e) => {
      if (['ArrowRight', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
        const nextIndex = (index + 1) % items.length;
        items[nextIndex].focus();
      } else if (['ArrowLeft', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();
        const prevIndex = (index - 1 + items.length) % items.length;
        items[prevIndex].focus();
      }
    });
  });

  // --------------------------------------------------------------------------
  // Demo Controls Event Listeners
  // --------------------------------------------------------------------------

  posSelect.addEventListener('change', (e) => {
    const val = e.target.value;
    container.className = `fab-container position-${val}${container.classList.contains('is-active') ? ' is-active' : ''}`;
    container.setAttribute('data-position', val);
    updateRadialLayout();
  });

  radiusRange.addEventListener('input', (e) => {
    const val = e.target.value;
    radiusVal.textContent = `${val}px`;
    updateRadialLayout();
  });

  backdropToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
      backdrop.classList.remove('disabled');
    } else {
      backdrop.classList.add('disabled');
    }
  });

  // Initial layout calculation
  updateRadialLayout();
});
