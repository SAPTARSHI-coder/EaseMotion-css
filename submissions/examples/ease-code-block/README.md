# Ease Code Block 

A pre-styled, syntax-agnostic code block component featuring an animated, pure-CSS visual state copy button.

## What it does
The `ease-code-block` component provides a clean, dark-themed container for displaying code snippets. It keeps the UI uncluttered by hiding the "Copy" utility button until the user hovers over the block. 

By leveraging the native `:focus` pseudo-class, the component swaps the button text to "Copied!" with a smooth `ease-fade-in` animation when clicked, requiring **zero JavaScript** for the visual interaction.

## How to use it
To implement this component, wrap your `<pre><code>` block in the wrapper. Ensure your button contains the two spans (`.ease-copy-idle` and `.ease-copy-active`) so the CSS can manage the text swap.

```html
<div class="ease-code-wrapper">
    <button class="ease-copy-btn" aria-label="Copy code">
        <span class="ease-copy-idle">Copy</span>
        <span class="ease-copy-active">Copied!</span>
    </button>
    <pre class="ease-code-block"><code>
        /* Your code here */
    </code></pre>
</div>
```

*Note: As browsers do not allow writing to the system clipboard via pure CSS, developers consuming this library should attach a standard JavaScript `navigator.clipboard.writeText()` listener to `.ease-copy-btn` to enable actual clipboard functionality.*

## Why it fits EaseMotion CSS
* **Zero JavaScript:** Stays true to the library's core philosophy by handling complex visual state changes (like swapping button text on click) entirely via CSS pseudo-classes.
* **Documentation Ready:** Perfect for open-source libraries that need to display copy-pasteable snippets cleanly.
* **Syntax-Theme Agnostic:** It styles the *container*, not the *tokens*. You can drop any syntax highlighter into the `<code>` tag without color clashes.