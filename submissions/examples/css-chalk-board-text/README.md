# CSS Chalk Board Text

A pure CSS implementation of a chalkboard background with chalk-style text, complete with eraser smudges, a wooden frame border, and layered text-shadows for a realistic chalky smudge effect.

## What it does

This component creates a realistic chalkboard interface using CSS radial and linear gradients to simulate a blackboard and wooden frame. It uses the `Cabin Sketch` Google Font combined with layered CSS `text-shadow` properties to produce a convincing, glowing chalk text effect. A subtle hover animation provides interactivity.

## How to use it

1. Ensure the `Cabin Sketch` font is included in your project:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&display=swap" rel="stylesheet">
   ```

2. Add the component HTML structure:
   ```html
   <div class="chalkboard" role="img" aria-label="Blackboard with chalk text">
     <div class="chalk-text">Hello World</div>
   </div>
   ```

3. Include the corresponding CSS from `style.css`.

## Why it fits EaseMotion CSS

This component aligns with EaseMotion's philosophy by providing a highly stylized, interactive UI pattern without relying on JavaScript or heavy image assets. It uses modern CSS capabilities (`clamp`, multiple gradients, layered text-shadows) to deliver an aesthetic that developers can drop into their projects with minimal setup, adhering to the library's goal of "plug-and-play" visual excellence.
