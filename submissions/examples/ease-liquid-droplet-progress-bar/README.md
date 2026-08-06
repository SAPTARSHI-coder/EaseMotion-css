# Ease Liquid Droplet Stepper Progress Bar (`ease-liquid-droplet-progress-bar`)
A step progress indicator where active progress flows like liquid droplets connecting step nodes using an SVG gooey filter.

## Description
The Ease Liquid Droplet Stepper Progress Bar is an interactive multi-step progress indicator that visualizes progress through a smooth liquid-inspired animation. Active progress flows between step nodes using an SVG gooey (metaball) filter, creating the appearance of connected liquid droplets. Users can navigate between steps using Next and Back controls, while the component updates its visual state and accessibility attributes dynamically.

## Features
- Liquid droplet flow animation between step nodes
- SVG metaball gooey filter connection effect
- Active step pulse animation
- Next and Back step navigation
- Accessible ARIA progress states
- Smooth transitions and gradient styling

## Tech Stack 
- HTML5 (SVG Filters)
- CSS3 (Transitions, Gradients, Animations)
- Vanilla JavaScript

## Implementation
The component is built using three core technologies:

### HTML
- Defines the stepper structure with four step nodes.
- Uses an inline SVG filter to create the gooey metaball effect.
- Includes semantic accessibility attributes such as role="progressbar" and dynamic ARIA values.

### CSS
- Styles the stepper layout and circular step nodes.
- Creates the liquid connector using gradients and pseudo-elements.
- Implements smooth width transitions for connector filling.
- Adds pulse animation to the active step.
- Applies the SVG gooey filter to blend connectors and droplets.

### JavaScript
- Maintains the current active step.
- Updates active and completed step states.
- Animates connector fill based on progress.
- Handles Next and Back button interactions.
- Updates ARIA attributes dynamically for accessibility. 


## Files
- `demo.html`
- `style.css`
- `README.md`

## Usage 
Open `demo.html` in a modern web browser and use the Next and Back buttons to navigate through the steps.

## Accessibility 
- Uses `role="progressbar"`
- Updates `aria-valuenow` dynamically
- Marks the active step using `aria-current="step"`

## Preview 
Open `demo.html` in a modern browser to view and interact with the component.

