# White-Space Handling Utilities

1. What does this do?
   Provides utility classes to control text wrapping, newline preservation, and extra space collapsing inside containers.

2. How is it used?
   Apply classes like `.whitespace-nowrap`, `.whitespace-pre-wrap`, or `.whitespace-pre` to any paragraph or container text block:

```html
<p class="whitespace-nowrap">This text will never wrap on a new line.</p>
<pre class="whitespace-pre-wrap">
Preserves code formatting   spaces but wraps normally.</pre
>
```

3. Why is it useful?
   It offers granular control over layout overflow and formatting preservation, which is vital for displaying code snippets, side-scrolling navigation rails, and preventing awkward line breaks in headings.
