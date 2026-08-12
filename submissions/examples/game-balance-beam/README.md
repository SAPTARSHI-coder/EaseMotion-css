# ⚖️ Balance Beam

Stack objects on a balance beam without tipping! Master physics-based balancing with different weights, wind effects, and realistic wobbling animations.

## 🎮 How to Play

- **Drag objects** from the palette onto the beam
- **Balance** the beam by placing objects strategically
- **Remove objects** by clicking/tapping them
- **Survive** as long as possible without tipping
- **Score points** the closer you stay to perfect balance

## ✨ Features

- **⚖️ Physics-Based Balancing** - Realistic weight distribution
- **📦 4 Weight Types** - Light, Medium, Heavy, Very Heavy
- **💨 Wind Effects** - Random gusts push objects
- **🔄 Real-time Feedback** - Balance indicator shows tilt
- **🎯 Scoring System** - Points based on balance accuracy
- **📱 Drag & Drop** - Intuitive object placement
- **🌈 Visual Feedback** - Color-coded balance status
- **✨ Particle Effects** - Satisfying visual feedback

## 🎯 Object Weights

| Object | Weight | Color | Size |
|--------|--------|-------|------|
| Light | 1 | 🔴 Red | Small |
| Medium | 2 | 🟡 Gold | Medium |
| Heavy | 3 | 🟣 Purple | Large |
| Very Heavy | 5 | 🩷 Pink | X-Large |

## 💨 Wind System

- **Random gusts** push objects to one side
- **Visual indicators** show wind direction
- **Toggle on/off** for different difficulty levels
- **Dynamic force** varies over time

## 🏆 Scoring

- **Balance Bonus**: Stay near 0% balance
- **Score Rate**: Points per frame based on balance
- **High Score**: Track your best performance
- **Object Count**: More objects = higher risk/reward

## 🎨 Visual Design

- **Cyberpunk Theme** - Dark space aesthetic
- **Realistic Physics** - Smooth wobbling animations
- **Color Feedback** - Green (good) → Yellow (warning) → Red (danger)
- **Particle Effects** - Landing, removal, and tipping
- **Dynamic UI** - Real-time balance indicator

## 🛠️ Technical Details

### Physics System
```javascript
// Weight calculation
leftWeight = sum of weights on left side
rightWeight = sum of weights on right side
balance = (rightWeight - leftWeight) / totalWeight * 100

// Physics smoothing
angularVelocity += (targetAngle - currentAngle) * 0.05
angularVelocity *= damping (0.85)
angle += angularVelocity