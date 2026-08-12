# ⚡ Fix ease-rotate Abrupt Reset Between Loop Iterations

Animation optimization submission for smooth cyclic rotation.

## ✨ What it does
Prevents the visible "jump" or stutter at the end of infinite rotation cycles by implementing a strict linear timing function that ensures constant angular velocity, eliminating the default ease-in/out frame snapping.

## 🚀 How to Use
Add the following class to your loader or spinner elements:

```html
<div class="ease-rotate-smooth">
  ⚙️
</div>