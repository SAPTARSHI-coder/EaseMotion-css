# ease-dropdown-gn

1. **What does this do?**
   Adds a CSS-only dropdown menu with a smooth fade and slide-down open animation triggered on hover or keyboard focus.

2. **How is it used?**

   ```html
   <div class="dropdown-wrapper">
     <button class="dropdown-toggle">Menu</button>
     <ul class="dropdown-menu">
       <li><a href="#">Item One</a></li>
       <li><a href="#">Item Two</a></li>
       <li class="divider"></li>
       <li><a href="#">Item Three</a></li>
     </ul>
   </div>
   ```

3. **Why is it useful?**
   Dropdowns are one of the most common UI patterns yet typically require JavaScript to animate. This submission shows they can be fully handled in CSS using `:hover` and `:focus-within`, keeping the interaction lightweight, accessible, and in line with EaseMotion CSS's zero-build-step philosophy. The fade + slide animation uses the same easing approach as the rest of the library, and a `prefers-reduced-motion` block ensures the effect respects user accessibility preferences.
