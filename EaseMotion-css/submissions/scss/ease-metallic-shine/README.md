# SCSS Metallic Shine Sweep (Hardware Accelerated)

Premium dark-mode buttons on platforms like Vercel or Linear often have a "metallic" glint or shine that sweeps across the text itself when hovered, making the interaction feel physical and expensive. 

Historically, this required rendering an SVG over the button or injecting complex `<span>` elements via JavaScript. This submission demonstrates how to achieve a flawless, hardware-accelerated metallic shine natively using SCSS and CSS gradients!

---

## 🏛️ The Architecture

### 1. The Transparent Text Engine
The key to this effect is realizing that the text itself is completely transparent! We use the CSS `color: transparent;` property on the button text.

### 2. The Angled Gradient
If the text is transparent, how do we see it? We apply a `linear-gradient` to the `background-image` of the element.
```css
background-image: linear-gradient(
    110deg, /* Angled slightly for a premium feel */
    var(--base-color) 40%, 
    var(--shine-color) 50%, 
    var(--base-color) 60%
);
```
This creates a background that is mostly the standard text color, but has a sharp, bright "stripe" of shine right in the middle!

### 3. The Clipping Mask
We don't want the background to fill the whole button, we only want it to appear *exactly where the text letters are*. We achieve this utilizing the powerful `-webkit-background-clip: text;` property! The text acts as a cookie-cutter for the background gradient.

### 4. The Sweep Animation
We make the `background-size: 200% 100%;`. This ensures the background is twice as wide as the button itself!
By default, we set `background-position: 100% 50%`, which hides the bright "shine" stripe way off to the left, outside the button bounds.
On hover, we simply transition the `background-position` to `0% 50%`. This physically drags the entire gradient map across the button, causing the bright shine stripe to sweep across the transparent text letters!

---

## 💻 Usage

Import the mixin into your SCSS file, and apply it to your button class. You can customize the base text color, the shine color, and the speed of the sweep!

```scss
@import 'metallic-shine';

.my-premium-button {
    @include ease-metallic-shine(
        $base-color: #94a3b8, /* Slate 400 */
        $shine-color: #ffffff, /* Pure White Shine */
        $animation-speed: 1.5s
    );
}
```

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`.
- **DOM Manipulations:** `0`. No SVG injections or span splitting.
- **GPU Compositor:** By animating `background-position`, modern browsers correctly handle the gradient interpolation natively.
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that strips the transition entirely, safely freezing the shine off-screen and keeping the text highly legible.
