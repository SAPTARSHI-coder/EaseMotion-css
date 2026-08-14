# CSS Scramble Text Effect

A cyberpunk-style text decoding effect that scrambles random characters before revealing the real text, achieved entirely without JavaScript.

## Features
- Pure CSS and HTML (Zero JavaScript required for generating random strings or managing timers).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--bg-base`, `--accent`) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: light/dark`).
- **Dynamic Content Replacement Technique**: 
- Because CSS cannot natively manipulate strings character-by-character, this component uses the `content` property of a `::before` pseudo-element.
- The actual HTML text is made transparent, and the `::before` element sits perfectly on top of it.
- A CSS `@keyframes` animation rapidly replaces the `content` string with pre-generated gibberish at different percentage steps.
- **Dynamic Data Attribute Resolution**: 
- Instead of needing a unique keyframe animation for every single word you want to scramble, the final frame (`100%`) reads the correct word dynamically from the HTML using `content: attr(data-final);`. This allows the exact same CSS animation to be applied globally to any text element.
- **Step-End Interpolation**: The animation uses the `step-end` timing function. This ensures the text instantly snaps to the new gibberish string at each keyframe, without the browser attempting to smoothly crossfade or interpolate between the text blocks.
- Fully accessible with `prefers-reduced-motion` support. The scramble animation is completely disabled for motion-sensitive users, simply displaying the final text immediately on hover.

## Usage
Open `demo.html` in your browser. You will see an Access Terminal card with three pieces of sensitive data. Hover your mouse over the card or the "Decode" button to trigger the scramble effect, watching the gibberish rapidly cycle before locking into the final decoded text.

## Files
- `demo.html`: The HTML structure for the terminal card, detailing the crucial `data-final` attributes required for the dynamic resolution.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented mechanics detailing the `content` replacement trick and the `@keyframes` definition.
