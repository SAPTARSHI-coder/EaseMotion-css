# Glitch Text Effect

## What does this do?
A CSS-only text distortion effect. Two pseudo-elements duplicate the text content via `attr(data-text)`, then `clip-path` slices them into horizontal strips with red/cyan RGB channel offsets animating out of sync — creating a cyberpunk glitch illusion. Zero JS.

## Variants
- `.glitch-text` — hover to glitch (headings, any text)
- `.glitch-text--loop` — always glitching
- `.glitch-text--lg` / `.glitch-text--sm` — size variants
- `.glitch-btn` — button with glitch on hover
- `.glitch-badge` — badge/pill with glitch on hover

## How to use it
```html
<!-- IMPORTANT: data-text must exactly match the element's text -->
<h1 class="glitch-text" data-text="Your Heading">Your Heading</h1>

<!-- Always on -->
<h1 class="glitch-text glitch-text--loop" data-text="Always Glitching">Always Glitching</h1>

<!-- Button -->
<button class="glitch-btn" data-text="Get Started">Get Started</button>
```

## Why it fits EaseMotion CSS
EaseMotion has shimmer, bounce, shake — but nothing that creates a distortion/glitch effect. This fills a genuine gap for dark-themed UIs, hero headings, and CTAs. Pure CSS, zero JS, `prefers-reduced-motion` respected, composable with existing `ease-*` classes.
