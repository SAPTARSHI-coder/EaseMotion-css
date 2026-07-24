# Motion Recipe Builder

Relates to feature request **#41360**.

## 1. What does this do?

Demonstrates how to combine multiple EaseMotion animation primitives into reusable "Motion Recipes" using pure CSS and Custom Properties. It allows developers to bundle animations, transitions, durations, and easings into a single class (like `.ease-recipe-card`) rather than stringing together long lists of utility classes in HTML.

## 2. Why is this useful for EaseMotion CSS?

As projects grow, animation utility classes can become repetitive and difficult to maintain. Motion Recipes promote:
- **Reusability**: Define a complex interaction once, use it everywhere.
- **Consistency**: Standardize motion patterns across an application.
- **Cleaner Markup**: `class="ease-recipe-card"` instead of `class="ease-fade-up ease-scale ease-glow"`.

## 3. The Implementation

While the original feature request proposed a custom preprocessor syntax (`@ease-recipe`), this implementation achieves the exact same architectural goals using **Standard CSS Custom Properties**. This aligns perfectly with EaseMotion's philosophy by avoiding custom build steps while delivering the requested functionality.

## 4. How is it used?

**CSS**
```css
/* 1. Define the Recipe */
.ease-recipe-card {
  /* Expose customizable parameters */
  --recipe-duration: 300ms;
  --recipe-easing: ease-out;
}

/* 2. Bundle the animations on hover */
.ease-recipe-card:hover {
  animation:
    ease-fade-up var(--recipe-duration) var(--recipe-easing) forwards,
    ease-scale var(--recipe-duration) var(--recipe-easing) forwards,
    ease-glow var(--recipe-duration) var(--recipe-easing) forwards;
}
```

**HTML**
```html
<!-- Default recipe -->
<div class="ease-recipe-card">Hover Me</div>

<!-- Customizing the recipe per-instance! -->
<div class="ease-recipe-card" style="--recipe-duration: 1000ms;">
  Slow Hover Me
</div>
```

## 5. Included Demos

1. **The Raw Ingredients**: Visualizes the individual animations (`ease-fade-up`, `ease-scale`, `ease-glow`) before they are combined.
2. **The Final Recipe**: An interactive card demonstrating the bundled animations working seamlessly together on hover.
3. **Recipe Variations**: Shows how CSS Custom Properties allow you to effortlessly tweak the duration and easing of the recipe on a per-element basis without writing new CSS keyframes.
