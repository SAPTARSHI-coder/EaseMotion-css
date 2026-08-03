# Vibrate Micro-interactions

**What does this do?**
Provides rapid, aggressive vibration animations (`vibrate-1` and `vibrate-2`) that shake an element to immediately grab the user's attention.

**How is it used?**
Apply the utility class dynamically via JavaScript when an error state occurs, or set it to run infinitely on a critical alert element.
```html
<input type="text" class="vibrate-1-ag invalid" />
<button class="vibrate-2-ag">EMERGENCY STOP</button>
```

**Why is it useful?**
Vibration is the universal UI pattern for negative feedback (like a "head shake" when entering a wrong password). This provides a pure-CSS implementation that can be easily toggled on invalid form fields or destructive actions.
