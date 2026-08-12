# Rotate-Fade Tooltip - Fintech Dashboard

##  Description
A modern tooltip system with rotate-fade entrance animations. Tooltips appear with a smooth rotation and fade effect, with arrows pointing to the trigger element.

##  Features

-  **Rotate-Fade Animation** - Tooltips rotate and fade in
-  **4 Positions** - Top, Bottom, Left, Right
-  **Arrow Indicators** - Point to the trigger element
-  **Fintech Styling** - Dark theme with neon accents
-  **Fully Responsive** - Adapts to all screen sizes
-  **Accessible** - ARIA attributes + reduced motion
-  **CSS Custom Properties** - Easy theming

##  Animation Details


@keyframes rotate-fade-in {
  from {
    opacity: 0;
    transform: rotate(10deg) scale(0.95);
  }
  to {
    opacity: 1;
    transform: rotate(0deg) scale(1);
  }
}
### Position-Specific Animations
Position	Transform Origin	Rotation
Top	        Bottom center	    rotateX(10deg)
Bottom  	Top center	        rotateX(-10deg)
Left	    Right center	    rotateY(-10deg)
Right	    Left center	        rotateY(10deg)
### CSS Custom Properties
Variable	        Default	                                   Description
--tooltip-rotate	10deg	                                   Rotation angle
--tooltip-duration	0.35s	                                   Animation speed
--tooltip-easing	cubic-bezier(0.34, 1.56, 0.64, 1)	       Bouncy easing
--tooltip-bg	    #1a1b3a	                                  Background color
--tooltip-color	    #ffffff	                                  Text color
--tooltip-radius	12px	                                   Border radius
--tooltip-shadow	0 8px 30px rgba(0,0,0,0.4)             	Shadow
--tooltip-padding	14px 18px	                                Inner padding
--tooltip-gap	    12px                                         	Gap from trigger
--tooltip-max-width	260px	                                    Maximum width
### File Structure

rotate-tooltip-bhakkti/
├── demo.html     # Full showcase
├── style.css     # All styles + animations
└── README.md     # Documentation
## Related Issue
Closes #59318

## GSSoC-26 Contribution
Labels: GSSoC-26, good first issue, level:intermediate, type:feature

MIT License © 2026