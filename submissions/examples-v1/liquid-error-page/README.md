# Ease Liquid Error Page

## Description
A full error/404 page component with continuously morphing, drifting liquid blob shapes as the background, a gradient-animated error code, and a glowing shimmer CTA button. Pure CSS — zero JavaScript.

## Features
- Three independently-animated liquid blobs: each continuously morphs its `border-radius` shape (via multi-step `@keyframes`) while drifting/rotating across the container
- Blurred backdrop overlay (`backdrop-filter: blur()`) keeps foreground text readable atop the moving blobs
- Animated gradient-shifting error code text (`background-clip: text`)
- Staggered content entrance (code → title → description → CTA)
- Shimmer sweep + lift effect on the CTA button hover
- `role="alert"` for accessible error announcement
- Fully responsive (blobs scale down / third blob hides on small screens)
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-error-page" role="alert">
  <div class="liquid-blob liquid-blob--1"></div>
  <div class="liquid-blob liquid-blob--2"></div>
  <div class="liquid-blob liquid-blob--3"></div>
  <div class="liquid-overlay"></div>

  <div class="error-content">
    <p class="error-code">404</p>
    <h1 class="error-title">Page not found</h1>
    <p class="error-description">Your custom message here.</p>
    <a href="/" class="error-cta">← Back to Home</a>
  </div>
</div>
```
Reusable for any status code — just change the `.error-code` text (e.g. `500`, `403`) and description.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--liquid-1` | `#6366f1` | Blob/gradient color 1 |
| `--liquid-2` | `#ec4899` | Blob/gradient color 2 |
| `--liquid-3` | `#38bdf8` | Blob/gradient color 3 |
| `--morph-duration` | `8s` | Blob shape-morph cycle speed |
| `--float-duration` | `10s` | Blob drift/float cycle speed |
| `--entrance-duration` | `0.8s` | Content entrance animation duration |

## Accessibility & Motion
Container uses `role="alert"` so assistive technology announces the error state. All blob morphing/floating, gradient shifting, and content entrance animations are disabled under `prefers-reduced-motion`, leaving a static, fully readable page.

## Files
- `demo.html` — live working example
- `style.css` — component styles and all blob/entrance animations
- `README.md` — this file