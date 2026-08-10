# Bounce-Pulse Tabs - SaaS Showcase

##  Description
Interactive tabs with elastic bounce and pulse effects for SaaS showcase layouts. Active tabs bounce with a smooth elastic animation and glow with a pulse effect.

##  Features

-  **Bounce Animation** - Elastic bounce on active tab
-  **Pulse Glow** - Soft glowing pulse around active tab
-  **SaaS Styling** - Clean, modern design
-  **Fully Responsive** - Adapts to all screen sizes
-  **Accessible** - Keyboard navigation + reduced motion
-  **Smooth Transitions** - Bouncy elastic easing

##  Animation Details


@keyframes bounce-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
  70% { transform: scale(0.98); }
  85% { transform: scale(1.02); }
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.15; transform: scale(1); }
  50% { opacity: 0.3; transform: scale(1.02); }
}
### CSS Custom Properties
Variable	    Default                         	Description
--tab-duration	0.5s	                            Animation duration
--tab-easing	cubic-bezier(0.34, 1.56, 0.64, 1)	Bouncy easing
--tab-pulse-scale	1.05	                        Scale amount
--accent-primary	#6366f1	                    Primary color
--accent-secondary	#8b5cf6	                    Secondary color
## File Structure

bounce-tabs-bhakkti/
├── demo.html     # Full showcase
├── style.css     # All styles + animations
├── script.js     # Tab switching logic
└── README.md     # Documentation
## Related Issue
Closes #59484

## GSSoC-26 Contribution
Labels: GSSoC-26, good first issue, level:easy, type:feature

MIT License © 2026