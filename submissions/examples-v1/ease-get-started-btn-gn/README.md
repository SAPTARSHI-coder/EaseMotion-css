# ease-get-started-btn-gn

1. **What does this do?**
   Provides a styled "Get Started" primary CTA button with a gradient background, lift-and-scale hover animation, animated arrow, and an outline variant — all linked to a meaningful page section.

2. **How is it used?**
```html
   <a href="#quickstart" class="get-started-btn">
     <span>Get Started</span>
     <span class="btn-arrow">→</span>
   </a>

   <!-- Outline variant -->
   <a href="#docs" class="btn-outline">View Docs</a>
```

3. **Why is it useful?**
   A "Get Started" button without a destination frustrates users. This submission solves that by linking the button to a meaningful anchor section, pairing it with a smooth lift, scale, and arrow-slide animation that matches EaseMotion CSS's animation-first philosophy. Zero JavaScript, keyboard accessible, and includes prefers-reduced-motion support.
