# ease-motion-safe

## Overview

The `ease-motion-safe` utility provides accessibility-friendly motion handling for users who have enabled **Reduce Motion** in their operating system settings.

When the browser detects `prefers-reduced-motion: reduce`, animations and transitions are minimized or stopped to reduce motion-related discomfort while preserving content visibility.

## Features

- Respects system accessibility preferences
- Reduces animation duration
- Stops infinite animation loops
- Removes transition delays
- Improves WCAG accessibility compliance
- Works with existing EaseMotion CSS animations

## Example

````html
<div class="demo-box ease-motion-safe">Motion</div>
Testing Enable Reduce Motion in your operating system settings. Open the demo
page in a browser. The spinning animation should stop immediately when reduced
motion is active. Accessibility Benefits This utility is designed to support
users with vestibular disorders, motion sensitivities, and accessibility
requirements by reducing unnecessary movement on the page. --- ### `demo.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ease-motion-safe Demo</title>
    <link rel="stylesheet" href="style.css" />

    <style>
      body {
        font-family: sans-serif;
        text-align: center;
        background-color: #f4f4f9;
        padding: 40px;
      }

      .instructions {
        background: #fff;
        padding: 15px;
        border-radius: 8px;
        max-width: 500px;
        margin: 0 auto 30px auto;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    </style>
  </head>
  <body>
    <h1>EaseMotion CSS - Accessibility Utility Demo</h1>

    <div class="instructions">
      <p><strong>How to test this feature:</strong></p>
      <p>1. Turn on "Reduce Motion" in your OS settings.</p>
      <p>2. Refresh this page.</p>
      <p>3. The spinning square below will stop animating automatically.</p>
    </div>

    <!-- Using the proposed accessibility utility class -->
    <div class="demo-box ease-motion-safe">Motion</div>
  </body>
</html>
````
