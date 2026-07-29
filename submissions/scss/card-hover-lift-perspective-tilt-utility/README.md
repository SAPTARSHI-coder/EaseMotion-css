# Card Hover Lift & Perspective Tilt Utility

A reusable SCSS mixin for creating smooth hover lift and 3D perspective tilt effects for cards.

---

## Features

- Smooth hover animation
- Configurable lift distance
- Configurable X/Y tilt
- Custom transition duration
- Custom hover shadow
- Reusable SCSS mixin
- Ready-to-use utility class

---

## Folder Structure

```
scss-card-hover-lift-perspective-tilt-utility/
│
├── _card-hover-lift-perspective-tilt-utility.scss
└── README.md
```

---

## Mixin

```scss
@include card-hover-lift-perspective();
```

## Parameters

| Parameter | Default |
| ---------- | ------- |
| translateY | -10px |
| rotateX | 6deg |
| rotateY | 6deg |
| duration | .35s |
| shadow | 0 20px 40px rgba(0,0,0,.18) |

---

## Example

```scss
.product-card{
    @include card-hover-lift-perspective();
}
```

Custom example

```scss
.blog-card{
    @include card-hover-lift-perspective(
        -18px,
        10deg,
        10deg,
        .45s
    );
}
```

---

## Compiled CSS

```css
.em-card-hover-lift{
    transition:transform .35s ease,box-shadow .35s ease;
    transform-style:preserve-3d;
    will-change:transform;
}

.em-card-hover-lift:hover{
    transform:perspective(1000px)
        translateY(-10px)
        rotateX(6deg)
        rotateY(6deg);

    box-shadow:0 20px 40px rgba(0,0,0,.18);
}
```

---

## Browser Support

- Chrome
- Edge
- Firefox
- Safari

---

## License

MIT