# CSS Reading Font Sizer

A clean, modern, and accessible reading font-size controller built entirely with HTML and CSS. It allows users to switch between small, default, and large text sizes with smooth transitions and responsive styling.

## ✨ Features

- **A− / Default / A+ Controls** — Easily adjust the reading text size.
- **Pure CSS** — No JavaScript is required.
- **Smooth Transitions** — Font-size changes animate smoothly for a polished experience.
- **Responsive Design** — Works well across desktop, tablet, and mobile screens.
- **Keyboard Accessible** — Controls can be navigated using the keyboard.
- **Visible Focus States** — Clear focus indicators improve keyboard usability.
- **Reduced Motion Support** — Respects users who prefer reduced motion.
- **Modern UI** — Clean card-based layout with accessible typography.
- **Semantic HTML** — Uses meaningful HTML elements for better structure and accessibility.

## 🛠️ Technologies Used

- HTML5
- CSS3
- CSS Custom Properties
- CSS `:has()` Selector
- CSS Media Queries

## 📂 Project Structure

    70932-css-reading-font-sizer-ks/
    ├── demo.html
    ├── style.css
    └── README.md

## 🎨 Font Size Options

| Option | Reading Size | Description |
|--------|--------------|-------------|
| A− | 0.88rem | Smaller text for compact reading |
| A | 1rem | Default reading size |
| A+ | 1.2rem | Larger text for improved readability |

## ♿ Accessibility

The component is designed with accessibility in mind.

- Semantic HTML elements are used throughout the component.
- Form controls include descriptive labels.
- Keyboard users receive visible focus indicators.
- The layout remains usable on smaller screens.
- `prefers-reduced-motion` is supported to reduce animations when requested by the user's system preferences.
- Increased text size maintains comfortable line spacing for readability.

## 💡 How It Works

The font-size controls use radio inputs and labels. CSS detects the selected option using the `:has()` selector and updates custom properties on the reading content.

No JavaScript is required to switch between the font-size options.

    .font-sizer-card:has(#font-large:checked) .reading-content {
      --reading-size: 1.2rem;
    }

The reading content uses the custom property for its font size:

    .reading-content p {
      font-size: var(--reading-size);
    }

This keeps the component lightweight while providing smooth and responsive interactions.

## 🚀 How to Use

1. Open `demo.html` in a modern web browser.
2. Use the **A−**, **Default**, or **A+** controls.
3. Observe the reading preview update smoothly.
4. Resize the browser window to see the responsive layout.

## 📱 Responsive Behavior

The component adapts to different screen sizes using CSS media queries.

On smaller screens:

- The layout becomes more compact.
- Button labels are simplified.
- Content spacing is reduced.
- The reading preview remains comfortable to use.

## 📌 Browser Compatibility

This component uses the modern CSS `:has()` selector. Use a modern browser such as:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

## 📄 License

This project is created as a contribution to the EaseMotion CSS project under the applicable project license.