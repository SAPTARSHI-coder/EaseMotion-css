# Password Toggle

### What does this do?

It shows a password field with a show and hide eye button. The value is masked by default and revealed when you click the eye, and the eye icon switches between open and struck through to match. All of it works with no JavaScript.

### How is it used?

```html
<div class="pw-field">
  <input id="pw" class="pw-input" type="text" value="tr0ub4dour" />
  <input id="pw-reveal" class="pw-check" type="checkbox" />
  <label class="pw-eye" for="pw-reveal">...</label>
</div>
```

The input is masked with `-webkit-text-security: disc`. A hidden checkbox, toggled by the eye label, drives `.pw-field:has(.pw-check:checked) .pw-input { -webkit-text-security: none; }` to reveal the text, and the same `:has` rule swaps the eye icon.

### Why is it useful?

Reveal toggles help users check what they typed on sign in and sign up forms. This builds one entirely in CSS with `-webkit-text-security` and the `:has()` selector, so no script is needed to show or hide the value.
