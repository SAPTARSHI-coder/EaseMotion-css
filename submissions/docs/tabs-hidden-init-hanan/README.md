# Core Bug Fix Showcase: Tabs Hidden Initialization layout bug

1. **What does this do?**  
   Demonstrates and showcases a fix for the bug in `core/tabs.js` where the active tab underline remains `0px` wide if the tabs are initialized inside a hidden container (such as a modal or closed accordion pane).

2. **How is it used?**  
   The fix is implemented by utilizing a `ResizeObserver` in the javascript layer to detect when the container transitions from `display: none` to visible and dynamically update the underline width and offset values.

3. **Why is it useful?**  
   It ensures that tab underlines are correctly rendered when tab menus reside in hidden dialog components or dynamic views.
