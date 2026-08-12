# Animation Playground Generator

## Overview

The Animation Playground Generator is a documentation-focused playground for previewing EaseMotion CSS animations, generating HTML snippets, and copying ready-to-use code for your project or docs.

## Problem Statement

Documentation sites often show static examples, but developers need a fast way to experiment with animation options (type, delay, duration) and produce copy-pasteable snippets.

## Features

- Animation selector (Fade, Slide, Zoom, Bounce, Pulse, Flip)
- Delay selector (No delay, 100ms, 200ms, 300ms, 400ms)
- Duration selector
- Live preview area with replay
- Generated HTML snippet with inline delay/duration style
- Copy-to-clipboard with success toast
- Small, beginner-friendly UI built with pure HTML/CSS/vanilla JS

## Usage Guide

Open `demo.html` in a browser. Use the controls to change animation, delay, and duration. Click `Replay` to re-run the animation. Click `Generate code` to scroll the generated snippet into view, then `Copy HTML` to copy it.

### Example Output

```html
<div class="example ease-slide-up" style="animation-delay:200ms;animation-duration:600ms;">
  Example Content
</div>
```

## Benefits

- Helps authors and engineers quickly prototype animation choices
- Produces copy-pasteable snippets for documentation
- Encourages consistent animation usage aligned with EaseMotion CSS

## Future Improvements

- Add preset combinations for common UI patterns
- Allow exporting multiple items or a small demo page
- Add keyboard shortcuts for accessibility
- Expand the animation dataset with suggested easings and step presets
