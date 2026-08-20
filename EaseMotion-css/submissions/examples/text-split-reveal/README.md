# Text Split Reveal

## What it does

Each letter of text animates in from alternating sides (left/right) with staggered delays.

## How to use it

<div class="ease-split-text">TEXT</div>

Add JavaScript to auto-split letters:

<script>
document.querySelectorAll('.ease-split-text').forEach(function(el) {
    var text = el.textContent;
    var html = '';
    for(var i = 0; i < text.length; i++) {
        html += '<span>' + text[i] + '</span>';
    }
    el.innerHTML = html;
});
</script>

## Variants

- ease-split-fast - 0.2s per letter
- ease-split-slow - 0.6s per letter
- ease-split-gradient - Gradient text color
- ease-split-glow - Neon glow effect
- ease-split-large - 5rem font size
- ease-split-small - 2rem font size

## Why it fits EaseMotion CSS

- Pure CSS animation
- Staggered entrance by letter
- Alternating directions
- Multiple style variants