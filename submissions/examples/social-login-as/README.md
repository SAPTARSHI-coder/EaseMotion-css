# Social Login Buttons

### What does this do?

It shows a stack of social sign in buttons for Google, Apple, and GitHub, each with its inline SVG logo and a label, plus an or divider above an email option.

### How is it used?

```html
<div class="social-login">
  <button class="sl-btn"><svg>...</svg>Continue with Google</button>
  <button class="sl-btn"><svg>...</svg>Continue with Apple</button>
  <div class="sl-or"><span>or</span></div>
  <button class="sl-btn email">Continue with email</button>
</div>
```

Each provider button centers its logo and label. The `sl-or` divider draws lines on both sides of the label with pseudo elements, and the `email` variant is the primary action.

### Why is it useful?

Sign in screens offer social login as the fast path. This lays out a set of provider buttons with brand logos, consistent sizing, and an or divider, using only CSS and inline SVG so there are no external assets. Buttons have hover and focus states, removed of motion under reduced motion.
