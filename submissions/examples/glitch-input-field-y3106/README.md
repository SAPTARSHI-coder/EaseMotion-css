# Glitch Input Field

1. **What does this do?**  
   It provides an interactive, CSS-only text input field with chromatic aberration text-shadow shakes, multi-color glowing borders on focus, and text clip-path glitch animations on button hover.

2. **How is it used?**  
   Implement the structure using standard inputs, labels with `data-text` attributes for text duplicating overlays, and custom classes (`glitch-input`, `glitch-label`, `glitch-border-overlay`):
   ```html
   <div class="glitch-input-wrapper">
     <input type="email" id="decryption-key" class="glitch-input" placeholder=" " required />
     <label for="decryption-key" class="glitch-label" data-text="ACCESS_EMAIL">ACCESS_EMAIL</label>
     <div class="glitch-border-overlay"></div>
   </div>
   ```

3. **Why is it useful?**  
   Cyberpunk, retro-tech, and futuristic creative blogs require distinct user interactions. This glitch input provides high-impact visual design details purely in CSS, completely avoiding complex Javascript scripting overhead or layout shifts.
