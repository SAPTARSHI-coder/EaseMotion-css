# Password Strength Meter

### What does this do?

It shows a password field with a segmented strength meter and a label that reflect weak, medium, and strong states through a class.

### How is it used?

```html
<div class="pw is-strong">
  <input type="password" value="s3cret" aria-label="Password" />
  <div class="pw-bars" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
  <span class="pw-label">Strong</span>
</div>
```

Set `is-weak`, `is-medium`, or `is-strong` on the wrapper to fill and color the bars. The host app updates the class as the user types.

### Why is it useful?

Strength meters guide users to safer passwords on sign up forms. This styles a segmented meter and colors it by a state class, using only CSS. The bars are hidden from assistive tech while the text label conveys the strength.
