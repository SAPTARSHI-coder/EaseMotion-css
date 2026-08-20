# Mathematical Appendix: Taylor Series in SCSS

This document explains the complex mathematical approximations used in the `_ease-isometric-city.scss` generator.

## The Challenge
Historically, converting a 2D `[x,y]` grid into a 3D isometric perspective requires trigonometric functions:
- `screenX = (x - y) * cos(30deg)`
- `screenY = (x + y) * sin(30deg)`

While JavaScript has `Math.sin()` and `Math.cos()`, older SCSS compilers do not have universal support for `math.sin()`.

## The Taylor Series Solution
To ensure this generative mixin compiles anywhere, we implemented Maclaurin series (a specific type of Taylor series centered at 0) to calculate these values procedurally during the SCSS build step.

### Sine Approximation
The infinite series for Sine is:
`sin(x) = x - (x^3 / 3!) + (x^5 / 5!) - (x^7 / 7!) + ...`

In SCSS:
```scss
@function sin($angle) {
  $sin: 0;
  $angle: rad($angle); // Convert deg to rad
  @for $i from 0 through 10 { // 10 iterations provides massive precision
    $sin: $sin + pow(-1, $i) * pow($angle, (2 * $i + 1)) / fact(2 * $i + 1);
  }
  @return $sin;
}
```

### Cosine Approximation
The infinite series for Cosine is:
`cos(x) = 1 - (x^2 / 2!) + (x^4 / 4!) - (x^6 / 6!) + ...`

In SCSS:
```scss
@function cos($angle) {
  $cos: 0;
  $angle: rad($angle);
  @for $i from 0 through 10 {
    $cos: $cos + pow(-1, $i) * pow($angle, 2 * $i) / fact(2 * $i);
  }
  @return $cos;
}
```

By abstracting this heavy mathematical logic into reusable SCSS functions, we unlock the ability to generate flawless 3D geometry dynamically, entirely bypassing the need for JavaScript WebGL contexts.
