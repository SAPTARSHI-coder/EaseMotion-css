# Speed Dial — Quick Action FAB Menu (ss)

1. **What does this do?**  
   A floating action button that expands into multiple secondary action buttons with staggered entrance animation, 4 direction variants, tooltip labels, click-outside and Escape-to-close, and proper ARIA attributes.

2. **How is it used?**  

   ```html
   <div class="speed-dial-ss speed-dial-ss-up" role="group" aria-label="Quick actions">
     <button class="speed-dial-ss-trigger"
             aria-expanded="false"
             aria-haspopup="true"
             aria-label="Open actions">
       <span class="icon-plus" aria-hidden="true">+</span>
     </button>
     <div class="speed-dial-ss-actions" role="menu">
       <button class="speed-dial-ss-action" role="menuitem" aria-label="Add file">
         <span aria-hidden="true">📄</span>
         <span class="speed-dial-ss-label">Add file</span>
       </button>
       <!-- more action buttons -->
     </div>
   </div>
   ```

   Change direction by replacing `speed-dial-ss-up` with `-down`, `-left`, or `-right`.\
   Toggle the `.open` class via JavaScript to show/hide actions.

3. **Why is it useful?**  
   EaseMotion CSS has a single-action FAB but no multi-action speed dial. This component fills that gap with the framework's animation-first philosophy — staggered scale+fade entrance, smooth icon rotation, and tooltip reveals — while keeping the code fully CSS-driven with just a small JS toggle handler.
