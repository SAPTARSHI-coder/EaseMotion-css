# Shimmer Sweep Tabs - Accessible Web Layouts

A pure CSS animated tab component demonstrating that dynamic visual interactions ("Shimmer Sweep") can coexist with strict web accessibility guidelines. Styled for Civic Portals, Government websites, and high-legibility applications.

## Features

- **Pure CSS Interaction:** State is maintained using the accessible HTML radio button pattern (`:checked` paired with `~` general sibling selectors). This ensures native keyboard navigation works flawlessly without complex JavaScript event listeners.
- **High Contrast Shimmer Sweep:** The sweep effect is adapted for maximum clarity. Clicking a tab causes a solid black background to sweep in, instantly inverting the text color to white. A high-contrast white shimmer then passes over the active tab to draw attention.
- **Strict Accessibility (a11y) Implementation:**
  - **Focus States:** Implements a thick, high-contrast blue (`#005fcc`, WCAG AAA) focus ring (`outline`) with an offset to guarantee visibility across all interactions.
  - **Typography & Scale:** Uses generous base font sizing (18px) and the highly legible `Atkinson Hyperlegible` font.
  - **Layout:** The tab navigation flex container is set to `flex-wrap: wrap;` ensuring that users who zoom their browsers to 400% won't lose access to off-screen tabs.
  - **Borders:** Relies on stark 3px solid black borders rather than subtle box-shadows to define structural elements.
- **Reduced Motion Support:** CRITICALLY includes a `@media (prefers-reduced-motion: reduce)` block. If a user has requested reduced motion in their OS, the sweeping transitions are instantly disabled, and the continuous shimmer animation is completely removed, resulting in a safe, static color inversion.
- **Semantic HTML Mockup:** The demo page includes a "Skip to main content" link, proper `aria-labels`, structural `<header>` and `<main>` tags, and accessible action cards.

## Customization

You can adjust the component while maintaining accessibility by modifying the CSS variables found at the top of `style.css`. Always verify contrast ratios (aim for at least 4.5:1, preferably 7:1) when altering colors:

```css
:root {
  /* Accessible High-Contrast Palette */
  --bg-page: #ffffff;
  --text-main: #111111; 
  --text-inverse: #ffffff;
  
  --border-color: #111111;
  
  /* Focus States must be explicitly obvious */
  --focus-ring-color: #005fcc; /* High contrast blue */
  
  /* Typography */
  --font-main: 'Atkinson Hyperlegible', sans-serif;
  
  /* Animation Timings */
  --sweep-speed: 0.3s;
}
```

## How to Use

1. Copy the HTML structure from `demo.html`. Pay close attention to the `aria-label` attributes on navigation elements. Keep the hidden radio inputs (`.tab-input.sr-only`) adjacent to the `.tabs-nav`.
2. Include the `style.css` stylesheet in your project.
3. Replace the mock Public Services content within the `.tab-panel` wrappers with your actual web content, ensuring your internal layout also follows strict a11y guidelines.

```html
<!-- Core Structure Example -->
<div class="tabs-container">
    <input type="radio" id="tab-health" name="a11y-tabs" class="tab-input sr-only" checked>
    <input type="radio" id="tab-housing" name="a11y-tabs" class="tab-input sr-only">
    
    <nav class="tabs-nav" aria-label="Service Categories">
        <label for="tab-health" class="tab-label">Health & Care</label>
        <label for="tab-housing" class="tab-label">Housing</label>
    </nav>
    
    <div class="tabs-content">
        <div class="tab-panel panel-health" role="region" aria-label="Health and Care Services">...</div>
        <div class="tab-panel panel-housing" role="region" aria-label="Housing Services">...</div>
    </div>
</div>
```
