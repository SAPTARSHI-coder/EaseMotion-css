# SVG "Gooey" Liquid Merging Navigation

When two circular UI elements get close to each other, standard DOM rendering keeps their edges sharp and distinct. However, in premium UI design (often seen in highly polished native iOS and Android apps), elements can smoothly "melt" or "merge" together like liquid droplets via surface tension.

This "gooey" effect is notoriously difficult to achieve on the web. It is impossible to achieve with standard CSS `box-shadow` or `border-radius`. 

This highly advanced submission utilizes **Native SVG Filters injected directly into the HTML DOM** to manipulate the browser's raw rendering matrix, forcing a liquid physics simulation on standard HTML `<div>` elements.

---

## 🧪 The SVG Matrix Mathematics (How it works)

To achieve the liquid effect, we do not use JavaScript physics libraries. Instead, we define a hidden `<svg>` element containing a `<filter>` matrix, and apply it to a parent container via `filter: url('#goo')`.

The magic happens in three mathematical steps executed by the GPU:

### 1. The Gaussian Blur (`<feGaussianBlur>`)
First, we apply an aggressive blur to the entire parent container. 
```xml
<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
```
By blurring the elements, we physically expand their boundaries using a semi-transparent gradient. When two blurred elements get near each other, their blurred outer boundaries overlap.

### 2. The Alpha Threshold Matrix (`<feColorMatrix>`)
This is the core of the effect. We take the blurred image and aggressively multiply the alpha (transparency) channel.
```xml
<feColorMatrix in="blur" mode="matrix" values="
    1 0 0 0 0  
    0 1 0 0 0  
    0 0 1 0 0  
    0 0 0 19 -9" result="goo" />
```
* **The R, G, and B rows** are set to standard `1`, meaning we don't change the color of the elements.
* **The Alpha row** (`0 0 0 19 -9`) is the secret. It multiplies the alpha value of every pixel by 19, and subtracts 9. 
* **The Result:** The semi-transparent blurred pixels are mathematically forced to become either fully solid (opacity 1) or fully transparent (opacity 0), removing the blur entirely. Because the blurs of the two nearby elements overlapped, their *combined* alpha crosses this harsh threshold, rendering a solid "bridge" between them!

### 3. The Composite Pass (`<feComposite>`)
Because the color matrix destroys detail, we use `<feComposite>` to redraw the original, un-blurred icons and text directly on top of the "goo", ensuring the UI remains perfectly sharp while the backgrounds melt.

---

## 🎨 Included Demos

This submission provides two production-ready implementations of the effect:

### 1. The Liquid Navbar
A standard bottom-navigation bar. Instead of highlighting the active tab instantly, a solid color blob physically slides behind the icons. As it passes an icon, it melts and detaches from it using the SVG matrix. (Controlled purely via CSS `:hover` sibling combinators).

### 2. The Gooey Floating Action Button (FAB)
A primary circular action button. When clicked (using the CSS hidden checkbox hack), three sub-action buttons physically "shoot out" from the center. As they leave the radius of the main button, the SVG matrix forces them to stretch and tear away like a drop of water detaching from a faucet.

---

## ♿ Accessibility & Performance

SVG filters are executed directly on the GPU, making this significantly more performant than attempting to draw liquid physics using HTML Canvas and JavaScript requestAnimationFrame loops. 

However, manipulating pixel matrices can cause visual discomfort for some users. The included `style.css` provides a robust `@media (prefers-reduced-motion: reduce)` block that entirely decouples the `filter: url('#goo')` from the DOM, degrading the UI gracefully to standard, sharp-edged movements.

---

## 💻 Usage Requirements

For this effect to work in your own projects:
1. The hidden `<svg>` definition block must exist somewhere in the HTML body.
2. The CSS `filter: url('#goo')` must be applied to the **parent container**.
3. The child elements you want to merge must have a solid `background-color`. (Transparent borders will not merge).
