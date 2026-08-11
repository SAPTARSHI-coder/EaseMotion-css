# CSS Infinite Scrolling Columns (Hardware Accelerated)

A hero section featuring vertical columns of images. Some columns scroll up infinitely, while others scroll down infinitely, creating a massive sense of scale (popularized by premium design agency portfolios).

Historically, this required importing massive JavaScript scroll-hijacking libraries like Locomotive Scroll or GSAP ScrollTrigger to monitor wheel events, apply virtual physics, and constantly translate DOM nodes. This submission demonstrates how to bypass JS entirely, utilizing CSS structural duplication and `-50% translateY` keyframe loops to build a flawless, hardware-accelerated infinite background!

---

## 🏛️ The Architecture

### 1. The DOM Structure
To create a seamless infinite vertical loop without JavaScript, we must duplicate our exact block of images twice within the scrolling track.
```html
<div class="column-track">
    <!-- Block 1 (The Images) -->
    <div class="column-content">...</div>
    
    <!-- Block 2 (Exact Duplicate) -->
    <div class="column-content" aria-hidden="true">...</div>
</div>
```
*Note: We apply `aria-hidden="true"` to the duplicate block so Screen Readers don't read the exact same alt tags twice to visually impaired users!*

### 2. The CSS Loop Magic
We set the parent track to `display: flex; flex-direction: column; height: max-content;` so the two blocks stack perfectly on top of each other.
We then apply an infinite CSS animation to the track:
```css
@keyframes ease-scroll-up {
    from { transform: translateY(0); }
    to { transform: translateY(-50%); }
}
```
**Why `-50%`?**
Because the track contains exactly two identical blocks! When the track translates vertically by exactly `-50%` of its total height, the SECOND block is now sitting exactly in the physical position where the FIRST block started! 
At that exact millisecond, the animation instantly resets back to `0`. Because Block 1 and Block 2 look identical, the snap back to `0` is completely invisible to the human eye, creating the illusion of an infinite scrolling column!

### 3. Creating Opposing Parallax
To make the grid look incredibly dynamic, we don't just scroll them all up. We make the middle column scroll DOWN.
To scroll an identical structure downwards infinitely, we simply invert the keyframes!
```css
@keyframes ease-scroll-down {
    from { transform: translateY(-50%); } /* Start at the top of Block 2 */
    to { transform: translateY(0); }      /* Scroll down to Block 1 */
}
```

### 4. Adjusting Speeds
By applying slightly different `animation-duration` values to each column (e.g., `25s`, `35s`, `45s`), we create a sense of true 3D parallax depth, as some columns appear to move faster (closer to the camera) than others!

---

## 💻 Usage

Copy the HTML structure and the CSS keyframes. You can place any amount of images or cards inside the `.column-content` blocks, as long as you duplicate it perfectly!

---

## 🚀 Performance Benchmarks

- **JavaScript Payload:** `0 KB`. Completely bypasses Locomotive Scroll and GSAP!
- **Main Thread Blocking:** `0ms`. 
- **GPU Compositor:** By animating `transform: translateY()`, the browser hands the animation entirely over to the GPU compositor thread, resulting in a flawless 60fps loop that doesn't trigger Layout or Paint recalculations!
- **Accessibility:** Users with `prefers-reduced-motion` enabled are protected by a built-in media query that kills the infinite scroll animations and re-enables native `overflow-y: auto`, allowing them to safely and manually scroll down the page.
