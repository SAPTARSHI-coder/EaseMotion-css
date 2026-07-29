# Wide-Gamut Color Utilities

Relates to feature request **#41204**.

## 1. What does this do?

Provides examples and utility structures for utilizing modern CSS Color Level 4 and Level 5 specifications. Specifically, it demonstrates how to use the `display-p3` color space for richer, more vibrant colors, and the `oklch()` color space for perceptually uniform gradients.

## 2. Why is this useful for EaseMotion CSS?

For decades, the web has been restricted to the sRGB color space (`hex`, `rgb()`, `hsl()`). However, modern displays (like Apple's XDR displays, modern MacBook screens, and high-end smartphones) are capable of displaying a much wider gamut of colors—specifically the Display P3 color space.

By incorporating wide-gamut color utilities, EaseMotion CSS allows developers to build future-ready, incredibly vibrant UIs that take full advantage of modern hardware, while still maintaining graceful fallback compatibility for older monitors and browsers.

Additionally, standard RGB gradients often suffer from a "dead zone" where the middle of the gradient becomes muddy or grayish. Using `oklch()` interpolation solves this mathematically by keeping the gradient perceptually uniform.

## 3. How is it used?

**Display P3 with sRGB Fallbacks**
```css
/* 1. Provide the standard sRGB fallback first */
.ease-p3-card {
  background: #00ff00; 
}

/* 2. Override with the wider color gamut if supported */
@supports (color: color(display-p3 1 1 1)) {
  .ease-p3-card {
    /* A green that is physically impossible to display in sRGB */
    background: color(display-p3 0 1 0); 
  }
}
```

**Perceptually Uniform Gradients**
```css
.ease-oklch-gradient {
  /* Using 'in oklch' ensures the transition between red and blue doesn't get muddy */
  background: linear-gradient(
    to right in oklch,
    oklch(60% 0.3 20),
    oklch(60% 0.3 260)
  );
}
```

## 4. Hardware Requirements for Testing
To actually *see* the difference in the `display-p3` demo, you must view the `demo.html` file on a wide-gamut monitor (like a modern MacBook display) using a compatible browser (Safari, or Chrome 111+ / Firefox 113+). If viewed on a standard sRGB monitor, the browser will gracefully clamp the color, and the two boxes will look identical.
