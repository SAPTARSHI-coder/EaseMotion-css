# Button Loading / Spinner State

1. **What does this do?**
   Adds an `.ease-btn-loading` modifier class that displays a CSS-only spinning indicator inside any `.ease-btn` element. The button text is visually hidden (replaced by the spinner), pointer events are disabled, and the animation uses a dedicated `ease-kf-btn-spin` keyframe. Works with all existing button variants, sizes, and modifiers (pill, block, icon, etc.).

2. **How is it used?**

   ```html
   <button class="ease-btn ease-btn-primary ease-btn-loading">Submit</button>

   <button class="ease-btn ease-btn-outline ease-btn-lg ease-btn-loading">
     Loading...
   </button>

   <script>
     btn.classList.add("ease-btn-loading");
     btn.disabled = true;
     btn.classList.remove("ease-btn-loading");
     btn.disabled = false;
   </script>
   ```

3. **Why is it useful?**
   Buttons frequently trigger async operations (form submissions, API calls, file uploads). Without a built-in loading state, developers must write custom CSS for a spinner, correctly position it, and ensure it works across all button variants. `.ease-btn-loading` provides a drop-in, accessible, consistently styled solution that integrates with EaseMotion CSS's existing button system — no custom CSS needed.
