# Slide-Right Neumorphic Tabs

### 1. What does this do?

This is a pure CSS tabs component that features a smooth horizontal slide-right active indicator and content transition. It is styled with a modern, soft neumorphic appearance (subtle light-source shadows and inset recess panels) and works entirely without JavaScript.

### 2. How is it used?

Include `style.css` in your HTML, structure the markup using radio inputs linked to labels and content panels, and wrap the component in a container with the `.slide-right-tabs-sd` class.

Example markup:

```html
<div class="slide-right-tabs-sd">
  <input type="radio" id="tab1" name="tabs" checked class="tab-input-sd" />
  <input type="radio" id="tab2" name="tabs" class="tab-input-sd" />
  <input type="radio" id="tab3" name="tabs" class="tab-input-sd" />

  <div class="tab-header-sd">
    <label for="tab1" class="tab-label-sd">Tab 1</label>
    <label for="tab2" class="tab-label-sd">Tab 2</label>
    <label for="tab3" class="tab-label-sd">Tab 3</label>
    <div class="tab-indicator-sd"></div>
  </div>

  <div class="tab-panels-sd">
    <div class="tab-panels-inner-sd">
      <div class="tab-panel-sd" id="panel1">Content 1</div>
      <div class="tab-panel-sd" id="panel2">Content 2</div>
      <div class="tab-panel-sd" id="panel3">Content 3</div>
    </div>
  </div>
</div>
```

Customization is exposed through CSS variables:

```css
.slide-right-tabs-sd {
  --tabs-duration: 0.45s;
  --tabs-easing: cubic-bezier(0.25, 1, 0.5, 1);
  --tabs-radius: 16px;
  --tabs-shadow:
    6px 6px 12px rgba(163, 177, 198, 0.6),
    -6px -6px 12px rgba(255, 255, 255, 0.9);
  --tabs-scale: 1;
}
```

### 3. Why is it useful?

- **Zero JavaScript Overhead**: Relies entirely on native browser engines for input handling and rendering, improving performance and eliminating scripts.
- **Naturally Accessible & Responsive**: Uses native HTML radio buttons for automatic arrow-key keyboard navigation and screen reader support. Designed without fixed widths to dynamically adapt to any screen size.
- **Highly Customisable**: Allows fine-tuning of transition duration, easing, border radius, shadows, and scaling through standard CSS custom properties.
