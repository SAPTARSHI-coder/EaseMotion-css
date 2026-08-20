# Retro Arcade Pixel Form

A pure CSS form featuring a retro 8-bit arcade aesthetic with pixelated borders and interactive press effects.

## Usage

```html
<div class="arcade-form-container">
    <h2 class="arcade-title">INSERT COIN</h2>
    <form class="arcade-form">
        <div class="arcade-input-group">
            <label for="player-name">PLAYER NAME</label>
            <input type="text" id="player-name" placeholder="ENTER NAME" required>
        </div>
        <div class="arcade-input-group">
            <label for="player-email">EMAIL</label>
            <input type="email" id="player-email" placeholder="ENTER EMAIL" required>
        </div>
        <button type="submit" class="arcade-submit-btn">START GAME</button>
    </form>
</div>
```

## Features

- **Retro 8-bit Aesthetic**: Uses a pixelated font and blocky layouts mimicking classic arcade screens.
- **Pixelated Borders**: Achieved entirely through CSS `box-shadow` without requiring external images.
- **Hardware-Accelerated Transitions**: Smooth, performant `transform` based 3D button press interactions.
- **Dark Mode Compatible**: Automatic adjustment of theme colors based on the user's system preferences.
