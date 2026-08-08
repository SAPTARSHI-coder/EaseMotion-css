# Float-Drift Accordion

A pure HTML/CSS implementation of a minimalist tech-inspired accordion that features a smooth "float-drift" entrance animation when revealing content. Perfect for documentation, FAQs, and platform feature highlights.

## 1. What the Float-Drift Accordion Does
This component uses native HTML5 `<details>` and `<summary>` elements to create an accessible accordion. When a user clicks to expand an item, the inner content smoothly fades in while floating upwards and drifting slightly from the side, creating a lightweight, professional feel.

## 2. Main Features
- **Pure HTML and CSS**: Zero JavaScript required.
- **Native Semantic Elements**: Built on `<details>` and `<summary>` for out-of-the-box keyboard and screen reader accessibility.
- **Float-Drift Animation**: A sophisticated `@keyframes` animation utilizing `opacity` and `transform: translate3d` for hardware-accelerated performance.
- **Minimalist Tech Styling**: Clean borders, subtle shadows, SVG icons, and a layout that supports light and dark modes natively via `prefers-color-scheme`.
- **Responsive**: Adapts gracefully to all viewport sizes.
- **Accessible & Reduced-Motion Compliant**: Includes `:focus-visible` states and fully disables the drift animations when `prefers-reduced-motion` is active.

## 3. How to Use It
Include the `style.css` file and use the semantic `<details>` structure shown in `demo.html`. You can group accordions using the `name` attribute in modern browsers.

```html
<!-- Example Usage -->
<details class="drift-accordion" name="feature-accordion">
    <summary class="accordion-header" tabindex="0">
        <span class="header-text">Automated Scalability</span>
        <span class="accordion-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
        </span>
    </summary>
    <div class="accordion-content">
        <div class="content-inner">
            <p>Your content here.</p>
        </div>
    </div>
</details>
```

## 4. HTML Class Structure
- `.drift-accordion`: Applied to the `<details>` element, establishing the outer styling and shadow transitions.
- `.accordion-header`: Applied to the `<summary>` element. Handles the layout of the title text and the chevron icon.
- `.header-text`: Wraps the title text.
- `.accordion-icon`: Wraps the SVG chevron, handles the rotation transition.
- `.accordion-content`: Wrapper that contains the top border.
- `.content-inner`: The inner wrapper that receives the `float-drift` animation, ensuring the border doesn't animate with the text.

## 5. CSS Custom Properties
Easily customize the appearance:
- `--bg-color`, `--accordion-bg`, `--accordion-bg-hover`: Background colors.
- `--accordion-border`: The border color.
- `--accordion-text`, `--accordion-text-muted`: Text colors.
- `--accordion-accent`: The primary accent color used for borders and icons on hover/open.
- `--accordion-shadow`: Box-shadow color.
- `--drift-duration`: The length of the entrance animation (default `0.5s`).
- `--accordion-radius`: Outer border radius.

## 6. How the Float-Drift animation works
The `float-drift` `@keyframes` animation triggers when the `<details>` element receives the `[open]` attribute. It animates the `.content-inner` from `opacity: 0` and `transform: translate3d(-10px, 15px, 0)` (offset slightly left and down) to its natural position at `(0, 0, 0)`. Using a `cubic-bezier(0.16, 1, 0.3, 1)` easing function gives it a snappy but smooth deceleration.

## 7. Responsive Behavior
Utilizes relative units (`rem`) and fluid layouts. Padding and font sizes scale down seamlessly for mobile viewports, avoiding any horizontal overflow.

## 8. Accessibility Support
- Focus states are explicitly defined using `:focus-visible` with a high-contrast inner shadow outline.
- Fully navigable using Tab, Space, and Enter keys.
- Icons are hidden from screen readers using `aria-hidden="true"`.

## 9. `prefers-reduced-motion` Behavior
A media query ensures that if a user has requested reduced motion, the `float-drift` animation, icon rotations, and hover transitions are entirely stripped out, instantly displaying the content.

## 10. Example Usage
View `demo.html` in your browser for a live demonstration of three interconnected feature accordions.

## 11. Why it fits EaseMotion CSS
This component aligns perfectly with EaseMotion's philosophy: it delivers a premium, smooth micro-interaction using purely native browser APIs and modern CSS. It is performant, semantic, entirely free of dependencies, and highly respectful of user accessibility preferences.
