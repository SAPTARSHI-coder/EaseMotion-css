# README.md

## 📦 Inventory Sort

An interactive inventory system with animated item sorting. This component captures the satisfying organization of game inventory — featuring a grid of items with emojis, names, types, rarity, quantity, weight, and value, with smooth sorting animations by name, type, rarity, or quantity.

---

## ✨ Features

- **Inventory grid** – Items displayed in a responsive grid with rich details
- **Multiple sort options** – Sort by Name, Type, Rarity, or Quantity
- **Animated sorting** – Items reorder with smooth transitions
- **Item details** – Emoji, name, type, rarity, quantity, weight, and value
- **Rarity colors** – Color-coded rarity indicators (Common → Legendary)
- **Item appearance** – Items appear with scale and fade animation
- **Inventory stats** – Total item count and total weight
- **Sort indicator** – Shows current sort method and direction
- **Interactive controls** – Add random items, reset inventory, and speed control
- **Responsive** – Adapts beautifully to any screen size
- **Zero dependencies** – Pure CSS + vanilla JavaScript

---

## 🚀 How to Use

### 1. Include the CSS

```html
<link rel="stylesheet" href="style.css" />
2. Add the HTML structure
html
<div class="is-container">
  <div class="is-scene">
    <!-- Inventory -->
    <div class="inventory">
      <div class="inventory-header">
        <span class="inventory-title">🎒 Inventory</span>
        <div class="inventory-actions">
          <button class="sort-btn" data-sort="name">🔤 Name</button>
          <button class="sort-btn" data-sort="type">📂 Type</button>
          <button class="sort-btn" data-sort="rarity">⭐ Rarity</button>
          <button class="sort-btn" data-sort="quantity">🔢 Quantity</button>
        </div>
      </div>

      <div class="inventory-grid" id="inventoryGrid">
        <!-- Items rendered by JavaScript -->
      </div>

      <div class="inventory-footer">
        <span class="item-count">Items: <span id="itemCount">0</span></span>
        <span class="total-weight">Weight: <span id="totalWeight">0</span> kg</span>
      </div>
    </div>

    <div class="sort-indicator" id="sortIndicator">
      <span class="sort-label">Sorting by: <span id="currentSort">None</span></span>
      <span class="sort-direction" id="sortDirection">⬇️</span>
    </div>
  </div>
</div>
3. Add the JavaScript
html
<script src="script.js"></script>
The script automatically manages items, sorting, rendering, controls, and interactions.

🎮 Controls
Sort Buttons – Click to sort by Name, Type, Rarity, or Quantity

Add Random Item – Add a new random item to the inventory

Reset Inventory – Clear all items

Animation Speed – Adjust the speed of all animations (0.3× to 3×)

🎨 Customization
CSS Variables
Variable	Default	Description
--item-color	#8a8a8a	Color of the item's rarity indicator
--item-delay	0s	Stagger delay for item appearance
Item Data
js
// In script.js - item templates
const itemTypes = [
  { name: 'Sword', emoji: '⚔️', type: 'Weapon', rarity: 'Rare', weight: 3.5, value: 150 },
  // ... more items
];
Rarity Colors
Rarity	Color
Common	#8a8a8a
Uncommon	#6bcb6b
Rare	#6bcbff
Epic	#b88aff
Legendary	#ffd93d
🧩 Why It Fits EaseMotion CSS
Human‑readable — Classes like .inventory-item, .item-emoji, .item-info, .item-name, .item-rarity, .item-quantity, and .sort-btn are intuitive and descriptive

Animation‑first — Items appear with CSS, reorder with CSS, and sort indicators update with CSS — all driven by the animation engine

Declarative & customizable — All timing, size, and color values are exposed via CSS custom properties

Self‑contained — Zero external dependencies — works entirely with HTML, CSS, and vanilla JavaScript

Gaming & satisfying — Captures the satisfying organization of game inventory management

Performance‑conscious — Uses CSS transitions and transforms for smooth sorting and item appearance

📁 File Structure
text
submissions/inventory-sort/
├── demo.html      # Self-contained demo
├── style.css      # All styles + keyframes
└── README.md