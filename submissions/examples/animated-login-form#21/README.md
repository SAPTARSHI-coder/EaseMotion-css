# Animated Login Form

A modern animated login form component built with pure HTML and CSS. It includes floating input labels, smooth focus effects, gradient button animation, and responsive layout.

## Features

- Pure HTML and CSS implementation.
- Floating label inputs.
- Smooth input focus glow.
- Gradient button with shine hover effect.
- Social login buttons.
- Responsive layout.
- Supports `prefers-reduced-motion`.

## Usage

Copy the HTML structure from `demo.html` and link `style.css`.

```html
<section class="login-card">
  <form class="login-form">
    <div class="input-group">
      <input type="email" id="email" placeholder=" " required />
      <label for="email">Email address</label>
    </div>

    <div class="input-group">
      <input type="password" id="password" placeholder=" " required />
      <label for="password">Password</label>
    </div>

    <button type="submit" class="login-btn">
      Sign In
    </button>
  </form>
</section>