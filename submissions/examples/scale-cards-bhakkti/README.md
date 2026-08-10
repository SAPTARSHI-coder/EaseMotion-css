# Scale-Hover Card Grid - SaaS Showcase

##  Description
A responsive card grid where cards scale up smoothly on hover with beautiful SaaS styling. Perfect for showcasing products, features, or pricing plans.

##  Features

-  **Scale on Hover** - Cards scale up with elastic easing
-  **Shadow Elevation** - Cards lift with enhanced shadow
-  **SaaS Styling** - Clean, modern design with gradient accents
-  **Badge Variants** - Multiple color options for tags
-  **Fully Responsive** - Adapts to all screen sizes
-  **Accessible** - Reduced motion support

##  The Scale Effect

.card {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card:hover {
  transform: scale(1.05);
}
### CSS Custom Properties
Variable	                Default	                        Description
--card-scale	            1.05	                        Scale amount on hover
--card-duration         	0.4s	                        Animation speed
--card-easing	        cubic-bezier(0.34, 1.56, 0.64, 1)	Bouncy easing
--card-shadow	           0 20px 60px rgba(0,0,0,0.10)	Default shadow
--card-shadow-hover	    0 30px 80px rgba(0,0,0,0.15)	   Hover shadow
--card-radius	            16px	                        Border radius
### File Structure

scale-cards-bhakkti/
├── demo.html     # Full showcase with 8 cards
├── style.css     # All styles + scale animations
└── README.md     # Documentation
## Related Issue
Closes #59551

### GSSoC-26 Contribution
Labels: GSSoC-26, good first issue, level:easy, type:feature

MIT License © 2026