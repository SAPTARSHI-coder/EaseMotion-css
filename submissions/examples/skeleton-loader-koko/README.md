# Skeleton Loader (skeleton-koko)

## What does this do?
A shimmering skeleton loader component that shows placeholder blocks (avatar, text lines, image) while content is loading.

## How is it used?
Add the `.skeleton-card` wrapper with `.skeleton-avatar`, `.skeleton-line`, and `.skeleton-image` elements inside:

\`\`\`html
<div class="skeleton-card">
  <div class="skeleton-avatar"></div>
  <div class="skeleton-line"></div>
  <div class="skeleton-line short"></div>
  <div class="skeleton-image"></div>
</div>
\`\`\`

## Why is it useful?
Improves perceived loading performance in dashboards, cards, and feeds — matches EaseMotion CSS's animation-first, lightweight philosophy.