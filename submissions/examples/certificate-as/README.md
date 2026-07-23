# Certificate

### What does this do?

It shows an award certificate with a gold frame and corner flourishes, a title, the recipient's name on a ruled line, a description, two signature lines, and a gold seal with ribbon tails. It is styled to look printed, entirely in CSS.

### How is it used?

```html
<div class="cert">
  <div class="cert-frame">
    <span class="corner tl"></span>
    <h1 class="cert-title">Achievement</h1>
    <p class="cert-name">Arhan Ansari</p>
    <div class="seal"><span class="seal-star">&#9733;</span></div>
  </div>
</div>
```

A gold gradient border wraps an inner frame, four `corner` spans draw the L shaped flourishes, and the `seal` is a radial gradient circle with two clipped `ribbon` tails. Serif type gives the formal feel.

### Why is it useful?

Course platforms, awards, and events issue certificates. This provides a polished certificate layout with a frame, seal, and signature lines using only CSS, ready to fill with real names and dates.
