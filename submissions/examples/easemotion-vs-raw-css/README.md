# EaseMotion vs Raw CSS Keyframes

This guide compares writing animations manually using CSS keyframes versus using EaseMotion CSS utility classes.

## Benefits of EaseMotion

* Less code
* Faster development
* Better readability
* Easier maintenance

## Example

Raw CSS:

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.box {
  animation: fadeIn 1s ease;
}
```

EaseMotion:

```html
<div class="ease-fade-in"></div>
```

The same effect is achieved with significantly less code.
