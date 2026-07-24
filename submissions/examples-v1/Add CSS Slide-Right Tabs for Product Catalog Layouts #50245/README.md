# CSS Slide-Right Tabs for Product Catalog Layouts

A pure CSS tab component featuring a smooth, elegant "Slide-Right" interaction transition perfectly suited for modern Product Catalog interfaces and eCommerce item detail pages.

## Features

- **Pure CSS functionality**: Completely avoids JavaScript by utilizing the native `<input type="radio">` and CSS `~` sibling combinators to track and display active states.
- **Product Catalog Aesthetic**: Inspired by premium watch and fashion eCommerce layouts, combining high-quality imagery with serif typography (`Playfair Display`) and clean, spacious data panels.
- **Slide-Right Transition**: Inactive panels are shifted slightly to the left (`translateX(-40px)`) and hidden. Upon selection, they gracefully slide right into their natural position while fading in, creating a very polished and deliberate reveal.
- **Fully Responsive**: The horizontal split layout elegantly collapses into a vertical stack on mobile devices, ensuring product imagery and tabs remain readable and accessible.
- **Keyboard Accessible**: All tab labels (`<label>`) have `tabindex="0"`, making it possible for users to navigate directly to the tabs using the `Tab` key.

## Customization

You can customize the timing, easing, and the slide distance via the CSS custom properties located in `:root`:

```css
:root {
  /* Interaction Variables */
  --tab-transition-duration: 0.5s;
  --tab-transition-easing: cubic-bezier(0.16, 1, 0.3, 1);
  --tab-slide-offset: -40px; 
}
```

- `--tab-slide-offset`: Change this to a positive number (e.g., `40px`) if you want the panels to slide in from the *right* instead of the *left*.
- `--tab-transition-duration`: Adjust the speed of the slide and fade.

## How It Works

- The `.tab-panel` elements are placed absolutely over one another.
- They begin with `transform: translateX(var(--tab-slide-offset))` and `opacity: 0`.
- When a user clicks a label, the corresponding hidden radio button becomes `:checked`.
- The CSS selector `#tab-id:checked ~ .tabs-content #panel-id` triggers, overriding the transform to `translateX(0)` and opacity to `1`.
- The browser animates this transition smoothly via the defined `transition` property on the panel.

## Usage Instructions

1. Open `demo.html` in your browser.
2. Observe the premium product layout.
3. Click on the "Specifications" or "Reviews" tabs to see the content smoothly slide right and fade into view.
4. Try using the `Tab` key on your keyboard to navigate the tabs.
