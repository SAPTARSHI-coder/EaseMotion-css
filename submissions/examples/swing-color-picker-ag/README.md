# Swing Color Picker

An interactive cockpit color picker featuring hanging swatches and an elastic pendulum swing, inspired by Neon design patterns.

## 1. What does this do?

This component provides a pure CSS color picker that displays glowing neon selections, updating a preview orb and HUD hex display, with swatches hanging on wires that swing elastically back and forth (like a sign in the wind) when hovered.

## 2. How is it used?

Link to both `easemotion.css` and `style.css`, then construct the HTML with the following pattern inside a `<form>` to enable zero-JS state resets:

```html
<form action="javascript:void(0);">
  <!-- Radio State Selectors -->
  <input
    type="radio"
    name="neon-color"
    id="color-cyan-ag"
    checked
    style="display: none;"
  />
  <input
    type="radio"
    name="neon-color"
    id="color-pink-ag"
    style="display: none;"
  />
  <input
    type="radio"
    name="neon-color"
    id="color-green-ag"
    style="display: none;"
  />

  <!-- Console Board Panel -->
  <div class="picker-console-ag">
    <!-- Swatches Dock -->
    <div class="swatches-rail-ag">
      <div class="swatch-holder-ag">
        <div class="swatch-wire-ag"></div>
        <label
          for="color-cyan-ag"
          class="swatch-capsule-ag swatch-cyan-ag"
          tabindex="0"
          role="button"
        ></label>
      </div>
      <!-- Add other color labels -->
    </div>

    <!-- Preview Chamber -->
    <div class="preview-chamber-ag">
      <div class="preview-orb-ag"></div>
      <div class="hex-display-ag"></div>
      <button type="button" class="btn-copy-ag">Copy HEX</button>
    </div>
  </div>
</form>
```

---

## 3. Why is it useful?

Color selection tools are heavily requested UI blocks for graphic designers, custom dashboards, and user personalization panels. By styling them in rich high-contrast Neon glows and leveraging radio buttons for state selection, this color picker executes all visual updates and swinging animations in pure CSS, aligning with EaseMotion's zero-dependency philosophy and lightweight rendering performance goals.
