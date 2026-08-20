# Scalable Motion Tokens Architecture

## What does this do?
Proposes a massive, framework-wide UI polish refactor to aggressively eradicate brittle "magic numbers" violently hardcoded into CSS animations. By explicitly replacing fixed pixel values and completely static seconds with perfectly fluid CSS `clamp()` math functions and global `--ease-*` motion tokens, we guarantee completely mathematically consistent animation pacing across vastly different mobile and desktop viewports.

## How is it used?
Maintainers and core contributors must systematically audit all CSS `transition`, `transform`, and `@keyframes` declarations across the entire repository—specifically targeting `easemotion/*.css` and `components/*.css` (spanning 12+ core files).

Currently, developers are violently hardcoding incredibly specific times and massive pixel distances directly into the component animations:
```css
/* ❌ BAD: Brittle magic numbers cause completely broken pacing on mobile */
.ease-card {
  transition: transform 0.3s ease-in-out;
}
.ease-card:hover {
  transform: translateY(-20px); /* Dangerously massive, violently jarring jump on a small phone! */
}
```

This incredibly toxic legacy approach must be entirely ripped out. The core `variables.css` file must formally and strictly define global motion tokens, and components must universally utilize fluid CSS math to natively scale the animation distance:
```css
/* ✅ GOOD: Perfect mathematical scaling and beautifully unified pacing */
:root {
  --ease-duration-normal: 300ms;
  --ease-curve-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --ease-hover-distance: clamp(-16px, -1.5vw, -4px); /* Mathematically scales perfectly by device! */
}

.ease-card {
  transition: transform var(--ease-duration-normal) var(--ease-curve-spring);
}
.ease-card:hover {
  transform: translateY(var(--ease-hover-distance)); /* Flawless! */
}
```

## Why is it useful?
Currently, EaseMotion's animations feel incredibly jarring, violently disjointed, and completely amateurish when deployed in complex enterprise applications. Because the framework dangerously hardcodes values like `translateY(-20px)`, an animation that looks completely acceptable on a massive 4K desktop monitor natively looks like a violently aggressive, completely broken graphical glitch on a tiny iPhone screen. Furthermore, because every single component blindly hardcodes its own `0.3s` or `0.2s` durations independently, the framework completely lacks unified UX pacing, violently destroying the professional "feel" of the UI.

By aggressively forcing every single animated component across all 12+ framework files to strictly utilize global `--ease-duration` tokens and mathematically fluid `clamp()` functions, we completely eradicate this architectural UX blocker natively. The animations become mathematically bulletproof; the physical jump distance natively calculates its own size based perfectly on the user's screen width (e.g., a beautifully subtle 4px on mobile, but a pronounced 16px on desktop). This instantly secures a mathematically flawless, highly polished, Apple-tier motion experience for all downstream enterprise applications without requiring developers to write a single `@media` query override.
