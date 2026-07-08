# Text Overflow Ellipsis (`ease-text-overflow-ellipsis`)

A structural layout utility class that handles graceful single-line text truncation using native CSS.

## 🚀 Features & EaseMotion Showcase

- **Native CSS Truncation**: Relies entirely on `text-overflow: ellipsis` rather than Javascript character counting.
- **Responsive Layout Safe**: Enforces `max-width: 100%` and `overflow: hidden` to guarantee long titles never break flex or grid containers.
- **Card/List Ready**: Designed perfectly for common SaaS patterns like card titles, data tables, or file lists.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

```html
<div style="width: 200px;">
  <h3 class="ease-text-overflow-ellipsis" title="A very long title that needs truncating">
    A very long title that needs truncating
  </h3>
</div>
