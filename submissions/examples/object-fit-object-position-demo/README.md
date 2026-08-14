# CSS Object-Fit and Object-Position Demo

## Overview

This demo showcases how the CSS `object-fit` and `object-position` properties affect the display of images inside fixed-size containers.

It provides visual examples to help understand image scaling, cropping, and alignment behavior.

---

## Features

### Object-Fit Examples

The following `object-fit` values are demonstrated:

- `cover` – Fills the container while preserving aspect ratio, cropping excess content.
- `contain` – Displays the entire image while preserving aspect ratio, leaving empty space if necessary.
- `fill` – Stretches the image to fill the container, which may distort the aspect ratio.

### Object-Position Examples

The following `object-position` values are demonstrated:

- `top`
- `center`
- `bottom`
- `left`
- `right`

These examples show how image content can be aligned within a container when cropping occurs.

---

## Files

```text
object-fit-object-position-demo/
├── demo.html
├── style.css
├── image.png
├── portrait.png
└── README.md
```

---

## How to Use

1. Open `demo.html` in a web browser.
2. Compare the different `object-fit` examples.
3. Explore how `object-position` changes the visible area of an image inside a fixed-size container.

---

## Learning Outcomes

After viewing this demo, you will understand:

- How `object-fit` controls image scaling behavior.
- How `object-position` controls image alignment inside a container.
- The differences between `cover`, `contain`, and `fill`.
- When to use positioning values such as `top`, `bottom`, `left`, and `right`.

---

## Technologies Used

- HTML5
- CSS3

---

## Purpose

This example is intended as a learning resource for developers exploring modern CSS image handling techniques and responsive UI design.