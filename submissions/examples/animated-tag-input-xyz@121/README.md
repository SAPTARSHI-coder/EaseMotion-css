# Animated Tag Input Component (`ease-tag-input-xyz`)

A zero-dependency, CSS-only animated tag/chip input component designed for the **EaseMotion CSS** framework. Perfect for entering multiple tags, categories, or items with smooth chip animations and autocomplete.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using flexbox and CSS animations.
- **Animation-First**: Smooth chip entry animations, removal effects, input focus transitions, and autocomplete dropdown using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Basic input, with autocomplete, color variants, read-only display, and compact size.
- **Chip Animations**: Tags animate in with scale and fade effects.
- **Color Variants**: Primary, success, warning, and error color schemes.
- **Autocomplete Dropdown**: Smooth slide-in dropdown with staggered option animations.
- **Remove Buttons**: Animated remove buttons with hover effects.
- **Read-only Mode**: Display-only tag list without input.
- **Compact Size**: Smaller variant for space-constrained UIs.
- **Accessible**: Proper label associations and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Tag Input
```html
<label class="ease-tag-input-xyz-label">Skills</label>
<div class="ease-tag-input-xyz">
  <div class="ease-tag-input-xyz-tags">
    <span class="ease-tag-input-xyz-tag">
      <span>JavaScript</span>
      <button class="ease-tag-input-xyz-remove" aria-label="Remove">×</button>
    </span>
    <span class="ease-tag-input-xyz-tag">
      <span>React</span>
      <button class="ease-tag-input-xyz-remove" aria-label="Remove">×</button>
    </span>
  </div>
  <input type="text" class="ease-tag-input-xyz-input" placeholder="Add a skill...">
</div>