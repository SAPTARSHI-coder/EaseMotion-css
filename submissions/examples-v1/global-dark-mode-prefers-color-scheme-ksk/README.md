# Global prefers-color-scheme Native Dark Mode (`global-dark-mode-prefers-color-scheme-ksk`)

1. What does this do?  
An eco-friendly, responsive global Dark Mode enhancement stylesheet covering all 30 core components (accordion, alert, avatar, badge, breadcrumb, button, card, carousel, checkbox, chip, code-block, code-inline, dialog, divider, drawer, dropdown, form, icon, image, input, kbd, link, list, loader, menu, modal, navbar, pagination, popover, progress). It automatically checks the system theme setting via `@media (prefers-color-scheme: dark)` and overrides color variables to a dark slate interface palette.

2. How is it used?  
Include or import `style.css`. Define the main custom property variables in your root element:

```css
:root {
  --ease-bg:              #f8fafc;
  --ease-surface:         #ffffff;
  --ease-border:          rgba(15, 23, 42, 0.08);
  --ease-text:            #0f172a;
  --ease-accent:          #4f46e5;
}

@media (prefers-color-scheme: dark) {
  :root {
    --ease-bg:              #090b11;
    --ease-surface:         #141724;
    --ease-border:          rgba(255, 255, 255, 0.08);
    --ease-text:            #f8fafc;
    --ease-accent:          #6366f1;
  }
}
```

3. Why is it useful?  
Allows all 30 interface elements to adapt to the OS light/dark theme preference automatically. Eliminates bright screen glare in low-light environments, reduces eye strain, and optimizes display power usage on OLED devices without custom JavaScript theme scripts.

---
*Created for ECSoC-26 / GSSoC-26 — Resolves #55139.*
