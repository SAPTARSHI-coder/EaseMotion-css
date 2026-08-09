# Typewriter Image Gallery (`typewriter-image-gallery-ksk`)

1. What does this do?  
Displays a glassmorphism image gallery where each card's title animates in using a CSS typewriter effect (`steps()` width expansion with a blinking cursor), staggered across cards so they type one after another.

2. How is it used?  
Place `.tw-card` items inside a `.tw-gallery` grid. Each `.tw-title` uses CSS custom properties `--tw-chars`, `--tw-duration`, and `--tw-delay` to control per-card typewriter timing. Card images go inside `.tw-img-wrap`.

3. Why is it useful?  
Provides a polished, attention-directing gallery reveal pattern with zero JavaScript — using CSS `steps()` timing, `overflow: hidden`, and `border-right` cursor blinking to simulate realistic character-by-character typing.

---
*Created for GSSoC-26 — Resolves #41495.*
