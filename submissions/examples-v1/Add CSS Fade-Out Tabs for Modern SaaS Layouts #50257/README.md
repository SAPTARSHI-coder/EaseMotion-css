# CSS Fade-Out Tabs - Modern SaaS Aesthetic

A polished, pure CSS tab component featuring a sophisticated "Fade-Out Sibling" spotlight effect, perfectly tailored for Modern SaaS dashboards.

## Features

- **Fade-Out Sibling Spotlight Effect**: When you hover over the tab navigation, all un-hovered tabs elegantly fade out (dim in opacity). This isolates the hovered tab, drawing focus and mimicking high-end JavaScript-based interactions—using only CSS hover pseudo-classes.
- **Cross-Fade Panels**: Navigating between tabs triggers a smooth opacity and transform fade to gracefully hide the previous content and reveal the new content.
- **Modern SaaS Aesthetics**: Styled with a minimal and data-focused layout. It features a crisp `slate` and `blue` color palette, soft shadows, rounded metric cards, sliding toggles, and clean `Inter` typography.
- **Pure CSS State**: The tabs operate seamlessly using visually hidden radio inputs. No JavaScript is required.
- **Accessible Design**: The radio inputs are hidden using the accessible `clip` pattern, maintaining fully native keyboard navigation. A custom blue focus ring highlights the active tab when navigating via the `Tab` key.
- **Responsive Settings**: On smaller screens, the sliding active pill indicator gracefully degrades into standard background highlighting, and the metrics grids automatically stack.

## Custom Properties

Customize the timing of the fade effect or align the theme colors to your brand by modifying the variables in the `:root` pseudo-class in `style.css`:

```css
:root {
  /* Fade-Out Interaction Parameters */
  --fade-duration: 0.35s;
  --fade-easing: ease-in-out;
  --fade-opacity: 0.4; /* Opacity level of dimmed sibling tabs */
  
  /* Panel Animation */
  --panel-fade-duration: 0.5s;
  
  /* Theme Colors */
  --saas-primary: #2563eb; /* Change this to your brand color */
  /* ... see style.css for full list */
}
```

## Usage

Simply open `demo.html` in your web browser. Move your cursor across the navigation tabs to experience the Fade-Out Sibling spotlight effect, and click to explore the mocked SaaS dashboard panels!
