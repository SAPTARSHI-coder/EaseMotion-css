# Contact Form

### What does this do?

It shows a contact form card with a name and email row, a subject field, a message textarea, and a send button. Fields light up with a focus ring, and the two column row collapses to one column on narrow screens.

### How is it used?

```html
<form class="contact">
  <h2>Get in touch</h2>
  <div class="cf-row">
    <label>Name<input type="text" autocomplete="name" /></label>
    <label>Email<input type="email" autocomplete="email" /></label>
  </div>
  <label>Subject<input type="text" /></label>
  <label>Message<textarea></textarea></label>
  <button type="submit">Send message</button>
</form>
```

The name and email sit in a two column grid that becomes one column below 420px. Labels wrap their fields so each control is announced with its name.

### Why is it useful?

Contact and support pages need a tidy form. This lays out a two column then single column contact form with labeled fields, focus states, and a primary action, using only CSS. The transitions are removed under reduced motion.
