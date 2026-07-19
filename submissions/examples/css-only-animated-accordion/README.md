# CSS-only Animated Accordion

### 1. What does this do?
A clean, modern animated accordion built using native HTML `<details>` and `<summary>` elements alongside a clever CSS grid animation trick (`grid-template-rows: 0fr` to `1fr`). This allows smooth opening and closing animations of variable-height content without requiring any JavaScript height calculations.

### 2. How is it used?
```html
<details class="animated-accordion" name="faq">
  <summary>What is EaseMotion CSS?</summary>
  <div class="accordion-content-wrapper">
    <div class="accordion-content">
      <p>Content goes here. It animates smoothly!</p>
    </div>
  </div>
</details>
```

### 3. Why is this useful?
Accordions (frequently asked questions, collapsibles) usually require messy JavaScript `scrollHeight` calculations to achieve smooth height transitions. This purely native HTML/CSS solution is highly performant, accessible by default, and seamlessly aligns with EaseMotion CSS's philosophy.
