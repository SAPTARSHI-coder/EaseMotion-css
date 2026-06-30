const animSelect      = document.getElementById('animSelect');
const durationSelect  = document.getElementById('durationSelect');
const delaySelect     = document.getElementById('delaySelect');
const timingSelect    = document.getElementById('timingSelect');
const iterationSelect = document.getElementById('iterationSelect');
const directionSelect = document.getElementById('directionSelect');
const previewBox      = document.getElementById('previewBox');
const classOutput     = document.getElementById('classOutput');
const copyBtn         = document.getElementById('copyBtn');
const replayBtn       = document.getElementById('replayBtn');
const resetBtn        = document.getElementById('resetBtn');
const copyFeedback    = document.getElementById('copyFeedback');

const durationMap  = { 'ease-duration-300': '300ms', 'ease-duration-500': '500ms', 'ease-duration-700': '700ms', 'ease-duration-1000': '1000ms', 'ease-duration-1500': '1500ms' };
const delayMap     = { '': '0ms', 'ease-delay-100': '100ms', 'ease-delay-200': '200ms', 'ease-delay-300': '300ms', 'ease-delay-500': '500ms' };
const timingMap    = { 'ease-timing-ease': 'ease', 'ease-timing-linear': 'linear', 'ease-timing-ease-in': 'ease-in', 'ease-timing-ease-out': 'ease-out', 'ease-timing-ease-in-out': 'ease-in-out' };
const iterationMap = { 'ease-once': '1', 'ease-twice': '2', 'ease-infinite': 'infinite' };
const directionMap = { 'ease-normal': 'normal', 'ease-reverse': 'reverse', 'ease-alternate': 'alternate' };

function getClasses() {
  const parts = [
    animSelect.value,
    durationSelect.value,
    delaySelect.value,
    timingSelect.value,
    iterationSelect.value,
    directionSelect.value
  ].filter(Boolean);
  return parts;
}

function applyAnimation() {
  const anim      = animSelect.value;
  const duration  = durationMap[durationSelect.value]  || '500ms';
  const delay     = delayMap[delaySelect.value]        || '0ms';
  const timing    = timingMap[timingSelect.value]      || 'ease';
  const iteration = iterationMap[iterationSelect.value]|| '1';
  const direction = directionMap[directionSelect.value]|| 'normal';

  previewBox.style.animation = 'none';
  previewBox.offsetHeight; // reflow

  previewBox.style.animation = `${anim} ${duration} ${timing} ${delay} ${iteration} ${direction} both`;

  const classes = getClasses().join(' ');
  classOutput.textContent = `<div class="${classes}">`;
}

function resetAll() {
  animSelect.value      = 'ease-fade-in';
  durationSelect.value  = 'ease-duration-500';
  delaySelect.value     = '';
  timingSelect.value    = 'ease-timing-ease';
  iterationSelect.value = 'ease-once';
  directionSelect.value = 'ease-normal';
  applyAnimation();
}

replayBtn.addEventListener('click', applyAnimation);
resetBtn.addEventListener('click', resetAll);

[animSelect, durationSelect, delaySelect, timingSelect, iterationSelect, directionSelect]
  .forEach(el => el.addEventListener('change', applyAnimation));

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(classOutput.textContent).then(() => {
    copyFeedback.classList.add('show');
    setTimeout(() => copyFeedback.classList.remove('show'), 2000);
  });
});

applyAnimation();