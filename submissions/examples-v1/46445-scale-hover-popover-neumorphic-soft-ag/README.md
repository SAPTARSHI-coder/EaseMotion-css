# CSS Scale-Hover Popover for Neumorphic Soft Layouts

1. **What does this do?**  
   It creates a pure HTML/CSS popover component that smoothly scales up from a hidden trigger state upon mouse hover or keyboard focus, styled specifically to blend with modern soft-embossed Neumorphic interfaces.

2. **How is it used?**  
   Apply the `.popover-wrapper` class to a positioning container holding a `.popover-trigger` button and a `.popover-panel` content panel, with optional positioning classes (`.pos-top`, `.pos-bottom`, `.pos-left`, `.pos-right`):

   ```html
   <div class="popover-wrapper pos-bottom">
     <button class="neo-btn popover-trigger" aria-haspopup="dialog">
       Trigger Button
     </button>
     <div class="popover-panel" role="dialog">
       <h3>Popover Header</h3>
       <div class="popover-body">
         <p>Content panel details go here...</p>
       </div>
     </div>
   </div>
   ```

3. **Why is it useful?**  
   It provides an interactive element that fits EaseMotion CSS's philosophy of zero-dependency, lightweight, and accessible CSS-only micro-interactions, combining a tactile springy hover animation with screen reader support and keyboard focus persistence.
