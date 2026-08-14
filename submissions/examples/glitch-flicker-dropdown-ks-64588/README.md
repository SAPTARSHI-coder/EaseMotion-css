# Glitch-Flicker Dropdown

A pure HTML/CSS dropdown menu powered by the native `<details>` element, featuring a controlled "glitch-flicker" entrance animation. Designed for minimalist technology interfaces, dashboards, and cyber-aesthetic web applications.

## 1. What the Glitch-Flicker Dropdown Does
This component provides a robust, interactive dropdown menu without relying on any JavaScript for state management. By utilizing the native `<details>` and `<summary>` HTML tags, it automatically handles click toggles while applying a CSS `@keyframes` animation to gracefully, yet strikingly, glitch the menu into view when opened.

## 2. Main Features
- **Pure HTML and CSS**: Zero JavaScript required for state or animation.
- **Native Interaction**: Built on `<details>` and `<summary>` for semantic, out-of-the-box browser support.
- **Glitch-Flicker Animation**: Hardware-accelerated CSS animations manipulating `opacity`, `transform`, `box-shadow`, and `filter` create a brief, high-tech entrance effect.
- **Minimalist Tech UI**: Monospace typography, clean borders, SVG icons, and cyber-cyan accents.
- **Theming**: Inherently supports both Light and Dark mode via `prefers-color-scheme`.
- **Responsive**: Adapts to mobile viewports without overflowing horizontally.
- **Accessible**: Features explicit `:focus-visible` styling with `outline-offset` and completely disables animations for users preferring reduced motion.

## 3. How to Use It
Simply drop the CSS into your stylesheet and use the structure provided in the example. No JavaScript initialization is necessary.

```html
<!-- Example Usage -->
<details class="dropdown" name="tech-dropdown">
    <summary class="dropdown-trigger" tabindex="0">
        <span class="trigger-text">System Menu</span>
        <span class="trigger-icon" aria-hidden="true"><!-- SVG --></span>
    </summary>

    <div class="dropdown-menu">
        <div class="dropdown-group">
            <a href="#" class="dropdown-item">Dashboard</a>
            <a href="#" class="dropdown-item">Settings</a>
        </div>
    </div>
</details>
```

## 4. HTML Class Structure
- `.dropdown`: Applied to the `<details>` element; establishes the absolute positioning context.
- `.dropdown-trigger`: Applied to the `<summary>`; styles the main button and handles the click target.
- `.trigger-icon`: Wraps the chevron SVG and rotates when the dropdown is open.
- `.dropdown-menu`: The absolute container for the menu items that receives the glitch-flicker animation.
- `.dropdown-group`: A flex container for grouping related items.
- `.dropdown-divider`: A 1px line separator.
- `.dropdown-item`: The interactive anchors/buttons inside the menu.
- `.item-danger`: An optional modifier class for destructive actions (e.g., Terminate Instance).

## 5. CSS Custom Properties
Customize the dropdown extensively via these variables:
- `--dropdown-bg`, `--dropdown-border`, `--dropdown-text`: Base surface styling.
- `--dropdown-border-hover`, `--dropdown-item-hover`: Interactive hover states.
- `--dropdown-accent`: Primary highlight color for focus states and icons.
- `--dropdown-danger`: Color scheme applied to destructive items.
- `--dropdown-shadow`: Soft drop shadow for depth.
- `--dropdown-radius`: Corner rounding.
- `--glitch-duration`: Animation timing (default `0.35s`).
- `--glitch-color-1`, `--glitch-color-2`: The RGB separation colors used during the glitch.

## 6. How the Glitch-Flicker animation works
When a user clicks the `<summary>`, the browser natively applies the `[open]` attribute to the `<details>` parent, causing the `.dropdown-menu` to render. Immediately upon rendering, the `glitch-flicker-dropdown` animation triggers. Over `0.35s`, the menu rapidly jumps between slight opacity dips, small horizontal/vertical `translate` offsets, and chromatic aberration via `box-shadow`, before instantly snapping into a crisp, readable state.

## 7. Responsive Behavior
On desktop and tablet, the dropdown conforms to its internal content width (min-width `240px`). On mobile viewports (`max-width: 480px`), the trigger and menu naturally expand to fill `100%` of their container block, ensuring touch targets are large enough and no horizontal scrolling occurs.

## 8. Accessibility Support
- Automatically inherits click and keyboard `Space` / `Enter` interactions via the native `<summary>`.
- Provides high-contrast `:focus-visible` outlines shifted away from the element using `outline-offset: 3px`.
- Decorative icons are hidden via `aria-hidden="true"`.
- Menu items should use standard anchor (`<a>`) or button (`<button>`) tags to ensure they remain focusable.

## 9. `prefers-reduced-motion` Support
A media query ensures that if a user has requested reduced motion at the OS level, all glitch animations and chevron rotations are bypassed. The menu immediately appears fully opaque, prioritizing usability and comfort.

## 10. Example Usage
Open `demo.html` in a browser for a live demonstration of the component, including grouped items and destructive actions.

## 11. Why it fits EaseMotion CSS
This dropdown component exemplifies EaseMotion CSS by bringing a highly stylized, typically JS-heavy effect (the digital glitch) entirely into CSS. It requires zero JavaScript, relies purely on native HTML APIs, and carefully balances a striking entrance animation with long-term usability and accessibility.
