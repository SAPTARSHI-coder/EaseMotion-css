# CSS Sticky Section Headers (`ease-sticky-headers`)

A pure CSS implementation of sticky headers for scrolling lists and sections, utilizing `position: sticky` and modern `backdrop-filter` for a premium glassmorphism effect.

## 🚀 Features & EaseMotion Showcase

- **Pure CSS**: Zero JavaScript required for the sticking mechanism.
- **Glassmorphism**: Uses `backdrop-filter: blur()` to create a beautiful frosted glass effect as content scrolls underneath.
- **Native Performance**: `position: sticky` runs off the main thread, ensuring buttery smooth 60fps scrolling.
- **Interactive List Items**: Pairs perfectly with standard CSS `:hover` animations for list items.

## 🛠️ Usage

This demo is self-contained. Open `demo.html` in your browser. All required CSS is inside `style.css`.

```html
<!-- The scroll container needs overflow-y: auto -->
<div class="scroll-container">
  
  <section class="list-section">
    <!-- The header gets the sticky class -->
    <h3 class="ease-sticky-header">A</h3>
    <ul>
      <li>Apple</li>
      <li>Apricot</li>
    </ul>
  </section>

</div>
