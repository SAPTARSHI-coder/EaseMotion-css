
# Progressive Disclosure in Homepage Card Section

## What does it do?

The **Progressive Disclosure feature** improves the homepage card section by showing only a limited number of cards at first (e.g., 3).  
Users can click a **Load More** button to reveal additional cards in increments of 4, and collapse back with a **View Less** button.

---

## How is it used?

On the homepage, the card section now includes a toggle button:

```html
<section id="cards" class="demo-section">
  <div class="ease-container">
    <!-- Cards Grid -->
    <div id="cards-grid" class="ease-grid ease-grid-auto ease-gap-6">
      <!-- Card items injected here -->
    </div>

    <!-- Load More Button -->
    <button id="toggle-btn" class="ease-btn ease-btn-primary ease-btn-md">
      Load More
    </button>
  </div>
</section>
<script>
  const cards = document.querySelectorAll('#cards .ease-card');
  const toggleBtn = document.getElementById('toggle-btn');
  let visibleCount = 4; // initially show 4 cards

  // Show first 4 cards initially
  cards.forEach((card, index) => {
    card.style.display = index < visibleCount ? 'block' : 'none';
  });

  toggleBtn.addEventListener('click', () => {
    // If more cards are hidden, show 4 more
    if (visibleCount < cards.length) {
      visibleCount += 4;
      cards.forEach((card, index) => {
        card.style.display = index < visibleCount ? 'block' : 'none';
      });
      // Change button text when all cards are visible
      if (visibleCount >= cards.length) {
        toggleBtn.textContent = 'View Less';
      }
    } else {
      // Collapse back to first 4
      visibleCount = 4;
      cards.forEach((card, index) => {
        card.style.display = index < visibleCount ? 'block' : 'none';
      });
      toggleBtn.textContent = 'Load More';
    }
  });
</script>
```

The JavaScript logic ensures only 4 cards are visible initially, then reveals 4 more with each click until all cards are shown.  
When all cards are visible, the button changes to **View Less**, allowing users to collapse back to the initial view.

---

## Why is it useful?

- Prevents overwhelming users with too many cards at once.  
- Keeps the homepage clean and focused.  
- Improves navigation and accessibility.  
- Aligns with EaseMotion CSS’s **animation-first philosophy** while maintaining usability.

---

## Demo

Open `Progressive-Disclosure/demo.html` to test the **Load More / View Less** feature in the homepage card section.
```

---

