## Accessibility: Reduced Motion

EaseMotion supports modern accessibility practices through the CSS media query:

```css
@media (prefers-reduced-motion: reduce) {

    * {
        animation: none !important;
        transition: none !important;
    }

}
```

### Why?

Some users experience:

- Motion sickness
- Vestibular disorders
- Vertigo
- Migraines

Respecting the user's **prefers-reduced-motion** setting improves accessibility and user comfort.

### Demo

Open:

```
examples/reduced-motion-demo.html
```

Enable **Reduce Motion** in your operating system or Chrome DevTools to see animations automatically disabled.

### Testing in Chrome

1. Open DevTools.
2. Press `Ctrl + Shift + P`.
3. Search **Rendering**.
4. Open the Rendering panel.
5. Locate **Emulate CSS prefers-reduced-motion**.
6. Select **Reduce**.
7. Refresh the page.

### Accessibility Benefits

- Improves WCAG compliance.
- Respects user accessibility preferences.
- Prevents unnecessary motion.
- Provides a better experience for sensitive users.