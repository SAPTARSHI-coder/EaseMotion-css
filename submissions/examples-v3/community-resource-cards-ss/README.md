# Community & Resource Cards

Submission for EaseMotion CSS · Fixes Issue #33847

## What does this do?
Adds a responsive grid of resource cards (Documentation, Components, Animation Utilities, Examples, npm Package, GitHub, Discord, Contributing Guide) positioned above the documentation footer, each with an icon, title, short description, and a subtle hover lift animation.

## How is it used?
\`\`\`html
<div class="resource-grid">
  <a href="#" class="resource-card">
    <span class="resource-icon">📚</span>
    <h3>Documentation</h3>
    <p>Full guides and API reference</p>
  </a>
</div>
\`\`\`

## Why is it useful?
Gives new visitors quick, visual access to key community and reference links (docs, GitHub, Discord, contributing guide) without hunting through the page. Fully responsive (4 columns → 2 → 1) and supports both light and dark themes.