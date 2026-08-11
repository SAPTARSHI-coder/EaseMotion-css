# 2048 Game

A classic 2048 puzzle game built with vanilla HTML, CSS, and JavaScript.  
The goal is to slide numbered tiles on a 4x4 grid and combine matching numbers to create a tile with the value **2048**.

---

## 🎮 How to Play

- Use the **arrow keys** (↑, ↓, ←, →) to move all tiles in a direction.
- Tiles with the same number **merge** into one when they collide.
- Each move adds a new tile (value 2 or 4) to an empty cell on the grid.
- The game **ends** when no moves are possible (grid is full and no adjacent tiles can merge).
- Your current **score** is displayed at the top.

---

## 🚀 Running the Game

1. Make sure all three files are in the same folder:
   - `index.html`
   - `style.css`
   - `README.md` (this file)

2. Open `index.html` in any modern web browser.

   > No build tools, servers, or dependencies are required.

---

## 🧩 Features

- Clean, responsive design that works on desktop and mobile.
- Keyboard controls for smooth gameplay.
- Score tracking and win/loss detection.
- Embedded README toggle inside the game (for quick reference).

---

## 📁 File Structure
game-2048-game/
├── index.html # Game structure, logic, and controls
├── style.css # Visual styling and tile colors
└── README.md # Project documentation (this file)

---

## 🛠️ Customization

- To change the grid size, modify `GRID_SIZE` in the `<script>` section of `index.html`.
- To adjust tile spawn probabilities, change the `0.9` value in the `addRandomTile()` function (higher = more 2s).

---

## 📄 License

This project is open-source and available for personal or educational use.