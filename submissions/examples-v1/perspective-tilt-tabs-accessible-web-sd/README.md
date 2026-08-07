# Perspective Tilt Tabs

## What does this do?

Pure CSS tabbed content with a subtle 3D perspective tilt effect on the active tab. Highlights the selected tab with a gentle rotation and scale, providing clear orientation without relying on color alone.

## How is it used?

Add the `.perspective-tilt-tabs` class to a container, then place radio inputs, labels, and tab panels inside. Each radio's `checked` state shows its corresponding panel. Customize via CSS properties:

```css
--tabs-duration: 0.25s;
--tabs-easing: ease-out;
--tabs-tilt-angle: 3deg;
--tabs-accent-color: #2563eb;
--tabs-scale: 1.02;
```

## Why is it useful?

Keyboard-accessible, responsive, and respects `prefers-reduced-motion`. Works without JavaScript. The tilt effect gives a spatial cue to active content, aiding users who benefit from non-color indicators of state.
