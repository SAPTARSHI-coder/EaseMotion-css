## ease-pwd-meter

**What does this do?**
A segmented password strength meter bar that fills and changes
color based on password strength using data-strength attribute selectors.

**How is it used?**
<div class="ease-pwd-meter" data-strength="2">
  <div class="segment"></div>
  <div class="segment"></div>
  <div class="segment"></div>
  <div class="segment"></div>
</div>

data-strength values:
- "1" → Weak (red)
- "2" → Fair (orange)
- "3" → Strong (blue)
- "4" → Very Strong (green)

**Why is it useful?**
Provides visual password strength feedback using pure CSS
data-attribute selectors — consistent with EaseMotion CSS's
human-readable, animation-first philosophy.