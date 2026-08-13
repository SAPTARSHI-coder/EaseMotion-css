const cards = document.querySelectorAll('.tstc-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dots');
let current = 0;
let autoTimer = null;

function buildDots() {
  cards.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.className = 'tstc-dot' + (i === 0 ? ' active' : '');
    dot.dataset.index = i;
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });
}

function goTo(index) {
  if (index === current) return;
  cards.forEach((c, i) => {
    c.classList.remove('active', 'exit-left');
    if (i === index) c.classList.add('active');
    else if (i === current) c.classList.add('exit-left');
  });
  document.querySelectorAll('.tstc-dot').forEach((d, i) => {
    d.classList.toggle('active', i === index);
  });
  current = index;
  resetAuto();
}

function next() {
  goTo((current + 1) % cards.length);
}

function prev() {
  goTo((current - 1 + cards.length) % cards.length);
}

function resetAuto() {
  clearInterval(autoTimer);
  autoTimer = setInterval(next, 4000);
}

prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);

buildDots();
resetAuto();
