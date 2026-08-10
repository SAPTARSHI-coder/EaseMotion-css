# Visible Focus State for Breadcrumb Links

A small accessibility enhancement demonstrating a visible keyboard focus state for EaseMotion CSS breadcrumb links.

## Feature

The component adds a visible `:focus-visible` state to `.ease-breadcrumb-link`.

```css
.ease-breadcrumb-link:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
  text-decoration: underline;
}
```

This provides visual feedback when users navigate breadcrumb links with a keyboard.

## Usage

Use the standard EaseMotion breadcrumb structure:

```html
<nav class="ease-breadcrumb" aria-label="Breadcrumb">
  <ol class="ease-breadcrumb-list">
    <li class="ease-breadcrumb-item">
      <a href="/" class="ease-breadcrumb-link">
        Home
      </a>

      <span class="ease-breadcrumb-separator" aria-hidden="true">
        /
      </span>
    </li>

    <li class="ease-breadcrumb-item">
      <a href="/components" class="ease-breadcrumb-link">
        Components
      </a>

      <span class="ease-breadcrumb-separator" aria-hidden="true">
        /
      </span>
    </li>

    <li class="ease-breadcrumb-item">
      <span
        class="ease-breadcrumb-active"
        aria-current="page"
      >
        Breadcrumb
      </span>
    </li>
  </ol>
</nav>
```

## Accessibility

The `:focus-visible` pseudo-class provides a visible focus indicator when the breadcrumb link receives keyboard focus.

The enhancement:

- Improves keyboard navigation visibility
- Preserves existing hover behavior
- Does not require JavaScript
- Uses a visible outline with `outline-offset`
- Adds an underline to reinforce the focused state
- Does not remove or override the browser's focus indication
