# Fix: Card Hover Effects GPU will-change Memory

Resolves rendering crashes and performance slowdowns on mobile browsers caused by declaring permanent `will-change` directives on all cards.

## What does this do?
- **On-Demand will-change:** Promotes card components to dedicated layers dynamically during hover/focus states and cleans them up on exit.