# API Endpoint Card

A developer-focused API documentation card component inspired by Postman and Swagger.

## Features

- HTTP method badges (GET, POST, PUT, DELETE) with distinct colours
- Monospace endpoint URL display
- Response status indicators
- Authentication labels
- Copy endpoint button with hover animation
- Staggered fade-in entrance
- Hover lift with border glow
- Responsive layout
- Keyboard accessible with `focus-visible` outlines
- `prefers-reduced-motion` support
- Pure HTML + CSS — no JavaScript

## Files

- `demo.html` — standalone demo with 3 endpoint cards
- `style.css` — complete styling

## Usage

1. Copy `demo.html` and `style.css` into your project.
2. Open `demo.html` directly in a browser — no build step or server required.

```html
<article class="api-card">
  <div class="api-top">
    <span class="api-method get">GET</span>
    <code class="api-url">/api/v1/users</code>
  </div>
  <p class="api-description">Retrieve all registered users.</p>
  <div class="api-meta">
    <span class="api-auth">🔒 Auth Required</span>
    <span class="api-status success">200 OK</span>
  </div>
  <button class="api-copy">Copy Endpoint</button>
</article>
```

## Use Cases

- API documentation
- Developer dashboards
- SaaS admin panels
- Internal tools

## Why it fits EaseMotion CSS

- **Reusable component** — self-contained with the `api-` class prefix
- **Animation-first** — fade-in entrance, hover lift, and button transitions
- **Human-readable classes** — `api-method`, `api-status`, `api-copy` are self-documenting
- **Developer-focused aesthetic** — dark monospace interface aligned with EaseMotion's audience
