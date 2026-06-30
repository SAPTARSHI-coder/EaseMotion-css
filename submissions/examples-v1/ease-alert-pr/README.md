# ease-alert-pr

Alert/notification banner with icon, title, message, and dismiss action.

## Features

- 4 color variants: success, warning, error, info
- Left border accent matching variant color
- Icon placeholder with matching color
- Dismiss button with hover state
- Accessible with `role="alert"` and `aria-label`

## Files

- `style.css` — the alert styles
- `demo.html` — working demo with all 4 variants
- `README.md` — usage documentation

## Usage

```html
&lt;div class="alert-pr alert-pr-success" role="alert"&gt; &lt;svg
class="alert-pr-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"&gt;
&lt;path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5
13l4 4L19 7"&gt;&lt;/path&gt; &lt;/svg&gt; &lt;div class="alert-pr-content"&gt;
&lt;div class="alert-pr-title"&gt;Success&lt;/div&gt; &lt;div
class="alert-pr-message"&gt;Your changes have been saved.&lt;/div&gt;
&lt;/div&gt; &lt;button class="alert-pr-close" aria-label="Dismiss
alert"&gt;✕&lt;/button&gt; &lt;/div&gt;
```
