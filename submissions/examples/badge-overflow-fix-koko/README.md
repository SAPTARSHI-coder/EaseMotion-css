# Badge Overflow Fix (badge-overflow-koko)

## What does this do?
Fixes an issue where long feature badge text overflows outside its container/card, especially on smaller screens.

## How is it used?
Wrap your badge text inside `.feature-badge` within a `.feature-card`:

\`\`\`html
<div class="feature-card">
  <span class="feature-badge">
    Best Choice for Enterprise Applications with Advanced Responsive Features
  </span>
  <h3>Enterprise Plan</h3>
  <p>Designed for growing businesses.</p>
</div>
\`\`\`

## Why is it useful?
Ensures badge text wraps properly and stays within its card boundary across all screen sizes, preventing layout breakage — fixes issue #57527.