# Floating Orbit Tabs - Accessible Web Layouts

1. **What does this do?**
   This is a pure HTML and CSS tab component that features an interactive 3D orbiting indicator and smooth tab panel transitions, designed with high contrast accessibility, keyboard support, and motion safety preferences.

2. **How is it used?**
   Apply the `.tabs-wrapper` class to your layout container, pair it with visually hidden `<input type="radio" class="tab-input">` controls, a `.tabs-header` containing target labels for tab selection, and a `.tabs-content` wrapper containing panel divs:

   ```html
   <section class="tabs-wrapper">
     <input type="radio" id="tab-1" name="accessible-tabs" class="tab-input" checked>
     
     <nav class="tabs-header" role="tablist">
       <label for="tab-1" class="tab-label" role="tab">WCAG Guidelines</label>
       <div class="orbit-indicator" aria-hidden="true">
         <div class="orbit-system">
           <div class="orbit-path"></div>
           <div class="orbit-planet"></div>
         </div>
       </div>
     </nav>
     
     <div class="tabs-content">
       <article class="tab-panel panel-1" role="tabpanel">...</article>
     </div>
   </section>
   ```

3. **Why is it useful?**
   It allows developers to implement highly engaging, interactive tab menus that are fully functional without any JavaScript, natively support screen readers and keyboard arrows navigation, and automatically adapt to light/dark themes and reduced-motion environments.
