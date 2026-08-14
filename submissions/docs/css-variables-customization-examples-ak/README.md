# CSS Variables Customization Examples

This documentation example demonstrates how to customize EaseMotion CSS using CSS custom properties.

## Folder Structure

```text
css-variables-customization-examples/
├── README.md
├── demo.html
└── style.css
```

## Variables Demonstrated

| Variable | Purpose |
|-----------|---------|
| `--ease-color-primary` | Primary theme colour |
| `--ease-speed-fast` | Fast transition duration |
| `--ease-speed-medium` | Medium animation duration |
| `--ease-radius-md` | Medium border radius |
| `--ease-shadow-md` | Medium shadow |

## Example

```css
:root{

    --ease-color-primary:#4f46e5;

    --ease-speed-fast:.25s;

    --ease-speed-medium:.5s;

    --ease-radius-md:16px;

    --ease-shadow-md:0 12px 30px rgba(0,0,0,.15);

}
```

## Overriding Variables

```css
:root{

    --ease-color-primary:#0f766e;

    --ease-radius-md:24px;

}
```

## Benefits

- Easy theme customization
- Consistent design system
- Reusable styles
- Beginner-friendly documentation
- No changes to framework files

## How to Run

Open `demo.html` directly in your browser.

No build tools or dependencies are required.