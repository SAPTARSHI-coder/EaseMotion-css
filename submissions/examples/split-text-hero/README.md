# Split-Text Hero Heading Reveal Animation

A hero heading where each word cascades in with a staggered fade-and-rise animation, followed by the subheading. Pure HTML and CSS — no JavaScript required.

## Features

- ✨ Each word animates in independently with an increasing delay, creating a cascading reveal
- 🎨 Easily highlight specific words with an accent color (see word 2 & 3 in the demo)
- 📝 Subheading fades in after the heading finishes
- 📱 Responsive — heading font size scales down on small screens
- ♿ Respects `prefers-reduced-motion` (all text appears instantly, fully visible)
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

Wrap each word of your heading in its own `.hero-word` span:

```html
<h1 class="hero-heading">
  <span class="hero-word">Build</span>
  <span class="hero-word">beautiful</span>
  <span class="hero-word">interfaces.</span>
</h1>
<p class="hero-sub">Your subheading here.</p>
```

Each word's `animation-delay` is set via `:nth-child` in `style.css` — add more `:nth-child(N)` rules with increasing delays if your heading has more words than the default five.

## Why it fits EaseMotion CSS

The cascade is achieved purely with `@keyframes` and staggered `animation-delay` per word — no JavaScript text-splitting library required, since the words are just written as separate `<span>` elements in the markup.

## Files

- `demo.html` — an example hero section with a 5-word heading and subheading
- `style.css` — all styles and the cascading reveal animation
- `README.md` — this file

## Notes

For headings with a variable/dynamic number of words (e.g. CMS-driven content), you'd generate the `.hero-word` spans and their delays in your app's templating layer — the animation technique itself stays pure CSS either way.