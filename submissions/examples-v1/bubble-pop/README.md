# Bubble Pop Effect

**What is it?**
Five iridescent bubbles gently float in place. Hovering any bubble triggers a satisfying pop animation -- it inflates, brightens, then shrinks to nothing.

**How it works**
Bubbles use `float` keyframe for gentle bobbing with staggered delays. On `:hover`, the `pop` keyframe replaces `float`: bubble scales to 1.3x with intensified glow, then collapses to 0. Radial gradient and `::before` pseudo-element create the glossy highlight.

**Why this approach**
Pure CSS hover-triggered interaction. No JavaScript needed. The `pop` animation replaces `float` on hover via the cascade -- when hover ends, `float` resumes.
