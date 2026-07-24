# Notification Stack

Notifications that stack and slide with different priorities, auto-dismiss, and interactive controls.

## Features

- **Priority Stacking** – Higher priority notifications appear at top
- **4 Notification Types** – Info, Success, Warning, Error
- **Auto-Dismiss** – Notifications disappear after set duration
- **Progress Bar** – Visual timer showing remaining time
- **Slide Animation** – Smooth entrance and exit animations
- **Pause/Resume** – Pause all notifications with one click
- **Keyboard Shortcuts** – 1 (Info), 2 (Success), 3 (Warning), 4 (Error), C (Clear), SPACE (Pause)
- **Click to Dismiss** – Click any notification to dismiss it
- **Priority Levels** – Error > Warning > Success > Info
- **Time Display** – Shows elapsed time since notification appeared
- **Clear All** – Remove all notifications at once
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Transitions, Flexbox)
- Vanilla JavaScript (DOM manipulation, Animation loop)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/notification-stack.git

2. Navigate to the project folder:
   cd notification-stack

3. Open demo.html in your browser

## File Structure

notification-stack/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| "Info" | Add info notification |
| "Success" | Add success notification |
| "Warning" | Add warning notification |
| "Error" | Add error notification |
| "Clear All" | Remove all notifications |
| "Pause" | Pause/Resume all timers |
| Click notification | Dismiss it |
| 1 | Add info |
| 2 | Add success |
| 3 | Add warning |
| 4 | Add error |
| C | Clear all |
| SPACE | Pause/Resume |

### Notification Types

| Type | Priority | Duration | Color |
|------|----------|----------|-------|
| Info | 1 (lowest) | 3s | Blue |
| Success | 2 | 4s | Green |
| Warning | 3 | 5s | Yellow |
| Error | 4 (highest) | 6s | Red |

### Priority Stacking

- Error notifications appear at the top
- Followed by Warning, Success, then Info
- New notifications are inserted based on priority

## Customization

### Adding Notification Types

Add to `types` object:
```javascript
const types = {
    myType: {
        icon: '📌',
        color: '#ff6b6b',
        bg: 'rgba(255, 107, 107, 0.12)',
        border: 'rgba(255, 107, 107, 0.2)',
        label: 'My Type'
    }
};