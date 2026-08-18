# Advanced Component v31 - Glowing Neon Cyberpunk Button

**What does this do?**  
This component is a spectacular, futuristic animated neon button. It features four distinct glowing light beams that trace around the border of the button sequentially on hover, culminating in a brilliant neon glow and a beautiful floor reflection created using `-webkit-box-reflect`.

**How is it used?**  

```html
<button class="ease-neon-btn">
    <!-- The 4 spans represent the animated glowing lines -->
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Cyberpunk
</button>
```

**Why is it useful?**  
Cyberpunk and "hacker" aesthetics are highly popular. By utilizing native CSS `box-shadow` stacking, absolute positioned `span` elements, and sequential transition delays (`transition-delay: 0.25s`, etc.), we achieve an incredibly complex 2D light-tracing animation engine strictly in pure CSS. No heavy Canvas or JS timing functions are needed!
