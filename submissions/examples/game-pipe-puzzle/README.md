# 🔧 Pipe Puzzle Game

A challenging puzzle game where you connect pipes to create a water flow path from sources to targets. Rotate pipes strategically to solve each puzzle!

## 🎮 How to Play

1. **Click** on any pipe to rotate it 90° clockwise
2. **Connect** all water sources (💧) to targets (🎯)
3. **Plan ahead** - each move counts toward your rating
4. **Complete** the puzzle to see your time and moves

## ✨ Features

- **Multiple Difficulty Levels** - 4x4 to 7x7 grids
- **Flow Animation** - See water flowing through connected pipes
- **Move Counter** - Track your efficiency
- **Timer** - Challenge yourself to solve quickly
- **Rating System** - Get 1-3 stars based on performance
- **Auto-Solve** - Visual feedback when pipes connect
- **Responsive Design** - Works on all devices

## 🎯 Game Mechanics

- **Pipe Types**: Straight, Corner, Tee, Cross
- **Sources**: Water entry points (top row)
- **Targets**: Water exit points (bottom row)
- **Connections**: Pipes automatically connect when rotated correctly
- **Flow Detection**: BFS algorithm checks all paths

## 🎨 Visual Design

- **Neon Cyberpunk Theme** - Dark background with glowing pipes
- **Color Coding**: 
  - 🟢 Green: Water sources
  - 🔴 Red: Targets
  - 🔵 Teal: Connected pipes
  - ⚪ Gray: Unconnected pipes
- **Smooth Animations**: Water flow pulses through connected paths
- **Hover Effects**: Interactive feedback on pipe selection

## 📱 Controls

| Action | Input |
|--------|-------|
| Rotate Pipe | Click/Tap on pipe |
| New Puzzle | Click "New Puzzle" button |
| Change Grid Size | Click size buttons (4x4 - 7x7) |
| Next Puzzle | Click "Next Puzzle" on victory screen |

## 🏆 Scoring System

- **⭐⭐⭐**: ≤ grid_size × 3 moves (Excellent!)
- **⭐⭐**: ≤ grid_size × 5 moves (Good)
- **⭐**: > grid_size × 5 moves (Keep practicing)

## 🔧 Technical Details

### Built With
- **HTML5 Canvas** - Game rendering
- **CSS3** - Styling and animations
- **Vanilla JavaScript** - Game logic and physics

### Algorithms Used
- **BFS (Breadth-First Search)** - Flow detection and pathfinding
- **Grid-Based Pathfinding** - Determining pipe connections
- **Procedural Generation** - Creating solvable puzzles

### Data Structures
- **2D Grid** - Stores pipe types, rotations, and connection status
- **Queue** - BFS traversal for flow detection
- **Set** - Visited cells tracking

## 🚀 Installation

1. Clone or download the repository
2. Open `demo.html` in your browser
3. No server required - works offline!

## 🎯 Tips & Strategies

1. **Start from sources** - Trace paths from water sources outward
2. **Check targets** - Work backwards from targets to find connections
3. **Use corners** - Corner pipes are key to changing direction
4. **Count your moves** - Efficiency matters for high ratings
5. **Practice small grids** - Master 4x4 before moving up

## 🔄 Future Enhancements

- [ ] Undo moves
- [ ] Hint system
- [ ] Multiple water sources per puzzle
- [ ] Level progression system
- [ ] Sound effects
- [ ] Daily challenges
- [ ] Leaderboard

## 📄 License

MIT License - Free to use and modify

---

**Enjoy the puzzle! 🧩💧**