# Rubber Band File Uploader

1. **What does this do?** A drag-and-drop file upload zone with two "rubber band" elastic animations: a continuous squash-and-stretch pulse (plus a bouncing icon) while a file is being dragged over it, and a one-shot elastic bounce triggered the moment a file is dropped or selected.
2. **How is it used?** Wrap the uploader in `.rb-uploader`, with a `.rb-icon` for the upload icon, `.rb-text` for the instruction text, and a hidden `.rb-input` file input. A small inline script toggles `.is-dragging` during `dragenter`/`dragover`/`dragleave`, and briefly adds `.rb-drop-bounce` on a successful drop or file selection (since real drag-and-drop file detection isn't achievable in pure CSS); all animation itself — the rubber-band squash/stretch, icon bounce, and drop bounce — is handled entirely by CSS keyframes.
   ```html
   <div class="rb-uploader">
     <div class="rb-icon">⬆</div>
     <p class="rb-text">Drag & drop a file here, or click to browse</p>
     <input type="file" class="rb-input">
   </div>
   ```
3. **Why is it useful?** File uploaders are one of the most commonly needed UI elements, but usually give flat, static feedback while dragging. This adds genuine sequenced elastic feedback — a looping squash-and-stretch "rubber band" effect that communicates "drop it here" more tactilely, plus a satisfying elastic bounce confirming a successful drop, fitting EaseMotion CSS's animation-first philosophy. Respects `prefers-reduced-motion` by disabling all elastic animations for users who request reduced motion, while the uploader remains fully functional.
