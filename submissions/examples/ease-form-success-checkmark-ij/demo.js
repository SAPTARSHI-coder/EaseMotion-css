const formView = document.getElementById('formView');
const successView = document.getElementById('successView');
const form = document.getElementById('demoForm');
const resetBtn = document.getElementById('resetBtn');
const fields = form.querySelectorAll('.field');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let valid = true;
  fields.forEach(function (f) {
    if (!f.value.trim()) {
      valid = false;
      f.style.borderColor = '#e74c3c';
    } else {
      f.style.borderColor = '#ccc';
    }
  });
  if (!valid) return;

  formView.classList.add('hidden');
  successView.classList.add('visible');

  const circle = document.querySelector('.checkmark-circle');
  const check = document.querySelector('.checkmark-check');
  circle.style.animation = 'none';
  check.style.animation = 'none';
  void circle.offsetHeight;
  circle.style.animation = '';
  check.style.animation = '';
});

resetBtn.addEventListener('click', function () {
  successView.classList.remove('visible');
  formView.classList.remove('hidden');
  form.reset();
  fields.forEach(function (f) {
    f.style.borderColor = '#ccc';
  });
});
