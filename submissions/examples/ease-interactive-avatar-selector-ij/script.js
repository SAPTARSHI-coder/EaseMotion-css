const avatars = document.querySelectorAll('.ias-avatar');
const confirmBtn = document.getElementById('ias-confirm');
const statusSpan = document.getElementById('ias-selected-name');
let selected = null;

avatars.forEach(av => {
  av.addEventListener('click', () => {
    avatars.forEach(a => a.classList.remove('selected', 'pulse'));
    av.classList.add('selected');
    av.offsetHeight;
    av.classList.add('pulse');
    selected = av.dataset.name;
    statusSpan.textContent = selected;
    confirmBtn.disabled = false;
  });
});

confirmBtn.addEventListener('click', () => {
  if (selected) {
    confirmBtn.textContent = `Confirmed: ${selected}!`;
    setTimeout(() => { confirmBtn.textContent = 'Confirm Selection'; }, 2000);
  }
});
