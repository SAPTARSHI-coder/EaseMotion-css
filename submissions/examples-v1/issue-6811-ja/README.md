\# Animation Delay Fix (`issue-6811-ja`)



\### What does this do?

It isolates the framework's stagger delay helper utilities so they exclusively apply to `animation-delay` rather than leaking into `transition-delay`.



\### How is it used?

```html

<button class="ease-slide-up ease-delay-300 ease-hover-grow">

&#x20; Interactive Button

</button>

