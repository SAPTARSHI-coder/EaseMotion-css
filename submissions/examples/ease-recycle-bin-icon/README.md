# Recycle Bin Icon

### 1. What does this do?
An animated recycle bin icon whose lid tilts open and body bounces slightly on hover, with an optional "filling" variant that pulses a fill color inside the bin to suggest activity.

### 2. How is it used?
\`\`\`html
<div class="recycle-bin-icon">
  <svg viewBox="0 0 64 64">
    <g class="bin-lid">
      <rect x="14" y="10" width="36" height="6" rx="2"></rect>
      <rect x="26" y="4" width="12" height="6" rx="2"></rect>
    </g>
    <path class="bin-body" d="M18 20 L46 20 L43 56 A4 4 0 0 1 39 60 L25 60 A4 4 0 0 1 21 56 Z"></path>
    <line class="bin-stripe" x1="26" y1="28" x2="27" y2="52"></line>
    <line class="bin-stripe" x1="32" y1="28" x2="32" y2="52"></line>
    <line class="bin-stripe" x1="38" y1="28" x2="37" y2="52"></line>
  </svg>
</div>
\`\`\`
- Add the \`is-filling\` class to enable the pulsing "fill" animation, useful for indicating an active/loading state.
- Hover interaction (lid tilt + bounce) works out of the box with no extra classes.

### 3. Why is it useful?
It's a self-contained, dependency-free SVG icon with a playful micro-interaction (hover lid tilt) that fits EaseMotion's animation-first philosophy — useful anywhere a "delete", "recycle", or "clear" action needs clear, motion-driven visual feedback instead of a static icon.
