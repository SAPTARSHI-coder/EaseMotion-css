# Glitch-Flicker Accordion

A pure HTML/CSS implementation of a minimalist futuristic accordion featuring a subtle glitch-flicker animation upon opening. Ideal for tech-themed layouts, system status pages, or developer documentation.

## 1. What the Glitch-Flicker Accordion Does
This component uses the native HTML5 `<details>` and `<summary>` elements to create an accessible, semantic accordion. When a user clicks to open an item, a brief CSS keyframe animation simulates a digital glitch or flicker effect (opacity shifting, text-shadow displacement, and a scanline), emphasizing the "tech/cyber" aesthetic without being overly distracting.

## 2. Main Features
- **Pure HTML and CSS**: Zero JavaScript required.
- **Native Semantic Elements**: Built on `<details>` and `<summary>` for out-of-the-box keyboard and screen reader accessibility.
- **Controlled Glitch Effect**: A fast, subtle `@keyframes` animation applied on the `[open]` state.
- **Minimalist Tech Styling**: Monospace typography, precise borders, and neon accent colors.
- **Responsive**: Adapts perfectly to desktop, tablet, and mobile layouts.
- **Accessible & Reduced-Motion Compliant**: Supports `:focus-visible` and disables animations when `prefers-reduced-motion` is active.

## 3. How to Use It
Include the `style.css` file and use the semantic `<details>` HTML structure shown in `demo.html`. The `name` attribute can be used on `<details>` in modern browsers to enable exclusive accordions (only one open at a time).

```html
<!-- Example Usage -->
<details class="glitch-accordion" name="system-accordion">
    <summary class="accordion-header" tabindex="0">
        <span class="header-text">Network Configuration</span>
        <span class="accordion-icon" aria-hidden="true"></span>
    </summary>
    <div class="accordion-content">
        <div class="content-inner">
            <p>Your content here.</p>
        </div>
    </div>
</details>
```

## 4. HTML Class Structure
- `.glitch-accordion`: Applied to the `<details>` element, establishing boundaries and styling.
- `.accordion-header`: Applied to the `<summary>` element. Handles the layout of the text and toggle icon.
- `.header-text`: Wraps the title text.
- `.accordion-icon`: Creates a CSS-only animated plus/minus icon.
- `.accordion-content` and `.content-inner`: Wrappers used to manage smooth height and opacity transitions using `max-height`.

## 5. CSS Custom Properties
Adjust the appearance via these variables:
- `--accordion-bg`, `--accordion-bg-hover`: Background colors for resting and hover states.
- `--accordion-border`, `--accordion-border-active`: Border colors.
- `--accordion-accent`: The primary neon accent color (default cyan).
- `--glitch-color-1`, `--glitch-color-2`: The cyan and magenta shadow colors used during the glitch.
- `--glitch-duration`: How long the open glitch effect lasts (default 0.35s).
- `--accordion-radius`: Border radius for the container.

## 6. How the glitch-flicker animation works
The `glitch-flicker` `@keyframes` animation alters `transform`, `opacity`, and `text-shadow` in rapid succession over `0.35s`. This animation is triggered when the `<details>` element gains the `[open]` attribute. A simulated horizontal scanline also sweeps across the header.

## 7. Responsive Behavior
The component utilizes relative spacing (`rem`) and fluid widths, ensuring it fits cleanly into mobile viewports. On smaller screens, padding and font sizes are slightly reduced to maintain readability.

## 8. Accessibility Considerations
- Relies on native `<summary>` behavior which handles click, Space, and Enter key activations.
- Hides decorative CSS icons from screen readers using `aria-hidden="true"`.
- Focus states are explicitly defined using `:focus-visible` with high-contrast outlines to aid keyboard navigation.

## 9. `prefers-reduced-motion` Support
A media query ensures that if a user has requested reduced motion at the OS level, all glitch animations, scanlines, and height transitions are disabled, instantly displaying the content safely.

## 10. Example Usage
View `demo.html` in your browser for a live demonstration of three interconnected system diagnostics accordions.

## 11. Why it fits EaseMotion CSS
This component perfectly represents the EaseMotion CSS philosophy: it delivers a premium, complex-feeling micro-interaction (a digital glitch) relying strictly on native browser capabilities and modern CSS. It prioritizes performance and accessibility without sacrificing aesthetics.
