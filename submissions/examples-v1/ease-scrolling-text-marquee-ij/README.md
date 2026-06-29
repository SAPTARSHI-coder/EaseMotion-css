# Scrolling Text Marquee

An infinite horizontal scrolling marquee with CSS keyframe animation. Duration is controlled by `--marquee-dur`. Includes a Play/Pause toggle.

## Features

- Infinite horizontal scroll using CSS @keyframes
- Duration controlled by `--marquee-dur` CSS variable
- Duplicated content for seamless loop
- Play/Pause toggle via animation-play-state
- Styled marquee track with dark card background

## Usage

Create a `.marquee-inner` element with two identical `<span>` children. Set `--marquee-dur` for scroll speed. CSS handles the infinite loop with `@keyframes marqueeScroll` translating -50%.
