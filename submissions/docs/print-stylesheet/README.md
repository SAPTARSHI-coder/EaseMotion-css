# Print Stylesheet

This submission fixes Issue #42624 by adding a basic `@media print` stylesheet.  
It ensures printed pages don’t freeze animations mid-state and removes unnecessary UI elements.

## Features
- Hides navigation bars and buttons when printing
- Disables animations and transitions
- Forces clean black-on-white output

## Usage
Include in your CSS:

```css
@media print {
  .nav, .ease-btn { display: none; }
  * { animation: none; transition: none; }
}
