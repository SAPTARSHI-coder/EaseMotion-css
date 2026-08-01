# Scroll Progress Indicators

1. What does this do? Provides standalone, CSS-only scroll progress indicators (top bar, gradient bar, reading indicator, and circular ring mockup) powered by pure CSS scroll-driven animations without any JavaScript dependencies.

2. How is it used? Apply one of the scroll progress indicator classes or elements to your page layout:

   ```html
   <!-- Top Bar Scroll Indicator -->
   <div class="scroll-progress-top"></div>

   <!-- Glowing Gradient Bar Indicator -->
   <div class="scroll-progress-gradient"></div>

   <!-- Sticky Reading Header Progress Bar -->
   <div class="scroll-progress-reading-track">
     <div class="scroll-progress-reading-fill"></div>
   </div>

   <!-- Circular Progress Ring Widget -->
   <div class="scroll-progress-circular">
     <svg viewBox="0 0 44 44">
       <circle class="circle-bg" cx="22" cy="22" r="20" />
       <circle class="circle-progress" cx="22" cy="22" r="20" />
     </svg>
   </div>
   ```

3. Why is it useful? It delivers smooth 60 FPS scroll progress tracking running entirely on the compositor thread via CSS `animation-timeline: scroll()`, eliminating the need for main-thread JavaScript event listeners or external scroll libraries.
