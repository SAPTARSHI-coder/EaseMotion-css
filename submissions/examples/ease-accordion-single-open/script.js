document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.accordion-item');
    const accordion = item.closest('.accordion');
    const isActive = item.classList.contains('active');

    accordion.querySelectorAll('.accordion-item.active').forEach((openItem) => {
      openItem.classList.remove('active');
    });

    if (!isActive) {
      item.classList.add('active');
    }
  });
});
