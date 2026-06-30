# CSS Current Color Variables Demo Feature

Submits layout utility architectures and context-aware inheritance sandboxes (`.ease-border-current`, `.ease-bg-current`, `.ease-fill-current`) under issue #15399.

## Functional Mechanics

- **The Problem:** Building components that need to support multiple brand accents or semantic color themes (like Info, Success, and Warning notifications) usually forces developers to write deeply repetitive utility modifiers. Overriding background blocks, border markers, and vector assets separately for every single hue variant results in duplicate stylesheets that complicate maintenance.
- **The Solution:** Text-linked style synchronization. The `.ease-*-current` utility pipeline leverages the browser-native `currentColor` variable value. Because `currentColor` automatically points straight to the closest cascade text color definition, buttons, SVGs, and rules synchronize their tones completely without rewriting multi-class declarations.

## Usage Layout Structure

```html
<div class="alert-banner-success" style="color: #10b981;">
  <svg class="ease-fill-current" viewBox="0 0 20 20"></svg>
  <button class="ease-border-current">Dismiss</button>
</div>
```

Closes #15399
