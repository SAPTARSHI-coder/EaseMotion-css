# CSS Video Background Hero

1. **What does this do?**
   Creates a full-screen, responsive hero component featuring a video background with a customizable dark CSS overlay and pure CSS entrance animations.

2. **How is it used?**
   Apply `.video-hero-ag` to your top-level `<header>` or `<section>` element and place the background video, overlay, and content inside:

   ```html
   <header class="video-hero-ag">
     <video class="video-hero-bg-ag" autoplay loop muted playsinline aria-hidden="true" tabindex="-1" poster="poster.jpg">
       <source src="background.mp4" type="video/mp4" />
     </video>

     <div class="video-hero-overlay-ag" aria-hidden="true"></div>

     <div class="video-hero-content-ag">
       <span class="video-hero-label-ag">EaseMotion CSS</span>
       <h1 class="video-hero-title-ag">CSS Video Background Hero</h1>
       <p class="video-hero-description-ag">Hero description text.</p>
       <a href="#" class="video-hero-cta-ag">Get Started</a>
     </div>
   </header>
   ```

3. **Why is it useful?**
   It provides a minimal, accessible video background hero with readable text contrast, fluid responsive typography, visible keyboard focus indicators, and `prefers-reduced-motion` support without any JavaScript dependencies.
