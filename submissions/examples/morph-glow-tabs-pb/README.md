# Morph-Glow Tabs

## What does this do?

A tab component with a glowing, morphing active state. The active tab's border-radius shifts through several shapes while a blue-to-dark-purple glow pulses behind it. Tab switching uses minimal vanilla JS; the animation itself is pure CSS.

## How is it used?

Add `.tab` to each button and `.active` to the one that should start selected. Each button calls `change(this.id)` on click, which toggles `.active` and shows the matching `.content` block.

```html
<div class="morph-tabs">
  <button
    class="tab active"
    id="1"
    aria-selected="true"
    onclick="change(this.id)"
  >
    Overview
  </button>
  <button class="tab" id="2" aria-selected="false" onclick="change(this.id)">
    Analytics
  </button>
</div>

<div class="content" id="tab1">...</div>
<div class="content" id="tab2" hidden>...</div>
```

## Why is it useful?

It's a lightweight way to make tabs feel alive, with no animation library. The glow pauses on hover so it doesn't distract while reading. Buttons stack responsively on small screens. All motion is disabled under `prefers-reduced-motion`.
