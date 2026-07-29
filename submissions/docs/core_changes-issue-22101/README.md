# Text Animation Utilities: Typewriter, Text Reveal, Text Scramble

## What does this do?

Adds three text animation utilities to EaseMotion CSS — typewriter (blinking cursor with stepped character reveal), text-reveal (word-by-word or character-by-character entrance with clip-path), and text-scramble (character cycling on hover or load). Includes CSS keyframes and JS enhancements for configurable behavior.

## How is it used?

**Typewriter effect:**

```html
<p class="ease-typewriter" data-ease-text="Hello, world!" data-ease-speed="80">
  Hello, world!
</p>
```

**Text reveal on scroll:**

```html
<h1 class="ease-text-reveal" data-ease-direction="chars">
  Welcome to my site
</h1>
```

**Text scramble on hover:**

```html
<h2 class="ease-text-scramble" data-ease-text="Full-Stack Developer">
  Full-Stack Developer
</h2>
```

## Why is it useful?

Text animations are among the most requested effects for portfolio sites, landing pages, and hero sections. Without built-in utilities, developers must either include heavy animation libraries or write complex custom JS. These utilities provide lightweight, configurable text effects that integrate seamlessly with EaseMotion's existing animation system.
