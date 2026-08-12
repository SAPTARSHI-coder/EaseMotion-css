# Typewriter Reveal

## What does this do?

A pure CSS typewriter text animation that types out characters one by one with a blinking cursor, using `steps()` and `@keyframes` — no JavaScript required.

## How is it used?

Add the `typewriter-ak` class to any block element. The text is revealed via `overflow: hidden` + `width` animation. The `--typewriter-text-ak` custom property sets the final text (for width calculation).

```html
<p class="typewriter-ak" style="--typewriter-width-ak: 13ch; --typewriter-steps-ak: 13;">
  Hello, world!
</p>
```

### Custom Properties

| Variable | Default | Purpose |
|---|---|---|
| `--typewriter-width-ak` | `12ch` | Final width matching your text character count |
| `--typewriter-speed-ak` | `3s` | Typing animation duration |
| `--typewriter-steps-ak` | `12` | Number of characters for `steps()` |
| `--typewriter-cursor-color-ak` | `#6c63ff` | Cursor color |

## Why is it useful?

Adds a classic typewriter reveal pattern without JavaScript bloat. Works for hero headings, CLI demos, splash screens, and any branded intro animation.
