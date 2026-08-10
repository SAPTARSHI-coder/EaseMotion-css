# Fix Button Focus Visible (Issue #9804)

1. **What does this do?**  
   Adds `:focus-visible` styles to the base `.ease-btn` component to improve keyboard accessibility.

2. **How is it used?**  
   Apply these additional styles to the existing `.ease-btn` class definition.

3. **Why is it useful?**  
   Resolves bug #9804. It ensures keyboard users get a clear, distinct focus ring when tabbing through buttons, while preventing unnecessary focus rings when clicking with a mouse.
