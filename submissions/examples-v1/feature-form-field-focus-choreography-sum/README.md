# Form Field Focus Choreography

1. **What does this do?**  
   A self-contained form demo that choreographs floating labels, helper slide-in, error shake, and success check draw.

2. **How is it used?**  
   Open `demo.html`, focus fields, then submit with valid or invalid values:
   ```html
   <div class="field is-focused">
     <input id="email" type="email" placeholder=" " />
     <label for="email">Email</label>
   </div>
   ```

3. **Why is it useful?**  
   Form polish is usually a pile of disconnected snippets. This submission teaches one readable motion pattern for focus → help → error → success.
