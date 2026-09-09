# Animated Datepicker Calendar (Documentation Guide)

This guide covers the accessibility setup, HTML markup, and CSS modifiers for implementing an accessible, animated Datepicker Calendar component.

## Accessibility Requirements

Building a datepicker requires strict adherence to WAI-ARIA authoring practices to ensure it's usable by screen readers and keyboard users.

### Keyboard Navigation Setup

When implementing this UI component, ensure you add JavaScript to handle the following keyboard interactions within the `.datepicker-grid`:

- `Tab`: Moves focus into the grid, typically to the currently selected date or today's date.
- `Arrow Keys`: Moves focus across dates (Left/Right for days, Up/Down for weeks).
- `Enter` / `Space`: Selects the currently focused date.
- `Page Up` / `Page Down`: Navigates to the previous/next month.
- `Home` / `End`: Moves focus to the first or last day of the current month.

### ARIA Attributes

Your markup must include these essential ARIA attributes:
- `role="application"` or `role="dialog"` on the main container.
- `role="grid"` on the calendar table.
- `aria-label` on buttons (e.g., "August 1, 2026" instead of just "1").
- `aria-live="polite"` on the month title so screen readers announce month changes.

## HTML Markup Example

Here is the base accessible markup for the calendar:

```html
<div class="datepicker-calendar" role="application" aria-label="Calendar date picker">
    <div class="datepicker-header">
        <button class="datepicker-prev" aria-label="Previous month">&lt;</button>
        <div class="datepicker-title" aria-live="polite">August 2026</div>
        <button class="datepicker-next" aria-label="Next month">&gt;</button>
    </div>
    
    <table class="datepicker-grid" role="grid" aria-labelledby="datepicker-title">
        <thead>
            <tr>
                <th scope="col" aria-label="Sunday">Su</th>
                <th scope="col" aria-label="Monday">Mo</th>
                <th scope="col" aria-label="Tuesday">Tu</th>
                <th scope="col" aria-label="Wednesday">We</th>
                <th scope="col" aria-label="Thursday">Th</th>
                <th scope="col" aria-label="Friday">Fr</th>
                <th scope="col" aria-label="Saturday">Sa</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td role="gridcell" tabindex="-1"><button class="date-btn" aria-label="August 1, 2026">1</button></td>
                <!-- ... other days ... -->
            </tr>
        </tbody>
    </table>
</div>
```

## CSS Custom Properties & Modifiers

The datepicker uses CSS variables for easy theming. You can override these variables or use the built-in modifier classes.

### Default Theme Variables

```css
:root {
    --calendar-bg: #ffffff;
    --calendar-text: #333333;
    --calendar-border: #e0e0e0;
    --calendar-hover-bg: #f5f5f5;
    --calendar-focus-ring: #005fcc;
}
```

### Modifier Classes

Append these modifier classes to `.datepicker-calendar` to instantly switch themes:

**Dark Mode** (`.datepicker-calendar--dark`)
```css
.datepicker-calendar--dark {
    --calendar-bg: #1a1a1a;
    --calendar-text: #f0f0f0;
    --calendar-border: #333333;
    --calendar-hover-bg: #2a2a2a;
    --calendar-focus-ring: #4da3ff;
}
```

**High Contrast** (`.datepicker-calendar--high-contrast`)
```css
.datepicker-calendar--high-contrast {
    --calendar-bg: #000000;
    --calendar-text: #ffffff;
    --calendar-border: #ffffff;
    --calendar-hover-bg: #ffff00;
    --calendar-focus-ring: #ff00ff;
}
```

*Note: This documentation submission is indexed automatically by the EaseMotion documentation engine.*
