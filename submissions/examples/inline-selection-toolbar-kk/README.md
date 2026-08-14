# Inline Selection Toolbar

1. **What does this do?**  
   It demonstrates a floating inline action bar that appears near a focused content block to simulate modern text actions like copy, highlight, and note.

2. **How is it used?**  
   Apply the demo structure below and place the toolbar next to the text region:

   ```html
   <div class="selection-demo">
     <div class="content-block" tabindex="0">...</div>
     <div class="inline-toolbar">...</div>
   </div>
   ```

3. **Why is it useful?**  
   It brings an editor-style, motion-forward interaction pattern into EaseMotion CSS and shows how contextual actions can feel lightweight, readable, and composable with content-focused layouts.
