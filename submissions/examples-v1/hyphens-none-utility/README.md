# Hyphens None Utility

Introduces the explicit word-breaking suppression utility token (`.ease-hyphens-none`) under issue #15177.

## Functional Mechanics

- **The Problem:** In certain strict UI layouts, automated browser syllable breaks inject awkward dash symbols (`-`) inside tight editorial headlines, names, or brand properties, disrupting readability and visual brand consistency.
- **The Solution:** Implements a strict text flow override. The `.ease-hyphens-none` class completely turns off both automatic dictionary-driven and explicit soft-hyphen (`&shy;`) breaking paths, keeping words completely whole.

## Usage Layout Structure
```html
<p class="ease-hyphens-none">
  BrandNameInternational text string lines...
</p>
```

Closes #15177
