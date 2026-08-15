# Shake Diff Viewer

## Overview
A responsive, CSS-only diff viewer inspired by portfolio review screens, featuring file headers, line-by-line change states, and a subtle shake animation that highlights modified content without JavaScript.

## Installation
1. Open [demo.html](demo.html) directly in a browser.
2. Keep [style.css](style.css) in the same folder so the demo remains self-contained.
3. If you use the component in another page, preserve the local stylesheet link and repository stylesheet reference.

## Usage
```html
<link rel="stylesheet" href="../../../easemotion.css" />
<link rel="stylesheet" href="./style.css" />
```

Then include the semantic markup from [demo.html](demo.html) in your page. The viewer uses native HTML structure and CSS animation to mimic a diff review experience.

## Accessibility
- Uses a semantic main landmark, heading, and descriptive content blocks.
- The layout remains readable and navigable on smaller screens.
- Focus styles and readable contrast are preserved for keyboard and assistive users.
- Motion is reduced automatically when the user prefers less animation.

## Why it fits EaseMotion CSS
This submission reflects the EaseMotion philosophy by combining card, fade, slide, hover, and spacing utilities with a lightweight, reusable interaction pattern. It stays visually polished while remaining easy to adapt into a wider UI system.
