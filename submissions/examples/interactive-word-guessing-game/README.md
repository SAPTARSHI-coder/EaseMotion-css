# Interactive Word Guessing Game (Wordle-style)

A self-contained, highly interactive Wordle-style word guessing game dashboard. Built using standard HTML, CSS, and Vanilla JavaScript, it displays advanced grid pop entries, horizontal shake indicators, 3D perspective flips, victory wave jumps, and Web Audio API synthesized cues.

## Feature Overview

- **6x5 Guessing Grid**: Letter card rows with dynamic state transitions (correct/present/absent) matched with visual feedback.
- **On-Screen Keyboard**: Multi-row QWERTY screen keys that automatically track and display letter statuses (green for correct, yellow for present, grey for absent).
- **Web Audio Sound Synthesis**: Built-in sound oscillators play keystroke ticks, invalid word buzz sweeps, card flip ticks, and polyphonic victory chimes.
- **Game statistics**: Tracks game history (played count, win percentages, current streaks) locally via browser storage.
- **Victory/Defeat Modals**: Ambient rotating gradient modal panels trigger on game-ends to show game metrics.

## File Structure

```
submissions/examples/interactive-word-guessing-game/
├── demo.html
├── style.css
└── README.md
```

## How to Use

1. Open `demo.html` in any modern web browser.
2. Guess the hidden 5-letter word in 6 tries.
3. Type letters using either physical keyboards or by clicking the virtual keys on-screen.
4. Press **Enter** to submit your guess.
5. The color of the tiles will change to show how close your guess was to the secret word:
   - **Green**: The letter is in the correct spot.
   - **Yellow**: The letter is in the word but in the wrong spot.
   - **Grey**: The letter is not in the word.
6. A statistics modal overlay will appear on game completion. Click **Play Again** to start a new match.

## Controls

- **`A-Z Keys`**: Input letters.
- **`Backspace`**: Delete last inputted letter.
- **`Enter`**: Submit guess.

---

## Customization

### Modifying the Word Bank
You can expand or edit the secret word list inside the `wordList` array in `demo.html`:
```javascript
const wordList = [
  'glide', 'orbit', 'pulse', 'swing', 'scale' // Add your custom 5-letter words here
];
```

### Altering Color Schemes
Modify tile correctness colors within `style.css`:
```css
:root {
  --color-correct: #10b981; /* Neon green */
  --color-present: #f59e0b; /* Neon yellow/amber */
  --color-absent: #334155;  /* Matte slate grey */
}
```

---

## Animation Breakdown

1. **Card Entry Pop**: Typing a letter triggers a quick scale-up bounce animation (`tilePop`) inside the grid cell.
2. **Row Shake**: Submitting an incomplete guess triggers a horizontal vibration keyframe (`rowShake`) on the row.
3. **3D Card Flip**: Grid tiles rotate along their X-axis (`rotateX(180deg)`) row by row with a staggered delay (`calc(var(--col-index) * 0.15s)`) to reveal colors.
4. **Victory Bounce**: Letters in the correct winning guess execute vertical wave jumping oscillations (`victoryBounce`).
5. **Modal Scale**: The statistics modal scales up smoothly using cubic-bezier pop animations.
