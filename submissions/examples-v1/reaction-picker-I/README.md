 
# Emoji Reaction Picker (ease-reaction-picker)

Popover showing a row of emoji reactions on hover over a message with stagger entrance and scale on hover.

## Files

- demo.html - Interactive demo
- style.css - Reaction picker styles
- README.md - Documentation

## Features

- 💬 Popover appears on hover over message
- ✨ Stagger entrance animations for emojis
- 📈 Emojis scale on hover
- ✅ Selected emoji gets added with pop animation
- 🚪 Closes automatically on selection
- 📊 Reaction bar shows selected emojis

## Usage

```html
<div class="message">
    <div class="message-content">
        <span class="message-avatar">👤</span>
        <div class="message-text">
            <strong>User</strong>
            <p>Message text</p>
        </div>
    </div>
    <div class="reaction-picker-trigger" data-target="message1">
        <span class="trigger-icon">😊</span>
        <span class="trigger-text">React</span>
    </div>
    <div class="reaction-picker" id="picker1">
        <div class="reaction-emoji" data-emoji="❤️">❤️</div>
        <div class="reaction-emoji" data-emoji="👍">👍</div>
    </div>
    <div class="reaction-bar" id="reactions1"></div>
</div>