# EaseMotion: Typewriter Hero

A hero headline with a rotating, caret-blinking typewriter accent word and a finished-state glow.

## How is it used?
Use a `.typewriter` span whose `data-words` lists pipe-separated rotating words:
```html
<h1>Ship ideas,<br><span class="typewriter" data-words="faster|smarter|in style|today"></span></h1>
```
The caret blinks and the accent glows.

## Why is it useful?
Headline motion without JS dependencies; the caret blink and glow are pure CSS keyframes and respect `prefers-reduced-motion`. Pairs naturally with EaseMotion's fade/hero utilities.

## Tailoring Variable Hooks

| Variable | Baseline | Purpose |
| :--- | :--- | :--- |
| `--speed` | `6s` | Word rotation period |
| `--caret` | `#7cf6ff` | Caret + accent color |


---
_Self-contained, dependency-free HTML + CSS. Open `demo.html` directly in a browser._
