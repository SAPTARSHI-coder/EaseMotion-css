CSS Scale-Hover Accordion (Gaming Hub)
A pure CSS accordion component designed for dark-mode gaming interfaces. It utilizes the CSS checkbox hack for state management (zero JavaScript) and features a dynamic scale-and-glow effect on hover.

Core CSS Features
Zero JS State Management: Uses hidden <input type="checkbox"> and the general sibling combinator (~) to toggle the accordion content.
Scale & Glow Interaction: Applying transform: scale(1.02) and a neon box-shadow on hover to create a tactile, interactive gaming feel.
Smooth Height Transition: Animates max-height and opacity to create a smooth opening/closing effect without layout jumping.
Keyboard Accessible: Includes :focus-visible styling on the labels to ensure keyboard users can navigate the settings menu.

Integration
To integrate this component, include the style.css in your project. Ensure the id of each checkbox matches the for attribute of its corresponding label to maintain functionality. Edit the --game-* CSS variables to match your specific gaming brand colors.
