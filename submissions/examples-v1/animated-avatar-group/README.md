# Animated Avatar Group/Stack

A clean, modern, and fully responsive **Avatar Group Component** perfect for showing team members, collaborators, followers, or participants. This example demonstrates how to combine **EaseMotion CSS** for staggered entrances, smooth hover expansions, and interactive status indicators to create an engaging user presence display.

## 🚀 Features

- **Staggered Avatar Entrances**: Uses `ease-fade-in-up` combined with `ease-delay-*` classes so each avatar cascades in sequentially on page load.
- **Overlapping Stack Layout**: The "Project Collaborators" section shows avatars overlapping with negative margins, creating a compact team display.
- **Smooth Hover Expansion**: When hovering over the stack, avatars smoothly spread apart to reveal each user clearly.
- **Interactive Hover States**: Uses `ease-hover-grow` for satisfying scale effects on individual avatars.
- **Status Indicators**: Three distinct status states (online, offline, busy) with color-coded dots and continuous pulsing for online users using `ease-pulse`.
- **Name Tooltips**: Hovering over an avatar reveals the user's name with a smooth fade-in and slide-up animation.
- **Three Size Variants**: Regular, large (for stacks), and small (for compact displays).
- **More Count Badge**: A gradient-colored badge showing "+12" for additional users not displayed.
- **Fully Responsive**: Adapts gracefully to mobile screens with adjusted sizes and spacing.

## 📂 File Structure

```text
submissions/examples/animated-avatar-group/
├── demo.html    # HTML structure and EaseMotion utility classes
├── style.css    # Custom CSS for layout, stack behavior, and status indicators
└── README.md    # Documentation