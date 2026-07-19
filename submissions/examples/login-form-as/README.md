# Login Form Card

### What does this do?

It shows a centered sign in card with a title, email and password fields, a remember me checkbox, a forgot link, a primary submit button, and a create account footer. Fields light up with a focus ring.

### How is it used?

```html
<form class="login-card">
  <h1>Welcome back</h1>
  <label>Email<input type="email" autocomplete="username" /></label>
  <label>Password<input type="password" autocomplete="current-password" /></label>
  <div class="login-row">
    <label><input type="checkbox" /> Remember me</label>
    <a href="#">Forgot password?</a>
  </div>
  <button type="submit">Sign in</button>
</form>
```

Labels wrap their inputs so the field is announced with its name. The `autocomplete` hints let password managers fill the form.

### Why is it useful?

A sign in card is one of the most reused screens in any product. This presents a clean, accessible login form with labeled fields, focus states, and a primary action, using only CSS. Focus rings and hover states aid usability and transitions are removed under reduced motion.
