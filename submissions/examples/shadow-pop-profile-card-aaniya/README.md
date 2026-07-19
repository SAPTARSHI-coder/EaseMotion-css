# Shadow Pop Profile Card

Closes #41528

## What does this do?

A glassmorphic profile card whose shadow "pops" outward and intensifies on hover/focus, along with a subtle lift, giving the card a floating feel — all with a single CSS transition, no JavaScript.

## How is it used?

```html
<article class="shadow-pop-card" tabindex="0">
  <img class="shadow-pop-card__avatar" src="avatar.jpg" alt="Portrait of Maya Chen">
  <h2 class="shadow-pop-card__name">Maya Chen</h2>
  <p class="shadow-pop-card__role">Product Designer</p>
  <p class="shadow-pop-card__bio">Crafts clean, accessible interfaces.</p>
  <div class="shadow-pop-card__tags">
    <span class="shadow-pop-card__tag">UI/UX</span>
  </div>
</article>
```

Hovering or tab-focusing the `.shadow-pop-card` triggers the transition: the card lifts slightly and its box-shadow grows and intensifies, then eases back on mouse-out/blur.

## Why is it useful?

Profile cards are one of the most common UI building blocks, and this variant leans into the Glassmorphism trend the issue called for — translucent, blurred background with a soft border — while adding a distinct, tactile shadow-pop interaction rather than a plain hover-lighten.

- Needs **no JavaScript** — the entire effect is one CSS `transition` on `box-shadow`/`transform`.
- Is keyboard accessible: the card is a real `tabindex="0"` element with a visible `:focus-visible` state, so the same pop effect works for keyboard users, not just mouse hover.
- Respects `prefers-reduced-motion` by disabling the transition for users who've opted out of motion.
- Is responsive down to narrow viewports.
- Follows the requested `shadow-pop-profile-card-<suffix>` submission naming.

## Files

- `demo.html` — self-contained demo, opens directly in a browser
- `style.css` — raw CSS (uses `ease-` prefixed variable names per the issue's explicit requirement; the maintainer standardizes the rest)
- `README.md` — this file