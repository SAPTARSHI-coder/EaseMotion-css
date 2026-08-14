# Ease Toast Fade PR

**What does this do?**  
Adds a CSS-only toast notification pattern that slides into view, stays readable, and fades out using keyframe animation.

**How is it used?**

```html
<article class="toast toast--success">
  <span class="toast-icon" aria-hidden="true">OK</span>
  <div>
    <h2>Changes saved</h2>
    <p>Your draft has been synced.</p>
  </div>
</article>
```

**Why is it useful?**  
Toast messages need to be noticeable without blocking the interface. This transition gives alerts a clear entrance and exit while preserving stack spacing and supporting reduced-motion users.

---

Submitted by: @kunal-9090  
Issue: #5367  
Status: **Pending review**
