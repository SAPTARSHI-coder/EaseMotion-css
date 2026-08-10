# Organic Fibonacci Timing Generator (ease-fibonacci-viidhii19)

## Psychological UX Difference
Standard linear staggered animations (e.g., 100ms, 200ms, 300ms) often feel mechanical and robotic because uniform delays do not mimic natural physics. In nature, motion scales organically—often logarithmically or exponentially. 

By using the Fibonacci sequence (1, 2, 3, 5, 8, 13, 21, 34) multiplied by a baseline factor, this generator creates deeply organic, natural-feeling timing curves. The staggered entrances start off brisk and gradually extend the delay between subsequent elements, creating a fluid, cascading effect that is much more pleasing to the human eye.

## SCSS Integration Example

Import the SCSS partial in your main stylesheet to generate the utility classes:

```scss
@import 'ease-fibonacci-viidhii19';
```

Then, apply the generated utility classes to your HTML elements to achieve an organic staggered effect:

```html
<ul class="list-container">
  <li class="ease-delay-fib-1">Item 1 (40ms delay)</li>
  <li class="ease-delay-fib-2">Item 2 (80ms delay)</li>
  <li class="ease-delay-fib-3">Item 3 (120ms delay)</li>
  <li class="ease-delay-fib-4">Item 4 (200ms delay)</li>
  <li class="ease-delay-fib-5">Item 5 (320ms delay)</li>
  <li class="ease-delay-fib-6">Item 6 (520ms delay)</li>
  <li class="ease-delay-fib-7">Item 7 (840ms delay)</li>
  <li class="ease-delay-fib-8">Item 8 (1360ms delay)</li>
</ul>
```
