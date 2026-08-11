const btn = document.getElementById('heartBtn');
const icon = document.getElementById('heartIcon');
const shape = icon.querySelector('.heart-shape');
let liked = false;

btn.addEventListener('click', () => {
  liked = !liked;
  shape.classList.toggle('filled', liked);
  icon.classList.toggle('liked', liked);
  btn.textContent = liked ? '♥ Wishlisted' : '♡ Wishlist';
});
