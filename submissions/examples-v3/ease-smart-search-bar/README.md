# Smart Search Bar

Search bar that expands and glows with auto-suggestions, keyboard navigation, and real-time filtering.

## Features

- **Auto-Suggestions** – Real-time suggestions as you type
- **Smart Filtering** – Exact matches, starts with, contains
- **Keyboard Navigation** – ↑ ↓ to navigate, Enter to select, Esc to close
- **Search History** – Recently selected items appear first
- **Highlight Matches** – Matching text is highlighted in suggestions
- **Smooth Animations** – Expand and glow on focus
- **Clear Button** – Clear search with one click
- **Result Count** – Shows number of matches
- **Status Feedback** – Search status updates
- **Keyboard Shortcut** – Ctrl+K to focus search
- **Touch Support** – Works on mobile devices
- **Responsive** – Adapts to all screen sizes

## Technologies Used

- HTML5
- CSS3 (Animations, Transitions, Flexbox)
- Vanilla JavaScript (DOM manipulation, Event handling)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/smart-search-bar.git

2. Navigate to the project folder:
   cd smart-search-bar

3. Open demo.html in your browser

## File Structure

smart-search-bar/
├── index.html     # HTML structure with embedded JavaScript
├── style.css      # All styles and animations
└── README.md      # Documentation

## Usage

### Controls

| Action | Result |
|--------|--------|
| Type in search | Shows auto-suggestions |
| ↑ ↓ | Navigate suggestions |
| Enter | Select suggestion or search |
| Esc | Close suggestions |
| Click suggestion | Select and search |
| Clear button (✕) | Clear search |
| Ctrl+K | Focus search |

### Features

- **Auto-Suggestions** – Shows up to 15 matching suggestions
- **Smart Sorting** – History > Exact > Starts With > Contains
- **Highlighting** – Matching text is highlighted
- **Search History** – Last 10 selections remembered

## Customization

### Data Source

Modify the `data` array:
```javascript
const data = [
    'Apple',
    'Banana',
    // Add your data here
];