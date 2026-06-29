# Progressive Disclosure in Homepage Motion Library

## What does it do?

The **Progressive Disclosure feature** improves the homepage motion library by showing only a limited number of animation cells at first (e.g., 4).  
Users can click a **Load More** button to reveal additional animations in increments of 4, and collapse back with a **View Less** button.

---

## How is it used?

On the homepage, the motion library section now includes a toggle button:

```html
<section id="animations" class="demo-section">
  <div class="ease-container">
    <!-- Animation Cells -->
    <div id="animations-grid" class="ease-flex ease-flex-wrap ease-gap-6">
      <!-- Animation items injected here -->
    </div>

    <!-- Load More Button -->
    <button id="anim-toggle-btn" class="ease-btn ease-btn-primary ease-btn-md">
      Load More
    </button>
  </div>
</section>
<script>
  const animCells = document.querySelectorAll('#animations .anim-cell');
  const animToggleBtn = document.getElementById('anim-toggle-btn');
  let visibleCount = 4; // initially show 4 animations

  // Show first 4 animations initially
  animCells.forEach((cell, index) => {
    cell.style.display = index < visibleCount ? 'inline-block' : 'none';
  });

  animToggleBtn.addEventListener('click', () => {
    if (visibleCount < animCells.length) {
      visibleCount += 4; // show 4 more
      animCells.forEach((cell, index) => {
        cell.style.display = index < visibleCount ? 'inline-block' : 'none';
      });
      if (visibleCount >= animCells.length) {
        animToggleBtn.textContent = 'View Less';
      }
    } else {
      // Collapse back to first 4
      visibleCount = 4;
      animCells.forEach((cell, index) => {
        cell.style.display = index < visibleCount ? 'inline-block' : 'none';
      });
      animToggleBtn.textContent = 'Load More';
    }
  });
</script>
```

The JavaScript logic ensures only 4 animations are visible initially, then reveals 4 more with each click until all animations are shown.  
When all animations are visible, the button changes to **View Less**, allowing users to collapse back to the initial view.

---

## Why is it useful?

- Prevents overwhelming users with too many animations at once.  
- Keeps the motion library clean and focused.  
- Improves navigation and accessibility.  
- Aligns with EaseMotion CSS’s **animation-first philosophy** while maintaining usability.

---

## Demo

Open `Progressive-Disclosure/demo.html` to test the **Load More / View Less** feature in the homepage motion library.
```



