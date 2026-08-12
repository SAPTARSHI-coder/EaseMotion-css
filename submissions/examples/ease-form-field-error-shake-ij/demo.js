document.getElementById('demoForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const fields = this.querySelectorAll('.field');
  let hasError = false;

  fields.forEach(function (field) {
    const group = field.closest('.field-group');
    const msg = group.querySelector('.error-msg');

    field.classList.remove('shake', 'success', 'error');
    msg.textContent = '';

    if (!field.value.trim() || (field.type === 'email' && !field.value.includes('@')) || (field.minLength && field.value.length < parseInt(field.minLength))) {
      hasError = true;
      field.classList.add('error');
      field.classList.add('shake');
      if (field.validationMessage) {
        msg.textContent = field.validationMessage;
      } else {
        msg.textContent = 'This field is required';
      }
      field.addEventListener('animationend', function () {
        field.classList.remove('shake');
      }, { once: true });
    } else {
      field.classList.add('success');
    }
  });

  if (!hasError) {
    alert('Form submitted successfully!');
    fields.forEach(function (f) {
      f.classList.remove('success');
    });
  }
});
