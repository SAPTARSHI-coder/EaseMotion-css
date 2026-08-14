# Typographic Text Hyphenation Utilities

An isolated text utility package introducing layout manipulation classes (`.ease-hyphens-none`, `.ease-hyphens-manual`, and `.ease-hyphens-auto`) under issue #13838. These utilities give developers explicit control over line wrapping splits on word boundaries.

## Functional Mechanics

- **The Problem:** In narrow responsive columns, cards, or side sheets, exceptionally long words frequently overflow the bounds of their layout cards or force heavy text raggedness. 
- **The Solution:** Modifies word-wrap configurations using native browser engine properties. Applying `.ease-hyphens-auto` checks the element's container declaration (e.g., `lang="en"`) to break long strings gracefully at syllables using system-level dictionaries, injecting hyphens automatically.

## Usage Layout Structure
```html

<p lang="en" class="ease-hyphens-auto">
  Automating transformational responsive typography shifts fluidly.
</p>
```

Closes #13838
