# Dynamic WCAG Color Contrast Mixin

1. **What does this do?**  
   Provides a SCSS function and mixin that calculates the relative luminance of a background color and automatically selects either a light or dark text color to ensure optimal readability.

2. **How is it used?**

   ```scss
   @use "color-contrast" as ease;

   .alert-banner-success {
     // Automatically sets green background and calculates whether dark or light text has better contrast
     @include ease.ease-contrast-text(#22c55e);
   }

   .alert-banner-dark {
     @include ease.ease-contrast-text(#1e1b4b);
   }
   ```

3. **Why is it useful?**  
   Accessibility is a core design principle of EaseMotion CSS. This SCSS tool automates contrast compliance, saving developers from manually calculating contrast ratios for text elements on varied background colors.
