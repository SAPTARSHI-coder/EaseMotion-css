# ease-follow-shadow

Shadow shifts dynamically toward the cursor position, giving cards a physically accurate lighting feel.

## Usage

```html
<div class="ease-follow-shadow">Card</div>
```

Include the small companion script (inline or from `style.css` comments) — it sets two CSS custom properties `--follow-shadow-x` and `--follow-shadow-y` on `mousemove`.

## Why it fits EaseMotion CSS

The CSS drives the visual. The script only sets custom properties — the actual effect lives entirely in CSS.