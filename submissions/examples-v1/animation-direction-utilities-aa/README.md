# Animation Direction Utilities

1. **What does this do?** Adds utility classes for the CSS `animation-direction` property to control whether animations play forward, backward, or in alternating cycles.

2. **How is it used?**

```html
<div class="dir-normal">Plays forward each cycle</div>
<div class="dir-reverse">Plays backward each cycle</div>
<div class="dir-alternate">Alternates forward then backward</div>
<div class="dir-alternate-reverse">Alternates backward then forward</div>
```

3. **Why is it useful?** When combined with existing EaseMotion animation classes, these utilities allow developers to control playback direction without writing custom CSS. The `dir-alternate` utility is especially useful for smooth continuous animations like floating or pulsing.
