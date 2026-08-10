# Animated Notification Stack

A reusable **CSS-only Animated Notification Stack** that displays notification cards with a smooth staggered slide-up and fade-in animation. Each notification appears sequentially, creating a clean and modern stacked effect without requiring JavaScript.

## Features

* CSS-only implementation (no JavaScript required)
* Smooth staggered slide-up and fade-in animation
* Lightweight and reusable component
* Responsive layout for desktop and mobile
* Multiple notification variants (Success, Message, Info, Warning)
* Simple to customize using CSS variables
* Modern card design with subtle hover interaction

## Usage

Add the notification stack and notification items to your HTML:

```html
<section class="notification-stack">

  <div class="notification success">
    <span class="icon">✅</span>
    <div class="content">
      <h3>Profile Updated</h3>
      <p>Your profile information was saved successfully.</p>
    </div>
  </div>

  <div class="notification message">
    <span class="icon">📩</span>
    <div class="content">
      <h3>New Message</h3>
      <p>You received a new message from Alex.</p>
    </div>
  </div>

  <div class="notification info">
    <span class="icon">🔔</span>
    <div class="content">
      <h3>Backup Completed</h3>
      <p>Your latest backup finished successfully.</p>
    </div>
  </div>

</section>
```

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

## How It Works

* The `.notification-stack` arranges notification cards vertically using Flexbox.
* Each `.notification` starts with reduced opacity and a downward offset.
* The `stackReveal` keyframe animates each card into place using a smooth slide-up and fade-in effect.
* `:nth-child()` selectors apply staggered animation delays, making notifications appear one after another.
* Individual notification variants use different accent colors for improved visual feedback.

## Customization

You can easily customize the component by changing:

* Notification accent colors
* Animation duration and delay
* Card spacing and border radius
* Shadow intensity
* Typography and icons

## Browser Support

Works in all modern browsers that support standard CSS animations and Flexbox.

## Files

* `demo.html` — Demonstrates the Animated Notification Stack component.
* `style.css` — Contains the reusable animation utility and demo styling.
* `README.md` — Documentation and usage guide.

## Why It Fits EaseMotion CSS

This component follows EaseMotion CSS's animation-first philosophy by providing a lightweight, human-readable, and reusable CSS animation. It focuses on practical UI interactions that developers can easily integrate into dashboards, admin panels, and modern web applications without relying on JavaScript.

## Credits

Created for **EaseMotion CSS** as part of **GSSoC 2026**.
