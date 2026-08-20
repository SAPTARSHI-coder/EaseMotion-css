# Magnetic Password Strength

Resolves #42439.

### What does this do?
Adds a Magnetic Password Strength indicator component to EaseMotion CSS. It uses pure CSS HTML5 validation attributes (`pattern`, `:valid`, `:not(:placeholder-shown)`) to drive a multi-node indicator that snaps into place with an `ease-bounce` animation when the password meets criteria.

### How is it used?
Copy the HTML from `demo.html` into your project and use `style.css` for the design layout. It seamlessly integrates with `easemotion.min.css` to provide the animations.

### Why is it useful?
Provides an interactive password strength indicator without relying on JavaScript, creating a "magnetic" snapping animation feedback loop when security requirements are met.
