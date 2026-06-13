# Scroll Progress Indicator

## What it does

Shows a progress bar at the top of the page that fills as the user scrolls down.

## How to use it

<div class="ease-scroll-progress"></div>

<script>
window.addEventListener('scroll', function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.querySelector('.ease-scroll-progress').style.width = scrolled + '%';
});
</script>

## Variants

- ease-scroll-progress-thick - 6px height
- ease-scroll-progress-glow - Neon glow effect
- ease-scroll-progress-rounded - Rounded corners
- ease-scroll-progress-static - No transition smoothing

## Why it fits EaseMotion CSS

- Minimal JavaScript
- Smooth width transitions
- Gradient fill color
- Fixed positioning