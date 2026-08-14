# Neon Glow Login Form

A dark login form with a glowing neon focus effect on inputs and an illuminated gradient button. Pure HTML and CSS — no JavaScript required.

## Features

- 💡 Inputs glow with a soft neon ring on focus
- 🌈 Gradient button with a persistent ambient glow that intensifies on hover
- 📱 Responsive — padding scales down on small screens
- ♿ Respects `prefers-reduced-motion`
- 🧩 Pure HTML + CSS — no JavaScript dependencies

## Usage

```html
<form class="neon-form">
  <p class="neon-title">Welcome Back</p>

  <label class="neon-field">
    <span class="neon-label">Email</span>
    <input class="neon-input" type="email" placeholder="you@example.com" />
  </label>

  <label class="neon-field">
    <span class="neon-label">Password</span>
    <input class="neon-input" type="password" placeholder="••••••••" />
  </label>

  <button class="neon-btn" type="submit">Sign In</button>
</form>
```

## Why it fits EaseMotion CSS

The glow effects are pure `box-shadow`/`transition` on `:focus` and `:hover`, no JavaScript. Class names are simple and readable (`neon-form`, `neon-input`, `neon-btn`).

## Files

- `demo.html` — live example login form
- `style.css` — all styles and glow animations
- `README.md` — this file

## Notes

Form submission logic (validation, actual sign-in handling) is left to the consuming app's JavaScript — this component provides the animated visual shell.