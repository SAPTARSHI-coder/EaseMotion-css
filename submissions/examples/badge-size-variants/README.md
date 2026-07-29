# Badge Size Utility Variants

An isolated sizing modification package expanding the core `.ease-badge` token framework. This update establishes uniform padding scales and proportional type scaling definitions (`.ease-badge-sm` and `.ease-badge-lg`) to suit high-density tables and layout blocks alike.

## Utility Roster API

- `.ease-badge-sm`: Triggers a tight `11px` micro-font layout layer with compressed padding geometry. Engineered exclusively for inline table rows, grid filters, or nested numbers inside card titles.
- `Default (Base)`: Runs standard `12px` typography. Represents the baseline option for global categorization and standard property labels.
- `.ease-badge-lg`: Triggers an expanded `14px` type frame bound by deep padding boundaries. Optimized for primary title flags, page header accents, and loud status indicators.

## Usage Layout Structure
```html

<span class="ease-badge ease-badge-sm">
  Table Meta
</span>

<span class="ease-badge ease-badge-lg">
  Hero Flag
</span>
```

Closes #13254
