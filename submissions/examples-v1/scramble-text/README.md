# Hacker Text Scramble Effect

A retro hacker/decoder style text animation where characters randomly cycle through the alphabet before landing on the correct final string. Controlled via ~15 lines of vanilla JavaScript and styled cleanly in CSS to change color and glow during the scramble phase.

## EaseMotion CSS Classes Showcased

This feature submits a self-contained prototype demonstrating the hacker decoder effect.

### Classes:
- `.ease-scramble-text`: Base target container applying monospace layout, weights, letter-spacing, and transition rules.
- `.ease-scrambling`: Applied programmatically during the scramble loop to overlay active scanning colors and terminal glows.

### Usage in HTML:
```html
<h1 class="ease-scramble-text" data-value="EASEMOTION">EASEMOTION</h1>
```

---
Created as a contribution to EaseMotion CSS. Open `demo.html` in any browser to view the interactive prototype!
