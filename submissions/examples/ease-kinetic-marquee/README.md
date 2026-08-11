# CSS Kinetic Typography Marquee (Hardware Accelerated)

Massive, outline-only kinetic typography that smoothly scrolls across the background of a section is incredibly popular on premium agency websites.

Historically, to create an infinite text marquee, developers reached for JavaScript plugins to constantly clone DOM nodes, monitor scroll positions, and run `requestAnimationFrame` loops. This causes unnecessary main-thread blocking.

This submission demonstrates how to achieve a flawless, hardware-accelerated infinite text loop utilizing purely native CSS, structural duplication, and `-webkit-text-stroke`.

---

## 🏛️ The Architecture

### 1. The DOM Structure
To create a seamless infinite loop without JavaScript, we must duplicate our exact block of text twice within the scrolling track.
```html
<div class="marquee-track">
    <!-- Block 1 -->
    <div class="marquee-content">...</div>
    
    <!-- Block 2 (Exact Duplicate) -->
    <div class="marquee-content" aria-hidden="true">...</div>
</div>
```
*Note: We apply `aria-hidden="true"` to the duplicate block so Screen Readers don't read the exact same text twice to visually impaired users!*

### 2. The CSS Loop Magic
We set the parent track to `display: flex; width: max-content;` so the two blocks sit perfectly side-by-side horizontally.
We then apply an infinite CSS animation to the track:
```css
@keyframes ease-marquee-scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
}
```
**Why `-50%`?**
Because the track contains exactly two identical blocks! When the track translates by exactly `-50%` of its total width, the SECOND block is now sitting exactly in the physical position where the FIRST block started! 
At that exact millisecond, the animation instantly resets back to `0`. Because Block 1 and Block 2 look identical, the snap back to `0` is completely invisible to the human eye, creating the illusion of an infinite scrolling loop!

### 3. The Premium Typography
To achieve the premium agency "outline" typography look, we utilize the `-webkit-text-stroke` property. We make the actual text color completely transparent, and apply a subtle white stroke to the edges of the font!
```css
.outline-text {
    color: transparent;
    -webkit-text-stroke: 2px rgba(255,255,255,0.3);
}
```

---

## 💻 Usage

Copy the HTML structure and the CSS keyframes. You can place any text, images, or cards inside the `.marquee-content` blocks, as long as you duplicate it perfectly!

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`. Completely bypasses GSAP, Framer Motion, and legacy jQuery marquee plugins.
- **Main Thread Blocking:** `0ms`. 
- **GPU Compositor:** By animating `transform: translateX()`, the browser hands the animation entirely over to the GPU compositor thread, resulting in a flawless 60fps loop that doesn't trigger Layout or Paint recalculations!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that kills the infinite scroll animation and applies `overflow-x: auto`, allowing them to safely and manually swipe to read the rest of the text.
