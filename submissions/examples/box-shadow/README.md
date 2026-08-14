# Box Shadow Utilities

CSS utility classes for the `box-shadow` property.

## Usage

```html
<div class="shadow-none">...</div>
```

## Classes

- `.shadow-none` — box-shadow: none;
- `.shadow-sm` — box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
- `.shadow` — box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
- `.shadow-md` — box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
- `.shadow-lg` — box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
- `.shadow-xl` — box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
- `.shadow-2xl` — box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
- `.shadow-inner` — box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.06);
- `.shadow-outline` — box-shadow: 0 0 0 3px rgba(99,102,241,0.5);
- `.shadow-primary` — box-shadow: 0 4px 14px 0 rgba(99,102,241,0.4);
- `.shadow-danger` — box-shadow: 0 4px 14px 0 rgba(239,68,68,0.4);
- `.shadow-success` — box-shadow: 0 4px 14px 0 rgba(16,185,129,0.4);

## Responsive

- `sm:` prefix for 640px+
- `lg:` prefix for 1024px+

## Dark Mode

- `dark:` prefix for `prefers-color-scheme: dark`
## Reduced Motion

- `motion-safe:` prefix for `prefers-reduced-motion: reduce`
