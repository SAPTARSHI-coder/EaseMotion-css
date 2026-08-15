# Floating Modal with Retro Styling

A responsive floating modal component inspired by retro UI design.

## Features

- Fully responsive
- Retro-inspired visual design
- Bold borders and offset shadows
- Smooth modal entrance animation
- Pure HTML and CSS
- No JavaScript required
- Accessible close link
- Supports reduced-motion preferences

## Preview

Open `index.html` in a browser to view the component.

Click **OPEN MODAL** to display the floating modal.

Click the **×** button or **GOT IT** to close it.

## Usage

Copy the HTML structure from `index.html` and include `style.css` in your project.

The modal uses the CSS `:target` pseudo-class, so JavaScript is not required.

```html
<a href="#retro-modal">OPEN MODAL</a>

<div id="retro-modal" class="modal">
  <div class="modal-content">
    <a href="#" class="close-button">&times;</a>

    <h2>Welcome!</h2>

    <p>Your modal content goes here.</p>
  </div>
</div>