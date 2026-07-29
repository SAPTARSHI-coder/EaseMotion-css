# Loading Button

### What does this do?

It shows a button with a loading state that replaces its label with a spinner and blocks clicks, toggled with a class.

### How is it used?

```html
<button class="btn">Save changes</button>
<button class="btn is-loading" aria-busy="true">Save changes</button>
```

Add `is-loading` when an action starts. The label becomes transparent and a spinner is drawn in the center, and `pointer-events` are disabled so it cannot be clicked again.

### Why is it useful?

Buttons need to show progress while an action is in flight, such as submitting a form. This swaps the button to a spinner with a class and a keyframe, so it needs no JavaScript beyond toggling the class. Pair it with `aria-busy` for assistive tech, and the spinner slows under `prefers-reduced-motion: reduce`.
