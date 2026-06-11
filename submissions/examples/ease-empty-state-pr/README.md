# ease-empty-state-pr

Empty state component with icon, message, and call-to-action for when no data exists.

## Features

- Centered layout with large icon
- Title and description text
- Primary action button
- Optional secondary link
- Compact variant for tight spaces
- Bordered variant with dashed outline
- Dark theme variant

## Files

- `style.css` — the empty state styles
- `demo.html` — working demo with 4 variants
- `README.md` — usage documentation

## Usage

```html
&lt;div class="empty-state-pr"&gt;
  &lt;div class="empty-state-pr-icon"&gt;icon&lt;/div&gt;
  &lt;h3 class="empty-state-pr-title"&gt;No results found&lt;/h3&gt;
  &lt;p class="empty-state-pr-description"&gt;Description text here...&lt;/p&gt;
  &lt;a href="#" class="empty-state-pr-action"&gt;Action Button&lt;/a&gt;
  &lt;a href="#" class="empty-state-pr-secondary"&gt;Secondary link&lt;/a&gt;
&lt;/div&gt;