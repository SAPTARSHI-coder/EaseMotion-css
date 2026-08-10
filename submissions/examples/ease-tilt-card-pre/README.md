## ease-tilt-card

**What does this do?**
A card that tilts in 3D space based on cursor position using
CSS perspective + rotateX/rotateY driven by ~10 lines of JS.

**How is it used?**
<div class="tilt-card" data-tilt>
  <h3>Card Title</h3>
  <p>Move your mouse across this card to see it tilt in 3D.</p>
</div>

<script>
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform =
        `perspective(800px) rotateY(${x * 16}deg) rotateX(${-y * 16}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateY(0) rotateX(0)';
    });
  });
</script>

Variants: purple, green, dark

**Why is it useful?**
Creates real 3D depth interaction seen on Apple product pages,
Stripe, and premium portfolios — consistent with EaseMotion CSS's
animation-first philosophy.