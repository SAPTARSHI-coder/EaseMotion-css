# Skew-Active Tabs - Fintech Dashboard

##  Description
A modern tab system with skew/distortion effect on active tabs. Perfect for fintech dashboard layouts with dark theme and neon accents.

##  Features

-  **Skew-Active Effect** - Active tab skews/distorts for emphasis
-  **Smooth Transitions** - Bouncy elastic easing
-  **Fully Responsive** - Adapts to all screen sizes
-  **Accessible** - Keyboard navigation + reduced motion
-  **Fintech Styling** - Dark theme with neon accents
-  **Rich Content** - Stats, analytics, transactions, settings

##  How the Skew Effect Works

### Active Tab

.tab-btn.active {
  transform: skewX(-8deg) scale(1.05);
}
Keep Content Straight
css
.tab-btn.active .tab-icon,
.tab-btn.active .tab-label {
  transform: skewX(8deg); /* Counter-skew */
}
###  CSS Custom Properties
Variable	Default	Description
--tab-skew	-8deg	Active tab skew angle
--tab-skew-hover	-5deg	Hover skew angle
--tab-transition	0.4s cubic-bezier(0.34, 1.56, 0.64, 1)	Animation easing
--accent-primary	#6366f1	Primary accent color
--accent-secondary	#8b5cf6	Secondary accent
## File Structure

skew-tabs-bhakkti/
├── demo.html     # Full dashboard demo
├── style.css     # All styles + skew effects
├── script.js     # Tab switching logic
└── README.md     # Documentation
## Related Issue
Closes #59220

## GSSoC-26 Contribution
Labels: GSSoC-26, good first issue, level:easy, type:feature

MIT License © 2026