# CSS Glitch-Flicker Dropdown

A lightweight, purely native HTML dropdown featuring a subtle cyberpunk-inspired glitch-flicker entrance effect, designed for minimalist technology and SaaS layouts.

## Feature Overview

The component leverages the native HTML `<details>` and `<summary>` elements to create a fully accessible, zero-JavaScript dropdown menu. When opened, it utilizes CSS pseudo-elements (`::before` and `::after`) and `@keyframes` to create a brief, non-distracting glitch animation on the trigger text.

## Glitch-Flicker Behavior

- **Normal State**: The dropdown appears as a clean, minimalist input-style container.
- **Hover State**: The border lightens slightly, providing interactive feedback.
- **Open State**: The border transitions to the accent color. The native `[open]` attribute triggers two simultaneous `@keyframes` animations (`glitch-flicker-1` and `glitch-flicker-2`) on hidden pseudo-elements. These elements briefly flash red and blue offset shadows, simulating a digital glitch before returning to zero opacity.
- **Menu Animation**: The dropdown panel itself smoothly fades and slides down (`translateY`).

## Dropdown Structure

```html
<details class="dropdown">
    <summary class="dropdown-trigger" data-label="System Modules">
        System Modules
    </summary>
    <div class="dropdown-menu">
        <a href="#core">Core Interface</a>
    </div>
</details>
```

Using `<details>` is preferred because the browser natively handles state management, click event bubbling, and keyboard interactions (Space/Enter to toggle) without any JavaScript.

## Features

- Pure HTML and CSS implementation
- Native HTML `<details>` dropdown state management
- Brief, performant `@keyframes` glitch-flicker effect
- Smooth panel slide-down entrance
- Fully responsive layout
- CSS custom properties for easy theming
- 100% keyboard accessible
- Explicit `:focus-visible` states
- Complete `prefers-reduced-motion` support
- No JavaScript required
- No external dependencies, fonts, or images

## CSS Custom Properties

Easily theme the component by adjusting these root variables:

- `--page-bg`: Background color of the main page.
- `--dropdown-bg`: Background color of the trigger button.
- `--dropdown-panel`: Background color of the open menu.
- `--dropdown-text`: Primary text color.
- `--dropdown-muted`: Subdued text color.
- `--dropdown-accent`: Primary brand/highlight color used for borders and focus rings.
- `--dropdown-border`: Default border color.
- `--dropdown-radius`: Border radius applied to the container and menu.
- `--dropdown-shadow`: Elevation shadow for the dropdown panel.

## Responsive Behavior

- **Desktop (`> 700px`)**: The dropdown has a comfortable, fixed maximum width (`420px`) and sits centered within a spacious layout.
- **Tablet & Mobile (`<= 700px`)**: The page padding is reduced, and the dropdown expands to take up `100%` of the available container width to ensure maximum tap target size. Menu items maintain generous padding to prevent mis-clicks.

## Accessibility

- **Semantic HTML**: By relying on the native `<details>` element, screen readers are automatically informed of the expanded/collapsed state.
- **Keyboard Navigation**: The `<summary>` element acts as a native button. Users can tab to it and press `Space` or `Enter` to open it.
- **Visible Focus**: Custom `:focus-visible` outlines ensure keyboard users always know what element has focus, substituting default browser rings with clear, theme-aligned outlines.
- **Contrast**: The hover and focus states for menu items adjust both background color and transform, ensuring visual feedback does not rely on color alone.

## Reduced Motion

The component includes comprehensive `prefers-reduced-motion: reduce` support. When enabled at the OS level, all animations and transitions are forced to `0.01ms`. This effectively disables the `glitch-flicker` animation and the panel slide, causing the dropdown to open instantly and safely for users sensitive to motion.

## Usage

Simply copy the HTML structure into your document and link `style.css`. Adjust the `href` attributes in the `.dropdown-menu` to point to your desired destinations. Open `demo.html` in any modern browser to see the effect.

## Browser Compatibility

This component uses modern web standards supported by all major browsers (Chrome, Firefox, Safari, Edge), including:
- `<details>` and `<summary>`
- CSS Custom Properties (Variables)
- CSS Animations and Transitions
- `attr()` function in CSS
- `:focus-visible` pseudo-class
- `@media (prefers-reduced-motion)`
