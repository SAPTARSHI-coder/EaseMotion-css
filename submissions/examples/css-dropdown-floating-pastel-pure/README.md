# Floating Pastel Dropdown

A soft, playful pure CSS dropdown component utilizing a vibrant pastel color palette, floating shadows, and staggered spring animations.

## Features
- **Pure CSS State Management**: Functions entirely without Javascript. Uses a hidden `<input type="checkbox">` to toggle the main dropdown menu, and hidden `<input type="radio">` buttons to manage the selected state of the items.
- **Spring Physics Animations**: The dropdown menu utilizes a `cubic-bezier` timing function to pop open with a delightful, bouncy spring effect (`transform: scale()`).
- **Staggered Item Reveal**: When the menu opens, the individual list items slide in sequentially from the left. This is achieved dynamically using `nth-child` targeting and cascading `transition-delay`.
- **Dynamic Pastel Theming**: Each selectable item possesses a unique pastel hover and active state (Yellow, Blue, Pink, Green). When selected, the background deeply saturates and the text color shifts to a complementary dark hue for contrast.
- **Floating Aesthetics**: Leverages heavily rounded corners (`border-radius: 20px`) and deep, soft box-shadows to detach the component from the background, giving it a friendly, tactile feel.

## Usage
Include `demo.html` and `style.css` in your project. Ensure the `Quicksand` font is loaded in your `<head>`. This dropdown is perfectly suited for mood selectors, tag assignment, or lighthearted application interfaces.
