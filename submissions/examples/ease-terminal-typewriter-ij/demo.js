const speedRange = document.getElementById('speedRange');
const speedLabel = document.getElementById('speedLabel');
const restartBtn = document.getElementById('restartBtn');
const terminalBody = document.getElementById('terminalBody');
const cursorEl = document.querySelector('.tt-cursor');

let charIndex = 0;
let lineIndex = 0;
let charElements = [];
let typeTimer = null;
let isRunning = false;

function getSpeed() {
  const val = parseInt(speedRange.value, 10);
  speedLabel.textContent = val + 'ms';
  return val;
}

speedRange.addEventListener('input', () => {
  getSpeed();
  if (isRunning) {
    clearTimeout(typeTimer);
    typeNextChar();
  }
});

function buildChars() {
  const lines = terminalBody.querySelectorAll('.tt-text');
  charElements = [];
  lineIndex = 0;
  charIndex = 0;

  lines.forEach((line, li) => {
    const text = line.dataset.text || '';
    line.innerHTML = '';
    line.dataset.line = li;
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = text[i];
      span.style.animationDelay = '0s';
      span.style.opacity = '0';
      line.appendChild(span);
      charElements.push({ el: span, line: li, charIdx: i });
    }
  });
}

function typeNextChar() {
  if (lineIndex >= charElements.length) {
    isRunning = false;
    cursorEl.style.display = 'inline';
    moveCursor();
    return;
  }

  isRunning = true;

  while (charIndex < charElements.length) {
    const item = charElements[charIndex];
    if (item.line < lineIndex) { charIndex++; continue; }
    if (item.line > lineIndex) break;

    item.el.style.opacity = '1';
    item.el.style.animation = 'none';
    charIndex++;
    moveCursor();
    typeTimer = setTimeout(typeNextChar, getSpeed());
    return;
  }

  lineIndex++;
  typeTimer = setTimeout(typeNextChar, getSpeed() * 3);
}

function moveCursor() {
  const shown = charElements.filter(c => c.el.style.opacity === '1');
  if (shown.length === 0) {
    cursorEl.style.left = '94px';
    return;
  }
  const last = shown[shown.length - 1];
  const line = last.el.closest('.tt-line');
  const prompt = line ? line.querySelector('.tt-prompt') : null;
  const promptWidth = prompt ? prompt.offsetWidth + 10 : 20;
  const lineOffset = line ? line.offsetTop : 0;
  const charLeft = last.el.offsetLeft + last.el.offsetWidth;
  cursorEl.style.left = (94 + charLeft) + 'px';
}

function restart() {
  clearTimeout(typeTimer);
  isRunning = false;
  buildChars();
  lineIndex = 0;
  charIndex = 0;
  cursorEl.style.display = 'inline';
  moveCursor();
  typeNextChar();
}

restartBtn.addEventListener('click', restart);

buildChars();
moveCursor();
typeNextChar();
