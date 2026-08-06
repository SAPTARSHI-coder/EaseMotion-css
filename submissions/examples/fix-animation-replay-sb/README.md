# Bug Fix: Motion Library animation cards do not replay animation on click (#17958)

### 1. What does this do?
Provides an interactive animation demo card template engineered with a lightweight, browser-native DOM layout cache reflow mechanism to instantly replay CSS keyframe animations upon user select clicks.

### 2. How is it used?
```javascript
// Removes the class, flushes the layout offset width pipeline, and re-appends the token
element.classList.remove('ease-animation');
void element.offsetWidth;
element.classList.add('ease-animation');