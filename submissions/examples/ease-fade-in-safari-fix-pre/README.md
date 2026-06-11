## ease-fade-in-safari-fix

**What does this do?**
Fixes the fade-in animation flicker on Safari browsers by adding
-webkit- prefixes, will-change, backface-visibility, and translateZ(0).

**The Fix:**
```css
.ease-fade-in {
  will-change: opacity;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  -webkit-animation: fade-in 0.6s ease forwards;
  animation: fade-in 0.6s ease forwards;
}
```

**Why is it useful?**
Eliminates the white flash/flicker on Safari during animation
initialization — making fade-in animations smooth across all browsers.