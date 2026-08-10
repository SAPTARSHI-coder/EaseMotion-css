# Animated Table Component (`ease-table-xyz`)

A zero-dependency, CSS-only animated table component designed for the **EaseMotion CSS** framework. Perfect for displaying data with smooth hover effects, sortable headers, and selection states.

> **Note:** The `xyz` suffix is my unique contributor identifier as per the repository's Contribution Policy Update to prevent naming conflicts.

## ✨ Features
- **Zero JavaScript**: Pure CSS implementation using native table elements.
- **Animation-First**: Smooth row hover effects, sortable header transitions, and badge fade-in animations using EaseMotion timing tokens.
- **Design Token Compatible**: Leverages `--ease-duration-fast`, `--ease-out`, and color tokens for seamless theming.
- **Multiple Variants**: Basic, striped, sortable, selectable, compact, and bordered styles.
- **Sortable Headers**: Visual indicators for ascending/descending sort states.
- **Selectable Rows**: Checkbox-based row selection with visual feedback.
- **Status Badges**: Animated badges for status indicators (success, error, warning, info).
- **Responsive**: Horizontal scroll wrapper for mobile devices.
- **Accessible**: Proper semantic HTML structure.
- **Reduced Motion Safe**: Respects `prefers-reduced-motion` OS settings.

## 🚀 Usage

### Basic Table
```html
<div class="ease-table-xyz-wrapper">
  <table class="ease-table-xyz">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john@example.com</td>
        <td>Admin</td>
      </tr>
    </tbody>
  </table>
</div>