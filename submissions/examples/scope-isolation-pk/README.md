# EaseMotion — `@scope` CSS Isolation Demo

Demonstrates how [`@scope`](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope) prevents CSS style leaks in component-based architectures.

## The Problem

Without `@scope`, a modal's CSS like `.modal-box button { ... }` styles **all** buttons inside the modal box, including deeply nested ones added by the application. This causes style leaks.

## The Fix

`@scope (.ease-modal) { ... }` limits selectors to direct children of `.ease-modal`. Nested content is untouched.

## Demo

Side-by-side comparison:
- **Left (Unscoped)**: Broad selectors — the "Unexpected Button" inside the modal box gets styled (red background)
- **Right (Scoped)**: `@scope (.modal-scope)` — the nested button remains unstyled

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Side-by-side unscoped vs scoped modals with leak indicators |
| `style.css` | Both modal variants, `@scope` rules, leak highlight styles |

## Browser Support

| Chrome | Firefox | Safari |
|--------|---------|--------|
| 118+ | Flagged (`layout.css.at-scope.enabled`) | Not supported |

A `@supports (at-rule(@scope))` fallback ensures non-scoped rules apply in unsupported browsers.

## Components to Scope

| Component | @scope Root | Why |
|-----------|------------|-----|
| Modal | `.ease-modal` | Inner buttons/inputs leak |
| Toast | `.ease-toast` | Notification content styles |
| Tooltip | `.ease-tooltip` | Rich HTML tooltips |
| Navbar | `.ease-navbar` | Dropdown menu conflicts |
| Sidebar | `.ease-sidebar` | Widget styles |

## Usage

Replace broad component selectors:

```css
/* Before — leaks */
.ease-modal .ease-modal-body { ... }

/* After — contained */
@scope (.ease-modal) {
  :scope { position: fixed; /* ... */ }
  .ease-modal-body { ... }
}
```
