# Retro Neumorphic Accordion

A pure CSS accordion component that combines the soft, tactile UI of **Neumorphism** with the aesthetic charm of **Retro computing**. It utilizes the classic hidden radio button hack to maintain state without a single line of JavaScript.

## Features

- **Pure CSS State Management**: Uses `<input type="radio">` and the `:checked` pseudo-class along with the general sibling combinator (`~`) to animate the opening and closing of accordion panels.
- **Dynamic Neumorphism**:
  - The accordion headers start with an **extruded** outer shadow (`box-shadow`), making them look like raised buttons.
  - When clicked (`:checked`), the shadow transitions to an **inset** shadow (`box-shadow: inset ...`), giving the satisfying visual feedback of a physical button being pressed down.
- **Retro Aesthetic**: Uses a warm, vintage beige color palette (`#e0d8c3`), a punchy retro orange accent (`#f05d23`), and the `VT323` pixel font from Google Fonts to evoke nostalgic 80s/90s computing vibes.
- **Smooth Animations**: The content area expands gracefully using a `max-height` transition combined with a `cubic-bezier` timing function, while the text inside fades and slides up.

## Usage
Include `demo.html` and `style.css` in your project. If you want the accordions to behave independently (multiple can be open at once), change `type="radio"` to `type="checkbox"` in the HTML and remove the `name="retro-accordion"` attribute.
