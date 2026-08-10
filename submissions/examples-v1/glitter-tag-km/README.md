# Glitter Tag

1. **What does this do?** A small pill-shaped tag/badge (like "New", "Pro", "Sale") with a layered glitter effect: a continuous diagonal shimmer sweep across the tag, plus two independently-timed twinkling sparkle marks that fade in and out at different positions and delays.
2. **How is it used?** Apply `.glitter-tag` to a `<span>` containing your tag text, with a nested `<span class="sparkle-2">✦</span>` inside for the second sparkle (the first sparkle is generated automatically via a `::after` pseudo-element, keeping markup minimal). Optional modifier classes `.glitter-tag-pro` and `.glitter-tag-sale` swap the color scheme.
   ```html
   <span class="glitter-tag">New<span class="sparkle-2">✦</span></span>
   <span class="glitter-tag glitter-tag-pro">Pro<span class="sparkle-2">✦</span></span>
   ```
3. **Why is it useful?** Tags are one of the most common UI elements (product labels, status badges, pricing plans), but usually static. This adds genuine multi-layered, sequenced animation — a continuous shimmer sweep combined with two independently-timed twinkling sparkles — giving it real "glitter" motion rather than a single flat effect, fitting EaseMotion CSS's animation-first philosophy. Pure CSS, no JavaScript required. Respects `prefers-reduced-motion` by disabling and hiding all shimmer/sparkle animations for users who request reduced motion.
