# Progressive Disclosure in Homepage Button Section

## What does it do?

The **Progressive Disclosure feature** improves the homepage button section by showing only a limited number of buttons at first (e.g., 4).  
Users can click a **Load More** button to reveal additional buttons in increments of 4, and collapse back with a **View Less** button.

---

## How is it used?

On the homepage, the button section now includes a toggle button:

```html
<section id="buttons" class="demo-section">
  <div class="ease-container">
    <!-- Buttons Grid -->
    <div id="buttons-grid" class="ease-flex ease-flex-wrap ease-gap-3">
      <!-- Button items injected here -->
    </div>

    <!-- Load More Button -->
    <button id="toggle-btn" class="ease-btn ease-btn-primary ease-btn-md">
      Load More
    </button>
  </div>
</section>
<script>
  const buttons = document.querySelectorAll("#buttons .ease-btn");
  const toggleBtn = document.getElementById("toggle-btn");
  let visibleCount = 4; // initially show 4 buttons

  // Exclude the toggle button itself
  const demoButtons = Array.from(buttons).filter((btn) => btn !== toggleBtn);

  // Show first 4 buttons initially
  demoButtons.forEach((btn, index) => {
    btn.style.display = index < visibleCount ? "inline-block" : "none";
  });

  toggleBtn.addEventListener("click", () => {
    if (visibleCount < demoButtons.length) {
      visibleCount += 8; // show 8 more
      demoButtons.forEach((btn, index) => {
        btn.style.display = index < visibleCount ? "inline-block" : "none";
      });
      if (visibleCount >= demoButtons.length) {
        toggleBtn.textContent = "View Less";
      }
    } else {
      // Collapse back to first 4
      visibleCount = 4;
      demoButtons.forEach((btn, index) => {
        btn.style.display = index < visibleCount ? "inline-block" : "none";
      });
      toggleBtn.textContent = "Load More";
    }
  });
</script>
```

The JavaScript logic ensures only 4 buttons are visible initially, then reveals 4 more with each click until all buttons are shown.  
When all buttons are visible, the button changes to **View Less**, allowing users to collapse back to the initial view.

---

## Why is it useful?

- Prevents overwhelming users with too many buttons at once.
- Keeps the homepage clean and focused.
- Improves navigation and accessibility.
- Aligns with EaseMotion CSS’s **animation-first philosophy** while maintaining usability.

---

## Demo

Open `Progressive-Disclosure/demo.html` to test the **Load More / View Less** feature in the homepage button section.

```

---
```
