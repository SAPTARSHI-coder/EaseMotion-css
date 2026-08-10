# CSS Shimmer-Sweep Tabs for E-Commerce Checkout Layouts

A modern, lightweight, pure CSS/HTML showcase example demonstrating a dynamic and responsive checkout tab interface. This layout uses an advanced CSS-only technique to handle tab switching natively, coupled with a premium "Shimmer-Sweep" pill indicator.

## Features

- **Pure CSS Tabs State**: Uses standard `input[type="radio"]` elements combined with the general sibling combinator `~` to manage complex active/inactive states without any JavaScript.
- **Shimmer-Sweep Indicator**: A highly polished, sliding pill indicator that follows the active tab and features an infinitely looping, elegant CSS shimmer sweep using pseudo-elements.
- **Fluid Spring Animations**: Utilizes custom `cubic-bezier` timing functions for bouncy, premium-feeling transitions between states.
- **Fully Responsive**: Adapts seamlessly to mobile viewports using CSS Flexbox.
- **Accessibility Friendly**: Includes `prefers-reduced-motion` queries to disable animations and transitions for users who are sensitive to motion.

## File Structure

```
Add CSS Shimmer-Sweep Tabs for E-Commerce Checkout Layouts  #62451/
├── demo.html     # Semantic HTML5 layout and dummy form elements
├── style.css     # The pure CSS styling, layouts, and animations
└── README.md     # Documentation and usage guide (this file)
```

## How It Works

### The CSS-Only State Trick
The tabs logic is driven by hidden radio buttons at the root of the `.tabs` container. 
```html
<input type="radio" id="tab1" name="tab-control" checked>
<!-- ... -->
<label for="tab1">Shipping</label>
```
When a user clicks a label, its corresponding radio button becomes `:checked`. We then conditionally target elements using CSS:
```css
#tab2:checked ~ .content .content-section:nth-child(2) {
  display: block;
}
```

### The Shimmer-Sweep Math
The active indicator uses a percentage-based layout paired with exact `translateX` transformations to perfectly glide across the tabs.
- The indicator is given a width of `calc((100% - 0.75rem) / 3)`
- Clicking Tab 2 applies `transform: translateX(100%)`. Because percentages in transforms resolve against the element's *own* width, translating by exactly 100% moves the pill perfectly over one slot without needing JavaScript calculations.

## CSS Custom Properties Available

You can easily theme the checkout layout by overriding the root variables in `style.css`:

```css
:root {
  --primary-color: #6366f1;       /* Main brand color */
  --primary-glow: rgba(99, 102, 241, 0.4); /* Glow used on inputs */
  
  --bg-color: #f8fafc;            /* Body background */
  --surface-color: #ffffff;       /* Card background */
  --tab-bg: #f1f5f9;              /* Tab rail background */
  
  --text-primary: #0f172a;        /* Headings and labels */
  --text-secondary: #64748b;      /* Muted text */
  
  --transition-smooth: 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); /* Tab glide speed */
}
```

## Usage

1. Open `demo.html` in any modern web browser to preview the showcase.
2. Integrate into your project by copying the `.tabs` HTML structure and the accompanying CSS. No JS configuration is needed.
