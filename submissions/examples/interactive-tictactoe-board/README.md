# Interactive Tic-Tac-Toe Board

A self-contained, highly interactive, and visually polished Tic-Tac-Toe game dashboard. Built using HTML, CSS, and Vanilla JavaScript, it demonstrates dynamic SVG draw keyframes, staggered layouts, and matrix strikethrough line drawing transitions.

## Feature Overview

- **Interactive 3x3 Grid**: Fluid Neumorphic/Glassmorphism grid cells reacting to clicks and state shifts.
- **PVP and AI Engine**: Dual modes supporting local Player vs Player or Player vs smart AI Bot (featuring defensive blocking and offensive check logic).
- **Match Scoreboard**: Tracks win-records for Player X, ties, and Player O (or AI) in real-time.
- **Turn Status Banner**: A dynamic turn indicator bar styling active player characters with colored drop shadows.
- **Winning Strike Line drawing**: Generates a strike line overlay that rotates and scales dynamically across the winning 3-cell pattern.
- **Victory Modal Backdrop**: Slide-scale victory modal appearing on match-end to prompt play restarts.

## Folder Structure

```
submissions/examples/interactive-tictactoe-board/
├── demo.html
├── style.css
└── README.md
```

## Usage Instructions

1. Open `demo.html` in any web browser.
2. Select your desired game mode inside the toggle switch panel:
   - **Player vs Player**: Play locally with two users sharing control.
   - **Player vs AI**: Play against the smart AI decision bot.
3. Click on any free cell inside the 3x3 grid board to place your symbol (**X** starting first).
4. On win or tie, the matching strike line draws across the board, and a Victory overlay pops up with action triggers.
5. Click **Restart Match** or **Play Again** to wipe the board and start a new round.

## Customization

### Modifying AI Turn Delays
You can speed up or slow down the AI response time by modifying the timeout parameter in the `triggerAiMove()` function in `demo.html`:
```javascript
setTimeout(() => {
  // ... AI logic ...
}, 600); // Change 600ms to your desired delay
```

### Altering Color Gradients
Customize neon accent gradients inside `style.css`:
```css
:root {
  --color-x: #3b82f6; /* Blue/Cyan */
  --color-o: #ec4899; /* Pink/Rose */
  --color-tie: #f59e0b; /* Amber */
}
```

## Animation Breakdown

1. **Cell Grid Entrance**: Grid cells scale up and fade in with custom staggered delays (`animation-delay: calc(var(--cell-index) * 0.04s)`).
2. **SVG Symbol Draw**: SVG stroke-dashoffset transitions draw the diagonal strokes of X and the circular radius of O in real-time.
3. **Winner Strike Line**: Strikethrough line uses coordinate translation rules (`scaleX`, `scaleY`, `rotate(45deg)`) to draw cleanly across the winning row, column, or diagonal.
4. **Modal Pop**: The victory card scales up smoothly on trigger using cubic-bezier entrance transitions.
5. **Glow Rotation**: Ambient radial gradients rotate infinitely inside the modal background.
