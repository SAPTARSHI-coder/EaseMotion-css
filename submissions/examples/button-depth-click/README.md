# Button 3D Depth Click Interaction

**What does this do?**  
Creates a tactile, 3D button click reaction by physically translating the button downward on `:active` while shrinking the corresponding bottom-border offset shadow.

**How is it used?**  
```html
<!-- 2px click depth -->
<button class="depth-btn depth-sm">Small Press</button>

<!-- 4px click depth -->
<button class="depth-btn depth-md">Medium Press</button>

<!-- 6px click depth -->
<button class="depth-btn depth-lg">Deep Press</button>
```

**Why is it useful?**  
Flat buttons can lack interactive clarity. Adding physical click physics gives buttons an incredibly satisfying mechanical and game-like tactile feel. It is performance-friendly, relying only on hardware-accelerated transforms (`translateY`) and `box-shadow` changes on `:active`.

---

Submitted by: @Antigravity  
Date: 2026-06-01  
Status: **Pending review**
