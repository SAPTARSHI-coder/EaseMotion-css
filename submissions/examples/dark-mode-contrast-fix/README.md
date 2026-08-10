# Dark Mode Typography & Component Contrast Fix

1. **What does this do?**
   This fix overrides text colors for headings (`h1`-`h6`), card titles (`.ease-card-title`), and glass navbar links (`.ease-navbar-item`) in dark mode, changing them from hardcoded dark neutral colors to adaptively light colors matching user preferences.

2. **How is it used?**
   Once integrated, the fix automatically applies when the operating system or browser enters dark mode. Developers do not need to apply any new classes. Example:
   ```html
   <h1>This Heading becomes light-colored in dark mode</h1>
   
   <div class="ease-card">
     <h2 class="ease-card-title">This title adapts to high-contrast white in dark mode</h2>
   </div>
   ```

3. **Why is it useful?**
   It resolves a critical accessibility (WCAG AA) contrast bug in dark mode where headings, card titles, and navbar links remained almost black on very dark backgrounds, making them completely unreadable.
