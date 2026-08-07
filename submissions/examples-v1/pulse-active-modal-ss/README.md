# Neumorphic Pulse-Active Modal [SS]

### What does this do?
This submission introduces a pure CSS modal component tailored for Neumorphic Soft layouts. It utilizes the hidden-checkbox hack (`:checked` state) to toggle the modal state, entirely bypassing the need for JavaScript. It also introduces a smooth, infinitely looping `.pulse-active-ss` utility class to draw user attention to key action buttons.

### How is it used?
Implementation requires structural pairing of a hidden checkbox, a label trigger, and the modal overlay container:

```html
<input type="checkbox" id="modal-state" class="modal-trigger-ss" />

<label for="modal-state" class="btn-neumorphic-ss pulse-active-ss">
    Open Modal
</label>

<div class="modal-overlay-ss">
    <div class="modal-window-ss">
        <h2>Content</h2>
        <label for="modal-state" class="btn-close-ss">Close</label>
    </div>
</div>
```
### Why is it useful for EaseMotion?
EaseMotion prioritizes motion and transitions. By strictly adhering to CSS custom properties (--ease-pulse-duration-ss, --ease-modal-transition-ss), this submission allows developers to build complex, animated, and state-driven UI components with zero JavaScript overhead, perfectly aligning with EaseMotion's modular, animation-first philosophy.