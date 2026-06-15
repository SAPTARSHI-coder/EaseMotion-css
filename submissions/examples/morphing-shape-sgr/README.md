# Morphing Shape Background Animation

### 1. What does this do?
This component creates a continuous organic morphing shape background (a liquid blob) using pure CSS `border-radius` transitions.

### 2. How is it used?
Apply the `.morph-bg` class to a `div` element:

```html
<div class="morph-bg"></div>
```

**Variants:**
- **Themes**:
  - `.morph-bg-purple`: Indigo/magenta gradient color scheme.
  - `.morph-bg-fire`: Warm orange/yellow/red gradient color scheme.
- **Sizes**:
  - `.morph-sm`: Scales to a small 160px width/height.
  - `.morph-md`: Scales to a medium 300px width/height (default).
  - `.morph-lg`: Scales to a large 440px width/height.
- **Speeds**:
  - `.morph-fast`: Shortens animation duration to 4.5 seconds.
  - `.morph-slow`: Lengthens animation duration to 16 seconds.

**Example Showcase Card:**
```html
<div class="blob-card-showcase">
  <!-- Organic background blob -->
  <div class="morph-bg morph-bg-purple morph-lg morph-slow"></div>
  <!-- Content card layered on top -->
  <div class="glass-overlay-card">
    <h3 class="glass-title">Visual Impact</h3>
    <p class="glass-desc">Layer dynamic background shapes behind glass cards for stunning layout depth.</p>
  </div>
</div>
```

### 3. Why is it useful?
It provides a high-impact, modern visual design element (organic morphing liquid blobs) built entirely without heavy SVG assets, WebGL, or Canvas JavaScript dependencies. It uses a single class drop and is highly responsive, themeable, and features automated play state suspension for users with reduced motion settings.
