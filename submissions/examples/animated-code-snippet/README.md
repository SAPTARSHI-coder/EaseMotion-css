# Animated Code Snippet Block

A sleek, dark-mode **Code Snippet Block** featuring a pure CSS "Copy to Clipboard" button. This example demonstrates how to use **EaseMotion CSS** to create staggered, line-by-line fade-ins for code, syntax highlighting, and a smooth state transition for the copy button without writing any JavaScript.

## 🚀 Features

- **Staggered Line Entrances**: Uses `ease-fade-in-left` combined with `ease-delay-*` classes so each line of code appears sequentially, mimicking a live typing or loading effect.
- **Pure CSS Copy Button**: Clicking the "Copy" button smoothly transitions the text to "Copied!" with a green checkmark using the CSS checkbox hack (zero JavaScript required).
- **Syntax Highlighting**: Custom CSS classes define distinct colors for keywords, strings, variables, functions, and comments.
- **Smooth Blinking Cursor**: The waiting cursor at the end of the code uses `ease-pulse` for a continuous, smooth blinking effect.
- **GitHub Dark Aesthetic**: Features a familiar dark theme with subtle borders and soft shadows.
- **Responsive Design**: On mobile devices, the font size adjusts, and the file name is hidden to save space.

## 📂 File Structure

```text
submissions/examples/animated-code-snippet/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for dark theme, syntax colors, and copy button logic
└── README.md    # Documentation