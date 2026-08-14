# ease-typewriter-loop fix (steps auto-sync)

### What does this do?
Fixes `.ease-typewriter-loop` so the `steps()` count in the reveal animation always matches the actual text length, instead of staying hardcoded at 12 — closes #60102.

### How is it used?
```html
<span class="ease-typewriter-loop">
  This is a much longer typewriter sentence
</span>

<script>
  document.querySelectorAll('.ease-typewriter-loop').forEach(el => {
    const len = el.textContent.trim().length;
    el.style.setProperty('--ease-typewriter-length', len + 'ch');
    el.style.setProperty('--ease-typewriter-steps', len);
  });
</script>
```
No other markup changes needed — just include the small script once per page (or per instance) after the DOM loads.

### Why is it useful?
Pure CSS has no way to measure a string's length, so any fixed `--ease-typewriter-length` override without a matching step count causes multiple characters to reveal per animation frame, making the effect look glitchy/stuttery instead of a clean one-character-at-a-time typewriter reveal. This fix keeps the component usable with text of any length while staying true to EaseMotion's "just add a class, it works" philosophy. Also includes a `prefers-reduced-motion` fallback that shows the full text immediately with no animation.
