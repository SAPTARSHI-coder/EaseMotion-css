# Modern CSS Accordion Component

A lightweight, highly semantic, and fully accessible accordion component built using pure HTML and CSS. It supports smooth expanding and collapsing transitions, dark/light modes, keyboard navigation, and two modern layout styles (SaaS Cards and Minimal Dividers).

---

## 1. What does this do?
This component provides interactive expandable/collapsible panels to present content (such as FAQs, metadata, settings, or documentation structures) cleanly. It features:
- **Zero JavaScript**: Operates entirely via HTML input checkbox/radio hacks.
- **Exclusive or Multi-Select Modes**: Supports closing other items when opening a new one (using `radio` buttons) or allowing multiple open panels at once (using `checkbox` inputs).
- **Smooth Height Transitions**: Animates dynamic content heights using a smart `grid-template-rows: 0fr -> 1fr` CSS technique.
- **Progressive Enhancement**: Ready for the native CSS `interpolate-size: allow-keywords` spec to animate `height: 0 -> auto` smoothly in supporting browsers.
- **Keyboard Accessible & Screen Reader Friendly**: Toggle inputs remain focusable by keyboard (`Tab`, `Space`, `Enter`) and triggers use custom focus outline indicators.
- **Modern Theme & Style Variants**: Adapts to dark/light color schemes automatically via CSS variables.

---

## 2. How is it used?

### Layout A: SaaS FAQ Card Style (Exclusive Select)
To construct an accordion where only one card is open at a time, use `<input type="radio">` with a shared `name` attribute:

```html
<div class="ease-accordion-group ease-accordion--card">
  
  <!-- Accordion Item 1 -->
  <div class="ease-accordion-item">
    <!-- Visually hidden input for toggling (uses type="radio" for exclusive selection) -->
    <input type="radio" name="faq-group" id="faq-1" class="ease-accordion-toggle" checked>
    
    <!-- Trigger Header Label -->
    <label for="faq-1" class="ease-accordion-trigger">
      <span class="ease-accordion-title">How does billing work?</span>
      <span class="ease-accordion-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
    </label>
    
    <!-- Height Transition Panel -->
    <div class="ease-accordion-panel">
      <div class="ease-accordion-content-wrapper">
        <div class="ease-accordion-content">
          <p>We bill you monthly based on your active seats...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Accordion Item 2 -->
  <div class="ease-accordion-item">
    <input type="radio" name="faq-group" id="faq-2" class="ease-accordion-toggle">
    <label for="faq-2" class="ease-accordion-trigger">
      <span class="ease-accordion-title">Can I cancel anytime?</span>
      <span class="ease-accordion-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
    </label>
    <div class="ease-accordion-panel">
      <div class="ease-accordion-content-wrapper">
        <div class="ease-accordion-content">
          <p>Yes, you can cancel your subscription at any point from your dashboard...</p>
        </div>
      </div>
    </div>
  </div>

</div>
```

### Layout B: Minimal Divider Style (Multi-Open Select)
To construct an accordion where multiple items can expand concurrently, use `<input type="checkbox">`:

```html
<div class="ease-accordion-group ease-accordion--minimal">
  
  <div class="ease-accordion-item">
    <input type="checkbox" id="item-1" class="ease-accordion-toggle">
    <label for="item-1" class="ease-accordion-trigger">
      <span class="ease-accordion-title">Is it responsive?</span>
      <span class="ease-accordion-icon-plus"></span>
    </label>
    <div class="ease-accordion-panel">
      <div class="ease-accordion-content-wrapper">
        <div class="ease-accordion-content">
          <p>Yes, layout scales from screen widths as small as 320px...</p>
        </div>
      </div>
    </div>
  </div>

</div>
```

---

## Class Catalog

| Class Name | Type | Description |
| :--- | :--- | :--- |
| `.ease-accordion-group` | Container | Main wrapper of the accordion list. |
| `.ease-accordion-item` | Wrapper | Card container or divider row wrapper of a single accordion section. |
| `.ease-accordion-toggle` | Input | Visually hidden form input containing the checkbox/radio logic. |
| `.ease-accordion-trigger` | Label | Interactive title bar serving as the toggle click-target. |
| `.ease-accordion-title` | Text | Font container inside the trigger. |
| `.ease-accordion-panel` | Animation Wrapper | Animates grid layout row sizes to toggle height seamlessly. |
| `.ease-accordion-content-wrapper` | Spacing Wrapper | Sets `min-height: 0` and `overflow: hidden` to clip content during animation. |
| `.ease-accordion-content` | Content Box | Body container padding/spacing box holding the actual text/content. |
| `.ease-accordion-icon` | Indicator | Chevron icon circular badge variant. |
| `.ease-accordion-icon-plus` | Indicator | Pure-CSS plus-to-minus drawing icon. |
| `.ease-accordion--card` | Variant Modifier | Displays cards individually with subtle borders, background fills, and shadows. |
| `.ease-accordion--minimal` | Variant Modifier | Displays items in a clean documentation style separated by borders. |

---

## 3. Why is it useful?
1. **Zero JavaScript Overhead**: Native components run automatically without blocking the browser main thread, loading heavy JS libraries, or causing hydration delay in frameworks like React/Next.js.
2. **Smooth Variable Height Animation**: Unlike basic CSS accordions that use a hardcoded `max-height` (which causes jerky and poorly-timed transitions), this component transitions `grid-template-rows` from `0fr` to `1fr`. This allows the panel to animate precisely to its content's natural height.
3. **Double Layout Flexibility**: Provides two major visual themes. Cards are ideal for pricing tables and checkout FAQs; Minimal dividers are ideal for technical documents and sidebar navigations.
4. **Interactive & Accessible Focus States**: Ensures users navigating with keyboards receive a highlighted, readable outline on active controls. Toggles respond perfectly to standard screen reader tab targets.
5. **Dynamic Theme Customization**: Variables for fonts, animations, and active highlight colors are exposed at the `:root` level, enabling developers to integrate it with design systems in seconds.
