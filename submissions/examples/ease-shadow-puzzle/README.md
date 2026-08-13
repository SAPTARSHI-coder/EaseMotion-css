# Shadow Puzzle · Arrange Shadows to Form Shape 🌓

An interactive shadow puzzle where you drag and arrange shadow pieces to form a complete shape. Solve the puzzle by placing all pieces correctly!

## Features

- 🌓 **Shadow Pieces** – Drag pieces to form the complete shape
- 🎯 **Target Ghost** – Faint outline shows where pieces should go
- ✅ **Snap Placement** – Pieces snap into place when positioned correctly
- 🎉 **Completion Detection** – Puzzle complete when all pieces are placed
- 🔄 **Random Puzzles** – Each reset generates a new shape
- 🎮 **Drag & Drop** – Intuitive piece manipulation
- ⏸️ **Pause/Resume** – Toggle animation
- 🔄 **Reset** – Generate new puzzle
- 📱 **Touch Support** – Works on mobile devices

## How to Use

1. **Drag** shadow pieces with your mouse or finger
2. Move pieces toward the ghost outline
3. Pieces **snap** into place when positioned correctly
4. Complete the puzzle when all pieces are placed
5. Press **RESET** for a new puzzle
6. Press **Space** or click **PAUSE** to pause/resume animation

## Controls

| Action | Method |
|--------|--------|
| Drag Piece | Click and drag / Touch drag |
| Reset Puzzle | Reset button / R key |
| Pause/Resume | Space / Pause button |

## Visual Features

| Feature | Description |
|---------|-------------|
| Shadow Pieces | Dark, translucent shadow shapes |
| Target Ghost | Faint outline of complete shape |
| Snap Indicator | Green glow when piece is placed |
| Completion Glow | Celebration glow when puzzle is complete |
| Random Shapes | Unique shapes each puzzle |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Pieces:** 4-6 pieces per puzzle
- **Shapes:** Random polygon shapes (5-8 vertices)
- **Snap Detection:** Distance-based (30px threshold)
- **Drag System:** Smooth piece manipulation
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Piece Count:** Modify `numPieces` range (4-6)
- **Shape Complexity:** Adjust `numPoints` range (5-8)
- **Snap Threshold:** Change threshold value (30)
- **Colors:** Modify piece color array
- **Puzzle Difficulty:** Adjust scatter distance

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Touch support for mobile devices

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Arrange shadows to reveal the complete shape!*