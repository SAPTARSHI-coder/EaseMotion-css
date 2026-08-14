# Animated Switch Toggle (`ease-switch-xyz`)

A zero-dependency, CSS-only animated switch/toggle component designed for the **EaseMotion CSS** framework. Perfect for boolean settings, preferences, and on/off states with smooth sliding animations.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using native checkbox input.
- **Animation-First**: Smooth sliding knob, stretch effects on hover/active, and color transitions using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-normal`, `--ease-out`, and color tokens for seamless theming.
- **Color Variants**: Primary, success, error, and warning colors.
- **Size Variants**: Small, default, and large sizes.
- **Icon Support**: Optional icons that appear when toggled (e.g., sun/moon for dark mode).
- **Stretch Effect**: Knob stretches on hover and active states for tactile feedback.
- **Settings Panel**: Built-in styling for settings panels with title and description.
- **Disabled State**: Proper disabled styling and behavior.
- **Accessible**: Proper label associations and focus states.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Switch
```html
<label class="ease-switch-xyz">
  <input type="checkbox" class="ease-switch-xyz-input">
  <span class="ease-switch-xyz-slider"></span>
  <span class="ease-switch-xyz-label">Enable notifications</span>
</label>