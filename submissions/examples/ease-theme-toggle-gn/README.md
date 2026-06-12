# ease-theme-toggle-gn

1. **What does this do?**
   Implements a working light/dark theme toggle switch using the CSS checkbox hack and custom properties — no JavaScript required.

2. **How is it used?**
```html
   <!-- Hidden checkbox -->
   <input type="checkbox" id="theme-toggle"/>

   <div class="page">
     <!-- Toggle label -->
     <label class="theme-toggle-label" for="theme-toggle">
       <span class="toggle-icon">☀️</span>
       <div class="toggle-track"></div>
       <span class="toggle-icon">🌙</span>
     </label>

     <!-- Your content reacts automatically -->
     <div class="demo-card">...</div>
   </div>
```

3. **Why is it useful?**
   The reported bug was that the theme toggle button clicked but applied no visual changes. This submission fixes that by using a hidden checkbox + CSS sibling selector (`#theme-toggle:checked ~ .page`) to switch CSS custom properties for the entire page — background, surface, text, border, and primary colors all update instantly. Pure CSS, zero JavaScript, prefers-reduced-motion supported.
