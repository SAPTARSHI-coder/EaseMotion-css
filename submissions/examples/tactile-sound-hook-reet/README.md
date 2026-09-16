# Tactile Sound & Haptic Micro-Feedback Hook

**What does this do?**  
This is a zero-dependency Web Audio API synthesizer that dynamically generates subtle, professional micro-audio feedback (pop, click, tap, success, hover, toggle) and triggers mobile haptic vibrations based on HTML data attributes.

**How is it used?**  
Simply add the appropriate `data-ease-sound` or `data-ease-sound-hover` attributes to your HTML elements. 
```html
<button class="ease-btn" data-ease-sound="pop">Pop Sound</button>
<button class="ease-btn" data-ease-sound="click">Click Sound</button>
<button class="ease-btn" data-ease-sound="tap">Tap Sound</button>
<button class="ease-btn" data-ease-sound="toggle-on">Toggle On</button>
<button class="ease-btn" data-ease-sound="toggle-off">Toggle Off</button>
<button class="ease-btn" data-ease-sound="success">Success Chime</button>
<div data-ease-sound-hover>Hover over me</div>
```

**Why is it useful?**  
It provides an immersive, multi-sensory UI experience by pairing motion with tactile sound and haptics without requiring any external assets (no .mp3 or .wav files) or extra network requests. This aligns with EaseMotion's philosophy of delivering premium, responsive, and ultra-lightweight UI interactions declaratively through HTML attributes.
