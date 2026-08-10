# Pure CSS Slide-Up Accordion

A buttery smooth, pure CSS accordion built with modern techniques. It uses the "Checkbox Hack" combined with CSS Grid's `0fr` to `1fr` transition to create a flawless slide-up/slide-down effect, zero JavaScript required.

## Features

- **Zero JavaScript**: Entirely powered by HTML and CSS.
- **Flawless Height Transition**: Uses `grid-template-rows: 0fr` to transition smoothly to auto heights (unlike the old `max-height` hacks that caused timing issues).
- **Slide-Up Content**: The inner text elegantly slides up into place while fading in, giving it a premium feel perfect for Marketing Landing Pages.
- **Keyboard Accessible**: Focus states are preserved by keeping the inputs structurally accessible rather than using `display: none`.
- **Customizable**: Powered by CSS Custom Properties at the `:root` level.

## Installation

Copy `style.css` and the HTML structure from `demo.html` into your project.

## Usage Example

```html
<div class="ease-accordion">
  
  <div class="ease-accordion-item">
    <!-- ID must match the label's 'for' attribute -->
    <input type="checkbox" id="item-1" class="ease-accordion-input">
    
    <label for="item-1" class="ease-accordion-header">
      Section Title
      <span class="ease-accordion-icon">▼</span>
    </label>
    
    <!-- Outer wrapper handles the height transition -->
    <div class="ease-accordion-content-wrapper">
      <!-- Inner wrapper handles the slide-up opacity animation -->
      <div class="ease-accordion-content">
        <p>Your content goes here.</p>
      </div>
    </div>
  </div>

</div>
```

## Why it fits EaseMotion CSS

- **Performance**: Leveraging CSS Grid and `transform/opacity` means animations run smoothly on the compositor thread.
- **Physics-based Feel**: The transition uses the `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve, ensuring the expansion feels organic rather than robotic.
- **No JS Overhead**: Proves that complex, premium UI patterns can be achieved purely with CSS.
