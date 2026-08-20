(function () {
  var bars = document.querySelectorAll('.mvb-bar');
  var playBtn = document.getElementById('mvb-play');
  var pauseBtn = document.getElementById('mvb-pause');
  var presetSelect = document.getElementById('mvb-preset');
  var animating = false;
  var intervals = [];

  var presets = {
    pop: [30,50,70,85,90,85,70,50,30,20,50,70,85,90,85,70,50,30,20,40],
    rock: [20,40,60,80,95,80,60,40,20,50,70,90,100,90,70,50,30,20,50,60],
    electronic: [80,60,40,90,70,50,95,75,55,35,85,65,45,90,70,50,80,60,40,30],
    classical: [10,15,25,40,55,70,85,70,55,40,25,15,10,20,35,50,65,50,35,20],
    bass: [90,85,80,75,70,65,60,55,50,45,40,90,85,80,75,70,65,60,55,50]
  };

  function getPresetValues(name) {
    return presets[name] || presets.classical;
  }

  function applyHeights(values) {
    var maxVal = 100;
    bars.forEach(function (bar, i) {
      var pct = Math.max(5, Math.min(95, values[i % values.length]));
      bar.style.height = pct + '%';
    });
  }

  function startAnimation() {
    if (animating) return;
    animating = true;
    bars.forEach(function (b) { b.classList.add('animate'); });
    var preset = presetSelect.value;
    var values = getPresetValues(preset);
    var len = values.length;
    bars.forEach(function (bar, i) {
      var delay = (i % len) * 0.06;
      bar.style.animationDelay = delay + 's';
      bar.style.animationDuration = 0.4 + Math.random() * 0.3 + 's';
    });
  }

  function stopAnimation() {
    animating = false;
    bars.forEach(function (b) { b.classList.remove('animate'); b.style.animationDelay = ''; });
    var preset = presetSelect.value;
    var values = getPresetValues(preset);
    applyHeights(values);
  }

  function changePreset() {
    var preset = presetSelect.value;
    var values = getPresetValues(preset);
    if (animating) {
      stopAnimation();
      startAnimation();
    } else {
      applyHeights(values);
    }
  }

  playBtn.addEventListener('click', startAnimation);
  pauseBtn.addEventListener('click', stopAnimation);
  presetSelect.addEventListener('change', changePreset);

  applyHeights(getPresetValues('classical'));
})();
