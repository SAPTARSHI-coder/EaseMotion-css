# 🌊 Underwater Explorer

Dive deep into the ocean! Collect pearls, avoid sea creatures, and manage your oxygen in this immersive underwater adventure.

## 🎮 How to Play

- **Move** your mouse or finger to guide the diver
- **Collect 💎 pearls** for points
- **Collect 🫧 air bubbles** to restore oxygen
- **Avoid 🦈 sharks** and 🌊 jellyfish
- **Survive** as long as possible!

## ✨ Features

- **🌊 Immersive Ocean Environment** - Gradient water with light rays
- **🫧 Oxygen System** - Depletes over time, restore with bubbles
- **💎 Pearl Collection** - Score points by collecting treasures
- **🐠 Sea Creatures** - Jellyfish and sharks with AI movement
- **📈 Depth Progression** - Go deeper for higher scores
- **🎨 Bioluminescent Creatures** - Glowing jellyfish with colors
- **🖱️ Smooth Controls** - Mouse and touch support
- **📊 Real-time Stats** - Pearls, oxygen, score, depth

## 🎯 Game Objects

| Object | Effect | Points |
|--------|--------|--------|
| 💎 Pearl | Collect for points | +50 |
| 🫧 Air Bubble | Restore oxygen | +15-35% |
| 🦈 Shark | Lose oxygen | -35% |
| 🌊 Jellyfish | Lose oxygen | -20% |

## 📈 Scoring

| Action | Points |
|--------|--------|
| Pearl Collected | +50 |
| Depth Bonus | +0.05 per frame |
| Survival Time | Continuous scoring |

## 🎮 Controls

| Action | Desktop | Mobile |
|--------|---------|--------|
| Move Diver | Mouse move | Touch drag |
| Start Game | Click "Start Dive" | Tap button |
| Restart | Click "Dive Again" | Tap button |
| Keyboard | Arrow keys | - |

## 💡 Tips & Strategies

1. **Watch Your Oxygen** - It depletes faster at deeper depths
2. **Prioritize Bubbles** - Oxygen is your lifeline
3. **Avoid Creatures** - Both sharks and jellyfish drain oxygen
4. **Collect Pearls** - They give the most points
5. **Stay Shallow** - If oxygen is low, move up
6. **Keep Moving** - Constant motion helps avoid threats

## 🛠️ Technical Details

### Physics & Game Systems
- Smooth player movement with lerp
- Oxygen depletion based on depth
- AI movement for sea creatures
- Particle effects for interactions

### Object Spawning
```javascript
// Spawn timers with randomization
pearlSpawnTimer: 120-180 frames
bubbleSpawnTimer: 200-300 frames
jellyfishSpawnTimer: 300-400 frames
sharkSpawnTimer: 500-700 frames