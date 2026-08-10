# Animated Interactive Avatar Group

**What does this do?**  
A stacked row of circular avatar badges that fan out with staggered delays when the group is hovered. Each avatar shows a gradient circle with initials and a name label. Individual hover enlarges the avatar and adds a matching glow.

**How is it used?**  
Open `demo.html` in a browser. Hover anywhere over the stack to fan avatars apart; hover a single avatar to emphasis it. Customize colors via the `--hue` custom property on each `.avatar` element. Adjust `--delay` to change stagger timing.

**Why is it useful?**  
Avatar groups are common in team pages, collaboration UIs, and social components. This pattern turns a static stack into an interactive, personality-rich element using zero JavaScript. The staggered fan-out and per-avatar glow are purely declarative and easy to integrate into any design system.
