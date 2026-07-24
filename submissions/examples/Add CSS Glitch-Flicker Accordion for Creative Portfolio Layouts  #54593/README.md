# CSS Glitch-Flicker Accordion for Creative Portfolio Layouts

A bold, modern accordion built completely with HTML and CSS. It utilizes the native `<details>` and `<summary>` elements, augmented with a CSS grid hack for smooth height transitions, and features a cyberpunk-inspired hover glitch-flicker animation.

## Features

- **Pure CSS & HTML**: Fully functional accordion using native `<details>` tag with a smooth open/close animation via `grid-template-rows`. No JavaScript required for state management.
- **Glitch Hover Effect**: Text splitting with pseudo-elements, `text-shadow`, and `clip-path` creates a dynamic RGB split glitch effect when hovering over the accordion titles.
- **Responsive Layout**: Designed to adapt perfectly to desktop, tablet, and mobile screens.
- **Accessibility Friendly**: Built on semantic HTML tags. Includes `prefers-reduced-motion` queries to disable the glitch and flicker animations for users who prefer minimal motion.

## File Structure

- `demo.html`: The HTML structure demonstrating the accordion behavior. Note the use of the `name` attribute on the `<details>` tag, which allows exclusive accordions in supported browsers.
- `style.css`: Contains the layout, custom variables, the smooth height transition technique, and the glitch keyframe animations.
- `README.md`: This documentation file.

## Usage

1. **HTML Integration**: 
   Copy the `.accordion-container` block into your markup.
   ```html
   <details class="glitch-accordion" name="portfolio-accordion">
     <summary class="glitch-summary">
       <span class="summary-title" data-text="Your Title">Your Title</span>
       <span class="summary-icon"></span>
     </summary>
     <div class="accordion-content">
       <div class="content-inner">
         <!-- Content goes here -->
       </div>
     </div>
   </details>
   ```

2. **Data-Text Attribute**: 
   Ensure the `data-text` attribute on the `.summary-title` matches its inner text. This is critical for the CSS pseudo-element glitch effect to mirror the title.

3. **CSS Integration**:
   Import `style.css` into your project.

## Custom Properties (CSS Variables)

Customize the look and feel using CSS variables in the `:root` selector:

```css
:root {
  /* Colors */
  --em-bg-primary: #050505;
  --em-bg-secondary: #111111;
  --em-accent: #00ffcc;
  
  /* Glitch Colors */
  --em-glitch-1: #ff003c;
  --em-glitch-2: #00e5ff;
  
  /* Layout */
  --em-transition-speed: 0.4s;
}
```

## How It Works

- **Smooth Height Transition**: Native `<details>` tags usually snap open. By wrapping the inner content in `.accordion-content` (display: grid; grid-template-rows: 0fr;) and `.content-inner` (overflow: hidden;), we transition `grid-template-rows` to `1fr` when the `[open]` attribute is applied, achieving a smooth expand/collapse.
- **Glitch Effect**: On hover, the `::before` and `::after` pseudo-elements of `.summary-title` inherit the `data-text` content. We apply different colored `text-shadow` to them and animate their `clip-path` inset values to randomly slice and shift the text.
