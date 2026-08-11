# Hyphens Manual Utility

Introduces the custom typography line-wrapping constraint token (`.ease-hyphens-manual`) under issue #15193.

## Functional Mechanics

- **The Problem:** Aggressive automated browser word-breaking engines wrap text strings at unpredictable layout nodes, which can ruin reading symmetry and design consistency inside narrow text cards.
- **The Solution:** Restricts line-breaking targets. The `.ease-hyphens-manual` configuration instructs the text layout painter to clip words only where intentional soft hyphen components (`&shy;`) are placed in the HTML markup.

## Usage Layout Structure
```html
<p class="ease-hyphens-manual">
  This is an ultra&shy;long word block.
</p>
```

Closes #15193
