const chipGroup = document.getElementById('chipGroup');
const clearBtn = document.getElementById('clearBtn');

chipGroup.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  chip.classList.toggle('active');
});

clearBtn.addEventListener('click', () => {
  chipGroup.querySelectorAll('.chip.active').forEach(c => c.classList.remove('active'));
});
