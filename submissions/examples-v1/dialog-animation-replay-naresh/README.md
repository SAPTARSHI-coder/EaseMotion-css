# Dialog Animation Replay Workaround

## What does this do?
Documents workarounds for replaying entrance animations inside a native HTML `<dialog>` element on subsequent opens (since keyframe animations on already rendered DOM nodes do not re-trigger by default when a dialog is closed and reopened).

## How is it used?

### Workaround 1: JavaScript Class Toggling (For Keyframe Animations)
Trigger the reflow to replay keyframe animations (such as EaseMotion's `.ease-fade-in`):
```javascript
function openDialog() {
  const content = dialog.querySelector('.dialog-content');
  
  // Remove and re-add the animation class to force replay
  content.classList.remove('ease-fade-in');
  void content.offsetWidth; // Force reflow
  content.classList.add('ease-fade-in');
  
  dialog.showModal();
}
```

### Workaround 2: CSS `@starting-style` (For Modern Browsers, Transition-based)
Define initial transition states directly in CSS to trigger every time the dialog opens:
```css
dialog[open] .dialog-content {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.4s ease-out, transform 0.4s ease-out;
}

@starting-style {
  dialog[open] .dialog-content {
    opacity: 0;
    transform: scale(0.9);
  }
}
```

## Why is it useful?
It provides standard, robust approaches for developers to achieve polished entrance animations inside modal dialogs, preventing animations from playing only once on the first modal launch.
