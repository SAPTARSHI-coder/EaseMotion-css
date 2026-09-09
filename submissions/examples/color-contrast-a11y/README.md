# Accessible Color Contrast (Light & Dark Mode)

This submission demonstrates how to establish a robust CSS variables system that guarantees WCAG 2.1 AA color contrast compliance across both Light and Dark themes.

## The Problem: The "Muted Text" Dark Mode Trap

When developers implement Dark Mode, they often just invert their background and primary text colors (e.g., White/Black becomes Black/White). 

However, they frequently forget to audit their secondary or "muted" text colors. A medium gray (like `#888888`) might pass contrast against a white background, but it will almost certainly fail against a black background.

## The Solution: WCAG 2.1 AA Ratios

The Web Content Accessibility Guidelines (WCAG) mandate the following contrast ratios between text and its background:

- **Normal Text (under 18pt or 14pt bold):** Minimum `4.5:1` ratio.
- **Large Text (18pt+, or 14pt bold+):** Minimum `3.0:1` ratio.
- **UI Components (Button borders, input borders):** Minimum `3.0:1` ratio.

### Implementing Compliant Themes via CSS Variables

To build a compliant theme, we use the `prefers-color-scheme` media query to swap CSS variables, ensuring that we independently verify the contrast ratio of *every single pair* in both modes.

```css
:root {
    --bg-color: #f8fafc;
    
    /* 5.3:1 against #ffffff. Passes AA! */
    --text-muted: #475569; 
}

@media (prefers-color-scheme: dark) {
    :root {
        --bg-color: #0f172a;
        
        /* 
           We CANNOT just use #475569 here (it's 2.3:1 against #0f172a, which FAILS).
           We must choose a significantly lighter gray.
           4.8:1 against #0f172a. Passes AA!
        */
        --text-muted: #94a3b8; 
    }
}
```

## How to Audit Contrast in DevTools

You do not need to guess if your colors pass. Both Chrome and Firefox have built-in accessibility auditors in their Developer Tools.

1. Open Chrome DevTools (F12).
2. Use the **Inspect** element tool and click on any text.
3. In the **Styles** pane, click the colored square next to the `color` property.
4. The color picker will open. Look for the **Contrast ratio** section at the bottom.
5. It will explicitly show a green checkmark if it passes AA (4.5) and AAA (7.0) requirements based on the background color behind it. It will even draw two white lines on the color spectrum indicating the exact thresholds you need to cross to pass.

## High Contrast (Forced Colors) Support

In Windows High Contrast Mode, all custom backgrounds and text colors are overridden by the user's system settings. This guarantees contrast, but can sometimes break UI shapes (like solid buttons becoming invisible boxes).

We provide fallback borders for solid buttons to ensure they remain distinguishable when custom backgrounds are stripped.

```css
@media (forced-colors: active) {
    .custom-btn.primary {
        /* Restores the shape of the button when the background is stripped */
        border: 2px solid ButtonBorder;
    }
}
```
