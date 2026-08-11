# Selectable Option Cards

### What does this do?

It shows a group of selectable cards for choosing one option, where the chosen card gets an accent border, a tinted background, and a check badge.

### How is it used?

```html
<label class="option">
  <input type="radio" name="plan" class="option-input" checked />
  <span class="option-card">
    <span class="option-title">Pro</span>
    <span class="option-desc">For growing teams</span>
    <span class="option-price">$12 / mo</span>
    <span class="option-check" aria-hidden="true"></span>
  </span>
</label>
```

Each card is a `label` wrapping a radio and the card content. Because the inputs share one `name`, only one card can be selected at a time.

### Why is it useful?

Card pickers are common for plans, shipping options, and settings. This styles the selected state from the native `:checked` state with a border, background, and check, so it needs no JavaScript. The group uses a `radiogroup` role, keeps native keyboard selection with a focus ring, and reduces motion under `prefers-reduced-motion: reduce`.
