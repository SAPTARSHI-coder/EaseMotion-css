# CSS Counter Utilities

1. What does this do?
Provides utility classes to initialize, increment, and display dynamic counters (variables maintained by CSS) without needing JavaScript.

2. How is it used?
Apply `.counter-reset-item` to a container, `.counter-increment-item` to child nodes, and `.counter-display-item` to show the count:
```html
<ol class="counter-reset-item">
  <li class="counter-increment-item counter-display-item">First item</li>
  <li class="counter-increment-item counter-display-item">Second item</li>
</ol>
```

3. Why is it useful?
It enables robust, performance-friendly automatic numbering for structured documents, nested lists, and layout wizards through native CSS rendering, avoiding JavaScript recalculation overhead.
