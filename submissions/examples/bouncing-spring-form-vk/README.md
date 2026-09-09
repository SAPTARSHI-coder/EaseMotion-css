# Bouncing Spring Form

A smooth and playful form interface featuring responsive spring-like interactions built with pure HTML and vanilla CSS.

## What does this do?

This form demonstrates a bouncing spring interaction pattern across the form card, input fields, labels, and submit button.

The animation uses CSS transforms and spring-like `cubic-bezier` easing to create smooth overshooting motion without JavaScript or external dependencies.

## How is it used?

Include the stylesheet in your HTML:

    <link rel="stylesheet" href="style.css">

Then use the form structure:

    <form class="spring-form">
      <div class="field-group">
        <label for="name">Name</label>
        <input id="name" type="text" placeholder="Your name">
      </div>

      <button class="submit-button" type="submit">
        <span>Send message</span>
        <span class="button-arrow" aria-hidden="true">→</span>
      </button>
    </form>

## Why is it useful?

The bouncing spring interaction adds responsive visual feedback to form controls while keeping the implementation lightweight and accessible.

It uses only HTML and CSS, supports keyboard focus states, works across screen sizes, and respects the user's `prefers-reduced-motion` setting.

## Features

- Pure HTML and vanilla CSS
- Spring-style easing and transitions
- Responsive layout
- Dark-mode compatible styling
- Keyboard-accessible focus states
- Reduced-motion support
- No JavaScript
- No external dependencies