# Blur Card Exit

**What does this do?**
A card dismisses with opacity, blur, scale, and downward motion to create a soft exit state.

**How is it used?**

```html
<article class="blur-card">
  <span class="status-pill">Review ready</span>
  <h2>Motion token audit</h2>
  <p>This card can exit with the blur-card-exit keyframe.</p>
</article>
```

**Why is it useful?**
Exit animations help users understand that an item was dismissed or removed instead of simply disappearing. This version stays pure CSS and focused on a single card pattern, making it straightforward for EaseMotion CSS to standardize as a reusable exit utility.
