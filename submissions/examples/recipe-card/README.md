# Recipe Card Component with 3D Flip & Checklist

An interactive food styling layout block pairing CSS 3D coordinate face transformation flips with interactive checklist progress markers.

## Functional Controls
- **3D Transform Face Matrices:** Utilizing backface-visibility overrides to hide card facets completely when rotated on the Y axis.
- **Dynamic Checkbox Checkboxes:** Clean native-input restyling paired with adjacent text-decoration strikethroughs.
- **Overflow Form Containers:** Independent scroll nodes handling variable content depths gracefully.

## Usage Layout Structure
```html
<div class="ease-recipe-container">
  <div class="ease-recipe-card-inner">
    <div class="ease-recipe-face ease-recipe-front"> ... </div>
    <div class="ease-recipe-face ease-recipe-back"> ... </div>
  </div>
</div>
```

Closes #12490
