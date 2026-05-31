# Ease Ripple

**What does this do?**  
Adds a pure CSS click ripple that expands and fades inside a button without JavaScript.

**How is it used?**  
```html
<button class="ripple-button">Save changes</button>
<button class="ripple-button ripple-pill" style="--ease-ripple-color: rgba(255,255,255,0.5)">
  Continue
</button>
```

**Why is it useful?**  
Ripple feedback makes buttons feel tactile on mouse and touch devices. This submission keeps the effect self-contained with `::after`, supports rounded and pill-shaped buttons through `overflow: hidden`, and lets developers tune the ripple color through `--ease-ripple-color`.

---

Submitted by: @saurabhhhcodes  
Issue: #128  
Status: **Pending review**
