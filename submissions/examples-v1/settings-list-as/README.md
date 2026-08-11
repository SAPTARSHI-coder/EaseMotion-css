# Settings List

### What does this do?

It shows a settings panel of rows, each with an icon, a title, a helper line, and a toggle switch on the right. The switches are real checkboxes that slide on and off with no JavaScript.

### How is it used?

```html
<ul class="settings">
  <li class="set-row">
    <span class="set-icon"><svg>...</svg></span>
    <span class="set-text"><strong>Email alerts</strong><small>Get a summary daily</small></span>
    <label class="switch"><input type="checkbox" checked aria-label="Email alerts" /><span class="track"></span></label>
  </li>
</ul>
```

Each switch is a hidden checkbox with a `.track` that shows the pill and the sliding knob. Give the input an `aria-label` matching the row title.

### Why is it useful?

Preference screens list options as rows with a switch each. This lays out a settings list with labeled rows and a sliding toggle per row, using only checkboxes and CSS. Switches are keyboard operable with a focus ring and the slide is removed under reduced motion.
