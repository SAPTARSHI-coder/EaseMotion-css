# ease-content-empty Utility

Clears `::before` and `::after` pseudo-element content by setting `content: ""`. Useful for resetting or overriding pseudo-element content from other components.

## Usage

```html
<div class="ease-content-empty">
  <!-- Any ::before/::after content from other classes is cleared -->
</div>
```

## Classes

| Class                | CSS Property                                  |
| -------------------- | --------------------------------------------- |
| `ease-content-empty` | ::before, ::after { content: "" !important; } |
