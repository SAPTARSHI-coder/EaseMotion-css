# Radio Group Component

### What does this do?

Adds `ease-radio-group-az` — an accessible, CSS-only custom radio group with an animated selection dot that scales in with a spring easing, card-style options, inline layout, and size variants.

### How is it used?

The maintainer should copy `style.css` into `components/radio-group.css` and import it.

```html
<fieldset class="ease-radio-group-az">
  <label class="ease-radio-option-az">
    <input type="radio" name="plan" value="free" checked />
    <span class="ease-radio-dot-az"></span>
    <span class="ease-radio-label-az">Free Plan</span>
  </label>
  <label class="ease-radio-option-az">
    <input type="radio" name="plan" value="pro" />
    <span class="ease-radio-dot-az"></span>
    <span class="ease-radio-label-az">Pro Plan</span>
  </label>
</fieldset>
```

Modifiers: `.inline` on the group, `.card` on individual options, `.sm` / `.lg` on the group.

### Why is it useful?

1. **Animated dot** — the inner circle scales in with an overshoot cubic-bezier for a tactile feel
2. **Card mode** — options become bordered cards that highlight on selection, perfect for billing/plan pickers
3. **Accessible** — native `<input type="radio">` is visually hidden but fully keyboard-navigable; `:focus-visible` shows a glow ring; disabled state dims the option
