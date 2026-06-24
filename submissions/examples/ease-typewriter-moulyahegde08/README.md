\# Typewriter Effect (mh08)



\## What does this do?



A pure CSS animation that makes text appear as if it's being typed out character by character, complete with a blinking cursor at the end.



\## How is it used?



Add the `ease-typewriter-mh08` class to any inline-level element (like `<p>` or `<span>`) containing the text you want animated:



```html

<p class="ease-typewriter-mh08">Hello, World!</p>

```



Optional speed modifiers can be combined with the base class:



```html

<!-- Slower typing speed -->

<p class="ease-typewriter-mh08 ease-typewriter-mh08-slow">EaseMotion CSS is awesome</p>



<!-- Faster typing speed -->

<p class="ease-typewriter-mh08 ease-typewriter-mh08-fast">Pure CSS animation</p>



<!-- Larger heading variant -->

<h2 class="ease-typewriter-mh08 ease-typewriter-mh08-heading">Welcome to my site</h2>

```



\*\*Note:\*\* The animation uses a fixed-step `width` reveal, so it works best with monospace fonts and single-line text. The number of steps in the `steps()` function should roughly match the character count for the smoothest effect — contributors using this should adjust `steps(30, end)` based on their text length.



\## Why is it useful?



Typewriter effects are a popular way to draw attention to headings, taglines, or hero text without requiring any JavaScript. This component fits EaseMotion CSS's philosophy of providing lightweight, dependency-free, animation-first utilities that beginners can drop into any project with a single class name. It demonstrates how `@keyframes`, `steps()`, and combinable modifier classes can create an engaging effect using only CSS.

