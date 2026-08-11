# CSS Hamburger Variants

A collection of five pure-CSS animated hamburger menu icons designed to enhance standard mobile navigation layouts. The components rely on a semantic HTML structure and CSS state pseudo-classes (`:checked`) to trigger complex, multi-stage keyframe-like transitions without requiring any JavaScript.

## 📋 Mandatory Questions

### 1. What does this do?

This component provides five distinct animations for a standard three-line hamburger menu:
1. **Spin**: The entire icon spins 180 degrees while the inner lines transform into an 'X'.
2. **Collapse**: The middle line disappears instantly while the top and bottom lines collapse inward to cross.
3. **Arrow Left**: The outer lines compress and rotate to form a directional back arrow.
4. **Minus**: The top and bottom lines collapse directly into the center line, forming a single minus sign.
5. **Elastic**: The lines stretch and bounce using complex `cubic-bezier` timing functions before forming an 'X'.

### 2. How is it used?

The implementation uses the "Checkbox Hack". A hidden `<input type="checkbox">` is wrapped inside a `<label>`. When the user taps the hamburger, the checkbox state changes. The CSS then uses the general sibling combinator (`~`) to apply the active animation states to the lines.

```html
<!-- Example: Spin Hamburger -->
<label class="hamburger hamburger-spin" aria-label="Toggle Menu">
  <input type="checkbox">
  <span class="hamburger-box">
    <!-- The lines are rendered via ::before and ::after on the inner span -->
    <span class="hamburger-inner"></span>
  </span>
</label>
```

**Customization via CSS Properties:**
You can adjust the sizing and colors via root variables:

```css
:root {
  --hamburger-layer-width: 32px;
  --hamburger-layer-height: 3px;
  --hamburger-layer-spacing: 7px;
  --hamburger-layer-color: #0f172a;
  --hamburger-layer-border-radius: 4px;
}
```

### 3. Why is it useful?

Mobile navigation toggles are one of the most frequently interacted-with UI elements on the web. Providing satisfying, high-framerate animations for these toggles significantly elevates the perceived quality of a website. Historically, these required JavaScript event listeners to toggle `.is-active` classes. By relying entirely on the native HTML checkbox state, these components provide zero-latency interaction that runs entirely on the GPU. Furthermore, if `prefers-reduced-motion` is enabled, the animations are instantly neutralized, swapping states instantly to adhere to accessibility standards.
