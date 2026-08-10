# Blur Password Strength

A pure CSS password strength indicator featuring a smooth blur-to-sharp transition.

## How it works
- Uses the `:valid` pseudo-class combined with HTML5 `pattern` attributes to detect password length.
- The `filter: blur()` property creates the motion effect.
- No JavaScript required.

## Usage
Add the HTML structure provided in `demo.html` to your form. Ensure the `pattern` attribute is set on your password input to match your desired strength requirements.