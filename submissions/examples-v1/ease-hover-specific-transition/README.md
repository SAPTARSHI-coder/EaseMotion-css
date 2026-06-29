**What does this do?** 
This example uses `transition: transform 0.3s ease` together with `transform: scale()` to create a smooth zoom-in effect when a user hovers over an element such as a button.

**How is it used?** 
```html
<button class="ease-hover-grow">Hover me</button>
```

**Why is it useful?**
This hover effect provides smooth visual feedback and makes interactive elements feel more responsive. Using `transition: transform` instead of `transition: all` improves performance, avoids unnecessary animations, and keeps the code clean and maintainable. The `scale()` function enlarges the element visually without affecting the surrounding layout, making it ideal for buttons, cards, and other clickable UI elements.This utility aligns with EaseMotion CSS by providing a lightweight, performant, and reusable hover animation pattern.