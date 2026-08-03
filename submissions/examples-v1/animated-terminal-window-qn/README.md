# Animated Terminal / Command Line Window

## Description
A realistic, animated developer terminal window that simulates a user typing commands and receiving output. It features a macOS-style window header with traffic light buttons, a smooth typing effect using CSS `steps()`, staggered line reveals, and a continuously blinking cursor at the end. Built entirely with pure CSS, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure for the terminal window, header, and individual lines of text.
- `style.css`: Contains the terminal styling, `steps()` typing animations, staggered delays, and blinking cursor keyframes.

## How to use
1. Open `demo.html` in your browser to watch the terminal execute the commands automatically.
2. Copy the HTML and CSS into your project.
3. **Customization:**
   - **Change Commands:** If you change the text inside `.command-qn`, you **must** update the `steps(X, end)` and `width: Xch` values in the CSS to match the exact character count of your new string.
   - **Timing:** Adjust the `animation-delay` values on the `.terminal-line-qn` elements to change how fast the sequence plays out.
   - **Colors:** Change the prompt color (`#27c93f`), command text color (`#ffffff`), and output text color (`#aaaaaa`) in the CSS.
   - **Theme:** Change the background colors in `.terminal-window-qn` and `.terminal-header-qn` to create a light-mode or different colored terminal.

## Features
- **Realistic UI:** Includes a macOS-style header with red, yellow, and green window controls.
- **Typing Effect:** Uses `steps()` timing function to simulate character-by-character typing.
- **Blinking Cursor:** The active command and the final prompt feature a realistic blinking block cursor.
- **Staggered Execution:** Output lines appear only after the preceding command has finished "typing".
- **Fully Responsive:** Adapts font sizes and layout for mobile screens.