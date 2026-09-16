# Animated File Upload Dropzone Component

1. **What does this do?**
   A motion-first drag/drop-style file upload dropzone with animated hover, drag-over overlay, uploading progress, and success/error states.

2. **How is it used?**
   Apply the dropzone structure using the `.dz` class (see `demo.html` for the full markup):
   
   ```html
   <label class="dz" for="file">
     <input id="file" class="dz__input" type="file" multiple />
     <div class="dz__surface" role="button" tabindex="0">...</div>
   </label>
   ```

3. **Why is it useful?**
   EaseMotion CSS is built around smooth, human-readable micro-interactions—this component shows clear visual feedback at each upload moment (idle → drag-over → uploading → done) using modern CSS animations and reduced-motion-safe behavior.

