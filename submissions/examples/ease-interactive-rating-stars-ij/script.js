const stars = document.querySelectorAll('.irs-star');
const ratingSpan = document.getElementById('irs-current');
const resetBtn = document.getElementById('irs-reset');
let currentRating = 0;

function setRating(val) {
  currentRating = val;
  stars.forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.value) <= val);
  });
  ratingSpan.textContent = val;
}

stars.forEach(star => {
  star.addEventListener('click', () => {
    const val = parseInt(star.dataset.value);
    if (val === currentRating) return;
    setRating(val);
    star.classList.remove('bounce');
    void star.offsetHeight;
    star.classList.add('bounce');
  });
});

resetBtn.addEventListener('click', () => {
  setRating(0);
});
