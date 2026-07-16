# ease-glass & ease-neumorph — Visual Effect Utilities

1. **What does this do?**
   Adds glassmorphism (`.ease-glass`, `.ease-glass-sm`, `.ease-glass-lg`) and neumorphism (`.ease-neumorph`, `.ease-neumorph-inset`) utility classes. Glassmorphism provides a frosted glass effect using `backdrop-filter: blur()`. Neumorphism provides soft 3D raised/pressed shadows. Both include dark mode support via `prefers-color-scheme`.

2. **How is it used?**

   ```html
   <!-- Glassmorphism -->
   <div class="ease-glass">Default blur (12px)</div>
   <div class="ease-glass ease-glass-sm">Subtle blur (6px)</div>
   <div class="ease-glass ease-glass-lg">Heavy blur (24px)</div>

   <!-- Neumorphism -->
   <div class="ease-neumorph">Soft raised card</div>
   <div class="ease-neumorph ease-neumorph-inset">Pressed state</div>
   ```

3. **Why is it useful?**
   Glassmorphism and neumorphism are two of the most popular modern UI design trends. Instead of writing custom `backdrop-filter` and complex `box-shadow` stacks, developers can apply these effects with a single class. Dark mode support is automatic, and the classes compose with other EaseMotion utilities.
