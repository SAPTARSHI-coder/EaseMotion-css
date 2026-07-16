 
# @Mention Autocomplete Dropdown (ease-mention-dropdown)

Dropdown that appears when typing @ with suggested user mentions.

## Files

- demo.html - Interactive demo
- style.css - Mention dropdown styles
- README.md - Documentation

## Features

- 🔍 Appears on @trigger in input
- 📋 Filtered list with avatar + username
- ✨ Highlighted matching text
- ⌨️ Keyboard navigation (↑↓ Enter Esc)
- 🎯 Smooth entrance animation
- 🏷️ Mention tags display

## Usage

```html
<div class="mention-wrapper">
    <div class="input-container">
        <textarea id="mentionInput"></textarea>
        <div id="mentionDropdown" class="mention-dropdown"></div>
    </div>
</div>

<script>
    const users = [
        { id: 1, name: 'Alice', username: 'alice', avatar: '👩' },
    ];
    initMentionAutocomplete('mentionInput', 'mentionDropdown', users);
</script>