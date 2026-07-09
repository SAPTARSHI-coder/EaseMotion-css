# Animation Iteration Guide

## Purpose

This submission demonstrates how to customize the number of animation iterations using the CSS custom property:

```css
:root{
    --ease-animation-iterations: infinite;
}
```

## Examples

Run once

```css
:root{
    --ease-animation-iterations: 1;
}
```

Run three times

```css
:root{
    --ease-animation-iterations: 3;
}
```

Loop forever

```css
:root{
    --ease-animation-iterations: infinite;
}
```

## Files

- demo.html
- style.css

## Preview

Open `demo.html` in your browser.