# CSS-Only Skeleton Loading Shimmer Effect

## What does this do?
Provides a set of CSS utility classes to create elegant skeleton loading placeholders. It uses a CSS gradient and a linear infinite background position animation to create a highly performant shimmer effect.

## How is it used?
```html
<div class="ease-skeleton ease-skeleton-circle"></div>
<div class="ease-skeleton ease-skeleton-text" style="width: 70%;"></div>
<div class="ease-skeleton ease-skeleton-img"></div>
```

## Why does it fit EaseMotion CSS?
Skeleton screens are heavily utilized in modern UI design to indicate loading states. Doing this purely in CSS with an infinite `background-position` animation ensures high performance (avoiding reflows) and provides a much better user experience than standard static gray boxes or spinners.

## Tech Stack
- HTML
- CSS (No JavaScript)
