# Modern Signup Form with OAuth Buttons

A responsive CSS-only authentication form inspired by modern SaaS platforms such as Clerk, Supabase, and Linear. The component combines traditional email/password inputs with OAuth buttons and subtle micro-interactions.

## Features

- ✨ Responsive card layout
- 🔐 Email and password authentication form
- 🌐 Google and GitHub OAuth buttons
- ➖ Elegant separator with decorative lines
- 🎯 Input focus states
- 🚀 Hover animations on buttons
- 🌙 Soft shadows and rounded corners
- 📱 Mobile-friendly design
- ⚡ Pure CSS implementation
- 🚫 No JavaScript required

## Folder Structure

```text
signup-form-oauth/
├── demo.html
├── style.css
└── README.md
```

## Usage

```html
<div class="signup-card">
  <button class="oauth-btn">Continue with Google</button>

  <button class="oauth-btn">Continue with GitHub</button>

  <div class="divider">
    <span>or</span>
  </div>

  <form>
    <input type="text" placeholder="Full Name" />

    <input type="email" placeholder="Email Address" />

    <input type="password" placeholder="Password" />

    <button class="signup-btn">Create Account</button>
  </form>
</div>
```

## Motion Effects

- Button hover lift effects
- Smooth transitions
- Input focus highlights
- Interactive OAuth buttons
- Soft shadow depth

## Why It Fits EaseMotion CSS

This example demonstrates practical authentication UI patterns commonly used in modern web applications. It follows EaseMotion CSS's animation-first philosophy by combining subtle motion with a clean, composable, and human-readable design.

## Use Cases

- SaaS applications
- Admin dashboards
- Portfolio websites
- Startup landing pages
- Authentication pages
- Developer tools

## Inspired By

- Clerk
- Supabase
- Linear
- Vercel
- Tailwind UI

## Browser Support

- Chrome
- Firefox
- Edge
- Safari
