# Column Count 3 Utility

Introduces the core multi-column splitting layout configuration token (`.ease-cols-3`) under issue #15197.

## Functional Mechanics

- **The Problem:** Breaking continuous reading materials or checklists across distinct vertical column containers often requires adding extra layout wrappers or complex flex calculations.
- **The Solution:** Leverages native engine column splitting. The `.ease-cols-3` token forces contents inside to flow seamlessly into an optimized 3-column editorial grid template.

## Usage Layout Structure
```html
<div class="ease-cols-3">
  <p>Continuous flowing body text...</p>
</div>
```

Closes #15197
