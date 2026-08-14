# CSS Container Query Wrapper Classes

Reusable SCSS utilities for creating CSS Container Query wrappers and responsive container-based layouts.

## Features

- Reusable container wrapper mixin
- Named container support
- Min-width container queries
- Max-width container queries
- Between-range container queries
- Easy breakpoint configuration
- Clean and reusable SCSS

---

## Breakpoints

| Name | Width |
|------|------:|
| xs | 320px |
| sm | 480px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |

---

## Usage

### Container

```scss
.wrapper {
  @include container-wrapper(card);
}
```

### Min Width

```scss
.card {

  @include container-up(md) {
    padding: 2rem;
  }

}
```

### Max Width

```scss
.card {

  @include container-down(sm) {
    padding: 1rem;
  }

}
```

### Between

```scss
.card {

  @include container-between(sm, lg) {
    gap: 2rem;
  }

}
```

---

## Files

```
scss-css-container-query-wrapper-classes/
│
├── _css-container-query-wrapper-classes.scss
└── README.md
```

---

Built for EaseMotion CSS.