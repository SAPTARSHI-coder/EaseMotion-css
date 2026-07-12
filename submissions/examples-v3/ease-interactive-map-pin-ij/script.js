const pins = document.querySelectorAll('.imp-pin');

pins.forEach(pin => {
  pin.addEventListener('click', (e) => {
    e.stopPropagation();
    pins.forEach(p => p.classList.remove('active'));
    pin.classList.add('active');
  });
});

document.addEventListener('click', () => {
  pins.forEach(p => p.classList.remove('active'));
});
