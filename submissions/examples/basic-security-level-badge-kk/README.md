# Basic Security Level Badge

## What it does

This submission adds a simple CSS-only security level badge for account panels,
admin tools, risk summaries, verification screens, and profile settings.

It helps users quickly identify low, medium, and high security states in a
compact and readable format.

## How to use it

Add the base badge class with a level modifier:

```html
<span class="basic-security-level-badge level-high">High</span>
```

## Why it fits EaseMotion CSS

It fits EaseMotion CSS because it is human-readable, composable, and useful
across common account and admin interfaces. The badge adds a small animated
visual signal through glow styling and row hover motion while staying fully
CSS-only.

## Included features

- Low, medium, and high security level variants
- Compact pill badge layout
- Built-in glowing status dot
- Account/security row examples
- Subtle hover lift on rows
- Responsive stacking on small screens
- Pure HTML and CSS implementation

## Files

- `demo.html` - self-contained browser demo
- `style.css` - raw CSS for the security level badge
- `README.md` - usage and contribution context
