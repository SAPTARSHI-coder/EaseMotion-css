# Yo-yo Trick · Yo-yo Goes Up and Down 🪀

An interactive yo-yo with realistic physics, string animation, and up/down trick mechanics. Throw the yo-yo and watch it return with satisfying physics!

## Features

- 🪀 **Realistic Physics** – Gravity, string tension, and return mechanics
- ⬆️⬇️ **Up/Down Motion** – Throw and return animation
- 🎚️ **Gravity Control** – Adjust gravity strength (1-10)
- 🎚️ **String Control** – Adjust string speed (1-10)
- 📊 **Speed Display** – Real-time velocity readout
- 🔄 **Throw Counter** – Tracks number of throws
- ⏸️ **Pause/Resume** – Toggle animation
- 🔄 **Reset** – Reset yo-yo
- 🎨 **Detailed Design** – Hand, string, and yo-yo rendering

## How to Use

1. Click **THROW** or press **Space** to throw the yo-yo
2. Watch it go down and return automatically
3. Adjust **Gravity** for faster/slower fall
4. Adjust **String** for return speed
5. Press **RESET** or **R** to reset
6. Press **PAUSE** or **P** to pause/resume animation

## Controls

| Action | Method |
|--------|--------|
| Throw | Throw button / Space |
| Reset | Reset button / R key |
| Pause/Resume | Pause button / P key |
| Gravity | Gravity slider |
| String Speed | String slider |

## Visual Features

| Feature | Description |
|---------|-------------|
| Hand | Iconic hand holding the string |
| String | Curved string with glow |
| Yo-yo | Detailed yo-yo with rings |
| Spin | Yo-yo spins during motion |
| Glow | Speed-dependent glow effect |

## Physics Parameters

| Parameter | Description | Range |
|-----------|-------------|-------|
| Gravity | Downward acceleration | 0.1-0.5 |
| Velocity | Speed of yo-yo | Variable |
| String Length | Max extension | 300px |
| Spin | Rotation accumulation | Variable |

## Files Included

- `index.html` – Main HTML file with embedded JavaScript
- `style.css` – All styling and animations
- `README.md` – This documentation

## Technical Details

- **Physics:** Gravity with string tension and return
- **Rendering:** Hand, string, and yo-yo with details
- **Controls:** Real-time parameter adjustment
- **Performance:** 60fps with requestAnimationFrame

## Customization

You can easily customize:
- **Gravity:** Modify slider range (1-10)
- **String Speed:** Modify slider range (1-10)
- **Yo-yo Size:** Adjust `yoSize` (30)
- **Max String:** Modify `maxStringLength` (300)
- **Colors:** Adjust yo-yo gradient colors

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge

## Run Locally

Simply open `index.html` in your browser – no server required!

---

*Throw the yo-yo and watch it return!*