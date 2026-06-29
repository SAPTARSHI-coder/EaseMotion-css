
# Cards Gallery Page

## What does it do?

The Cards Gallery Page provides a central place to explore all card animation variants in EaseMotion CSS.  
It improves accessibility by making it easier for users to discover card effects. When a user clicks the **Explore** button, they are redirected to this gallery page, which showcases a collection of animated cards in a responsive grid.

### This demo includes multiple card variants:

- Hover Lift Card
- Glow Card
- Flip Card
- Pulse Card
- Bounce Card

## How is it used?

Navigate to the Cards Gallery Page via the **Explore** button.  
The page dynamically injects card HTML and CSS from JavaScript objects, so each card block acquires its full animation effect.

Example:

```html
<section id="cardGrid" class="card-grid"></section>
<script src="cards.js"></script>
<link rel="stylesheet" href="style.css" />
```

Cards are automatically rendered into the grid with their animations applied to the entire card block.

## Why is it useful?

The Cards Gallery Page makes it simple to find and test card animations in one place.  
It aligns with EaseMotion CSS’s **animation-first philosophy** by showcasing effects directly on whole card items.

Benefits include:

- Centralized card showcase for accessibility
- Responsive grid layout
- Dynamic injection of HTML and CSS (no manual duplication)
- Multiple animation styles (lift, glow, flip, pulse, bounce)
- Easy navigation via the Explore button

## Demo

Open `demo.html` directly in your browser to see the Cards Gallery Page in action.
```

---

