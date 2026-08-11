# Hyphens Auto Utility

Introduces the browser-native automated typography word-breaking utility token (`.ease-hyphens-auto`) under issue #15179.

## Functional Mechanics

- **The Problem:** When strings populate exceptionally narrow design containers (like sidebars, chat bubbles, or multi-column grids), long words often break text containment margins or leave massive, jagged whitespace gaps along the right boundary wall.
- **The Solution:** Leverages user-agent dictionary lookups. The `.ease-hyphens-auto` token commands the browser engine to dynamically evaluate syllable nodes, injecting localized hyphen markers and wrapping text fragments cleanly at line ends based on the document's `lang` property.

## Usage Layout Structure
```html
<p class="ease-hyphens-auto" lang="en">
  This container processes long words dynamically...
</p>
```

Closes #15179
