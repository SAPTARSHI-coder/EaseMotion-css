# Animated Infinite Marquee

A CSS-only infinite scrolling marquee with multiple rows scrolling in opposite directions. Pauses on hover and uses duplicated content for a seamless loop. Created by @saurabhhhcodes.

## Features

- Pure CSS infinite scroll (no JavaScript)
- Two marquee rows with opposite scroll directions
- Pause on hover via `animation-play-state: paused`
- Seamless loop via duplicated `.marquee__content`
- Pill-style logo items
- BEM naming conventions

## Usage

Include `style.css`. Structure uses `.marquee` > `.marquee__track` > `.marquee__content` (×2 for seamless loop). Add `.marquee--reverse` for opposite direction scrolling.
