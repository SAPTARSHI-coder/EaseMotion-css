### 1. What does this do?
This is a responsive, smooth-collapsing Animated Sidebar component that transitions fluidly between an expanded state with text labels and a collapsed state showing only icons.

### 2. How is it used?
Apply the `animated-sidebar` class to your sidebar container and toggle the `collapsed` class via JavaScript to trigger the width transition. Use `.icon` and `.text` wrappers inside your links so the text can fade and slide out smoothly during the collapse.

```html
<nav class="animated-sidebar" id="sidebar">
    <button class="toggle-btn" onclick="document.getElementById('sidebar').classList.toggle('collapsed')">☰</button>
    <ul class="sidebar-menu">
        <li><a href="#"><span class="icon">🏠</span><span class="text">Home</span></a></li>
    </ul>
</nav>
```

### 3. Why is it useful?
This fits perfectly with EaseMotion's philosophy of fluid layout transitions, using high-performance cubic-bezier easing to prevent jarring layout jumps while preserving critical screen real estate on smaller screens or dashboards.
