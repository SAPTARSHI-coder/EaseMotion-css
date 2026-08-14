# Issue 8448: Source Map Generation

This submission proposes updating the build pipeline to generate `.map` files for the minified CSS.

**What does this do?**
It highlights the need for source maps to aid in debugging minified production CSS.

**How is it used?**
Once merged into the build script, `easemotion.min.css.map` will be generated automatically.

**Why is it useful?**
Browser devtools can map minified rules back to their original component files, making debugging significantly easier.
