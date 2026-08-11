# 🔐 Random Password Generator

A simple, secure password generator that creates strong passwords based on your preferences.

## 🚀 Features

- **Customizable Length**: Choose from 4 to 32 characters using an intuitive slider
- **Character Options**: Toggle between:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Special symbols (!@#$%^&*()_+-=[]{}|;:,.<>?)
- **One-Click Copy**: Copy generated passwords with a single click
- **Modern UI**: Clean, responsive design with gradient accents
- **Instant Generation**: Automatically generates a password on page load

## 🛠️ How It Works

1. The user selects desired password length using the slider
2. Checks/unchecks character type boxes
3. Clicks "Generate Password" or loads the page
4. The script randomly picks characters from selected sets
5. Password appears in the display field
6. Click "Copy" to save to clipboard

## 🔒 Security Considerations

- **True Randomness**: Uses `Math.random()` which is suitable for non-critical applications
- **Character Sets**: Includes common special characters to increase entropy
- **Length Range**: Minimum 4 characters prevents too-short passwords
- **Visual Feedback**: Shows copied confirmation to prevent double copying

### ⚠️ Important Security Notes

- **Not Recommended for Critical Systems**: For banking, government, or enterprise use, consider using a cryptographically secure random generator (`crypto.getRandomValues()`)
- **Client-Side Only**: All processing happens in your browser - no data is sent anywhere
- **No Storage**: Passwords are never saved, stored, or logged

## 📦 Character Sets Used

| Set | Characters | Example |
|-----|------------|---------|
| Uppercase | ABCDEFGHIJKLMNOPQRSTUVWXYZ | `ABCDEF` |
| Lowercase | abcdefghijklmnopqrstuvwxyz | `abcdef` |
| Numbers | 0123456789 | `123456` |
| Symbols | !@#$%^&*()_+-=[]{}|;:,.<>? | `!@#$%^` |

## 📱 Usage

1. Open `index.html` in any modern browser
2. Adjust length using the slider (default: 16)
3. Select/deselect character types
4. Click "Generate Password" or refresh for a new one
5. Click "Copy" to copy to clipboard

## 🎨 Styling

The interface uses:
- **Gradient Background**: Purple-blue gradient for visual appeal
- **Card Design**: Centered white card with shadow for focus
- **Responsive**: Adapts to mobile and desktop screens
- **Interactive Feedback**: Hover effects, copy confirmation, and smooth transitions

## 🧪 Browser Compatibility

Works on all modern browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

MIT License - Free to use, modify, and distribute.

---

**Made with ❤️ for secure password generation**