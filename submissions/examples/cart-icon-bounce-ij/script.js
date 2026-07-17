const btn = document.querySelector('.cart-btn');
const cartBody = document.querySelector('.cart-body');
const badge = document.querySelector('.cart-badge');
let count = 1;

btn.addEventListener('click', () => {
  cartBody.style.animation = 'none';
  void cartBody.offsetWidth;
  cartBody.style.animation = 'cart-bounce 1s ease-in-out';

  count++;
  badge.textContent = count;
  badge.classList.add('show');
});
