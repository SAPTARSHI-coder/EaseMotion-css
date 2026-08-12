# ⚡ Animation: Staggered Children Reveal

### What does this do?
This utility component targets parent containers and utilizes structured `:nth-child` loop scaling offsets to inject cascading animation delays across sequential inner child elements automatically.

### How is it used?
Apply the `.ease-stagger` class to any parent node alongside entrance wrappers, and optionally override the global timing stepping speed inline:

```html
<div class="ease-stagger" style="--ease-stagger-step: 100ms;">
  <div class="ease-card ease-slide-up">First Component Card</div>
  <div class="ease-card ease-slide-up">Second Component Card</div>
  <div class="ease-card ease-slide-up">Third Component Card</div>
</div>
```

### Author
Pari Dubey