# Transform Origin Utilities

1. **What does this do?** Adds utility classes for the CSS `transform-origin` property to control the pivot point around which CSS transforms (scale, rotate, etc.) are applied.

2. **How is it used?**
```html
   <div class="origin-center">Scales/rotates from center</div>
   <div class="origin-top-left">Scales/rotates from top-left corner</div>
   <div class="origin-bottom-right">Scales/rotates from bottom-right corner</div>
```

3. **Why is it useful?** Transform-origin utilities are essential when applying scale or rotate animations to UI elements like buttons, cards, or icons. Without these utilities, developers must write custom CSS to reposition the pivot point — adding them makes EaseMotion CSS animation utilities significantly more flexible.
