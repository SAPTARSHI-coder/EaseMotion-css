# Animated Gradient Dropdown

A pure CSS, JavaScript-free animated dropdown menu featuring a vibrant gradient trigger button, a subtle gradient container border, and perfectly smooth opening/closing transitions. Built for Issue #79612.

## Features
- **Pure CSS (No JS):** Utilizes the `:focus-within` and `:hover` pseudo-classes to manage the open/close state flawlessly without JavaScript event listeners.
- **Smooth Animations:** Translates and fades in the dropdown menu with a smooth cubic-bezier curve.
- **Gradient Styling:** Features a bold gradient button, matching drop-shadows, and a subtle gradient border injected around the menu via pseudo-elements.
- **Fully Accessible:** Works perfectly with keyboard navigation using the `Tab` key, preserving focus states and utilizing semantic ARIA roles (`role="menu"`, `aria-haspopup`).
- **Motion Safe:** Fully respects `@media (prefers-reduced-motion: reduce)` by disabling the slide and scale transitions, falling back to instant visibility toggling.

## Folder Structure
- `demo.html` - The showcase layout displaying multiple colored instances of the dropdown.
- `style.css` - The core styling, variables, transition logic, and interaction states.
- `README.md` - Documentation.

## HTML Usage

Wrap your `<button>` and `<ul>` menu inside the `.ease-grad-dropdown` container. No JavaScript is required; the CSS handles all interaction based on hover and focus containment.

```html
<div class="ease-grad-dropdown">
    <button class="ease-grad-btn" aria-haspopup="true" aria-expanded="false">
        Options
        <svg class="ease-grad-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z" />
        </svg>
    </button>
    <ul class="ease-grad-menu" role="menu">
        <li><a href="#" role="menuitem">Account Settings</a></li>
        <li><a href="#" role="menuitem">Log Out</a></li>
    </ul>
</div>
```

## CSS Customization

The component uses scoped CSS variables. You can easily switch themes or build your own gradient pairs by overriding the variables:

```css
.ease-grad-dropdown {
    --grad-start: #f43f5e; /* Left gradient color */
    --grad-end: #f97316; /* Right gradient color */
    --grad-shadow: rgba(244, 63, 94, 0.3); /* Ambient glow */
}
```

The component includes two pre-made themes in `style.css`:
- `.theme-sunset` (Default)
- `.theme-ocean`

## Accessibility Notes
- **Keyboard Navigation:** Because the wrapper uses `:focus-within`, tabbing into the button opens the menu. Tabbing through the links keeps it open. Tabbing away automatically closes it. This perfectly simulates standard JS dropdown accessibility.
- **Focus Rings:** Explicit `:focus-visible` styling is included on the trigger button. The links inside indicate focus through a background color change.
- **Semantic HTML:** The menu correctly utilizes `<ul>` and `<li>` with ARIA roles (`menu`, `menuitem`) to inform screen readers of the structure.
