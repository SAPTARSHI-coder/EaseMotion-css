const card = document.getElementById('tiltCard');
const maxRotation = 15; // Max degrees of rotation

card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxRotation;
    const rotateY = ((x - centerX) / centerX) * maxRotation;

    const bgX = (x / rect.width) * 100;
    const bgY = (y / rect.height) * 100;

    card.style.setProperty('--rotate-x', `${rotateX}deg`);
    card.style.setProperty('--rotate-y', `${rotateY}deg`);
    card.style.setProperty('--bg-pos-x', `${bgX}%`);
    card.style.setProperty('--bg-pos-y', `${bgY}%`);
});

card.addEventListener('mouseleave', () => {
    card.style.setProperty('--rotate-x', '0deg');
    card.style.setProperty('--rotate-y', '0deg');
    card.style.setProperty('--bg-pos-x', '50%');
    card.style.setProperty('--bg-pos-y', '50%');
});
