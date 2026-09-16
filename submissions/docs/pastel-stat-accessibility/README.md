# Pastel Stat Metric Card (Accessibility Setup)

This guide documents the critical accessibility requirements for building a Pastel Stat Metric Card. Dashboards are heavily relied upon by all users; ensuring they are navigable by keyboards and legible to visually impaired users is not optional.

## 1. Contrast Requirements for Pastels

The biggest risk when using a pastel color palette is failing WCAG contrast checks. Light backgrounds require dark text. 

If your card background is a pastel blue (`#e0f2fe`), you cannot use a medium gray or standard blue for the text.

```css
:root {
    --card-bg: #e0f2fe; /* Light pastel blue */
    
    /* ❌ BAD: Contrast ratio ~3.0:1 (Fails WCAG AA for normal text) */
    --text-bad: #38bdf8; 
    
    /* ✅ GOOD: Contrast ratio ~7.6:1 (Passes WCAG AAA) */
    --text-primary: #0369a1; 
}
```

Ensure all trend indicators (like green text for "up") also meet the 4.5:1 ratio against the pastel background.

## 2. Semantic HTML and Screen Readers

Metric cards often contain visual shorthand (like an up arrow icon `↑` followed by a percentage `12%`). While visually clear, this can be confusing when read aloud by a screen reader (e.g., "Up arrow twelve percent").

Use a combination of `aria-hidden` and `.sr-only` (screen reader only) text to explicitly define the trend.

```html
<div class="stat-trend trend-up">
    <!-- Hide the visual icon from the screen reader -->
    <span aria-hidden="true">↑</span>
    
    <!-- Provide explicit text for the screen reader -->
    <span class="sr-only">Increased by</span> 
    <span>12%</span> 
    <span class="sr-only">from last month</span>
</div>
```
*Screen reader output: "Increased by 12 percent from last month."*

## 3. Keyboard Navigation and Focus Management

If your metric card includes an interactive element (like a "View Report" link), it must have a clearly visible focus state for keyboard users.

Do not remove the default browser outline unless you replace it with a custom focus ring that harmonizes with the card's theme.

```css
.stat-link:focus-visible {
    /* Apply a high-contrast outline */
    outline: 2px solid var(--focus-ring);
    
    /* Push the outline away from the element slightly */
    outline-offset: 4px;
    
    /* Optional: Add a background change for extra visibility */
    background-color: rgba(3, 105, 161, 0.1);
}
```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
