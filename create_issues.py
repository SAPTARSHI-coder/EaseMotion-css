import subprocess
import time

issues = [
    {
        "title": "[FEATURE] CSS-Only Origami Folding Menu",
        "name": "CSS-Only Origami Folding Menu",
        "desc": "A navigation menu that folds out like origami when hovered or focused, using 3D transforms and transitions without any JavaScript.",
        "useful": "It showcases advanced CSS 3D transforms and provides a highly interactive and visually impressive navigation component."
    },
    {
        "title": "[FEATURE] CSS-Only 3D Bookshelf Flip",
        "name": "CSS-Only 3D Bookshelf Flip",
        "desc": "A bookshelf component where hovering over a book cover rotates it in 3D space to reveal the spine and back cover.",
        "useful": "Demonstrates perspective and 3D rotation in CSS, perfect for portfolio or library web applications."
    },
    {
        "title": "[FEATURE] CSS-Only Liquid Bubble Navigation",
        "name": "CSS-Only Liquid Bubble Navigation",
        "desc": "A bottom navigation bar where active icons are highlighted by a morphing liquid bubble effect using SVG filters or complex border-radii.",
        "useful": "Brings mobile-app-like fluid animations to the web purely through CSS, highlighting composability of filters."
    },
    {
        "title": "[FEATURE] CSS-Only Glitch Image Reveal",
        "name": "CSS-Only Glitch Image Reveal",
        "desc": "An image that reveals itself through a stylized cyberpunk glitch animation using CSS clip-path and keyframes on hover.",
        "useful": "A high-impact visual effect that is frequently requested for modern, edgy design systems."
    },
    {
        "title": "[FEATURE] CSS-Only Morphing Submit Button",
        "name": "CSS-Only Morphing Submit Button",
        "desc": "A submit button that, when clicked (using the :active or :focus state), morphs into a loading spinner seamlessly.",
        "useful": "Enhances form UX by providing immediate feedback using only CSS state selectors."
    },
    {
        "title": "[FEATURE] CSS-Only Animated Price Tag",
        "name": "CSS-Only Animated Price Tag",
        "desc": "A price tag component that swings gently from a 'string' on hover, utilizing transform-origin and keyframe animations.",
        "useful": "A fun micro-interaction for e-commerce sites that adds polish and delights the user."
    },
    {
        "title": "[FEATURE] CSS-Only Isometric Product Card",
        "name": "CSS-Only Isometric Product Card",
        "desc": "A product card that is rendered in an isometric 3D view and 'pops up' when hovered.",
        "useful": "Highlights the power of isometric projections using CSS transform matrix or rotate/skew combinations."
    },
    {
        "title": "[FEATURE] CSS-Only Holographic ID Badge",
        "name": "CSS-Only Holographic ID Badge",
        "desc": "An ID badge that features a shiny, holographic foil reflection effect that changes as the user hovers over different parts of it.",
        "useful": "Demonstrates advanced use of CSS gradients and background-position animation for premium design."
    },
    {
        "title": "[FEATURE] CSS-Only CSS Pixel Art Generator Animation",
        "name": "CSS-Only CSS Pixel Art Generator Animation",
        "desc": "An animation of pixel art drawing itself using multiple box-shadows on a single element.",
        "useful": "A creative boundary-pushing use of CSS box-shadows for lightweight illustrations."
    },
    {
        "title": "[FEATURE] CSS-Only Glowing Hexagon Grid",
        "name": "CSS-Only Glowing Hexagon Grid",
        "desc": "A grid of hexagons that emit a neon glow in a ripple pattern using CSS grid and staggered animation delays.",
        "useful": "Perfect for sci-fi or tech-themed hero backgrounds, utilizing CSS Grid and advanced clipping."
    },
    {
        "title": "[FEATURE] CSS-Only Neumorphic Audio Player",
        "name": "CSS-Only Neumorphic Audio Player",
        "desc": "A fully styled audio player interface with soft, extruded neumorphic shadows and a CSS-only spinning vinyl record.",
        "useful": "Shows how to combine soft shadows and infinite keyframe rotations for a realistic UI."
    },
    {
        "title": "[FEATURE] CSS-Only Animated Progress Ring Tracker",
        "name": "CSS-Only Animated Progress Ring Tracker",
        "desc": "A circular progress ring that animates from 0 to a specific percentage using stroke-dasharray and stroke-dashoffset.",
        "useful": "A standard and highly useful UI component for dashboards, built efficiently without JS calculations."
    },
    {
        "title": "[FEATURE] CSS-Only 3D Credit Card Form",
        "name": "CSS-Only 3D Credit Card Form",
        "desc": "A credit card visual that flips between the front and back depending on which form input (like CCV) is focused.",
        "useful": "Excellent real-world use case for the :focus-within pseudo-class coupled with 3D transforms."
    },
    {
        "title": "[FEATURE] CSS-Only Hamburger to Cross Morph",
        "name": "CSS-Only Hamburger to Cross Morph",
        "desc": "A hamburger menu icon that smoothly morphs into a 'close' (X) icon using CSS transitions on individual lines.",
        "useful": "A fundamental mobile UI component that relies entirely on CSS transforms for smooth interaction."
    },
    {
        "title": "[FEATURE] CSS-Only Glassmorphism Contact Form",
        "name": "CSS-Only Glassmorphism Contact Form",
        "desc": "A contact form floating over a colorful background with frosted glass effects (backdrop-filter) and floating labels.",
        "useful": "Showcases modern UI trends and complex input styling within a cohesive glassmorphic container."
    },
    {
        "title": "[FEATURE] CSS-Only Retro CRT Monitor Effect",
        "name": "CSS-Only Retro CRT Monitor Effect",
        "desc": "A screen container that simulates a retro CRT monitor with scanlines, subtle flicker, and edge curvature.",
        "useful": "A nostalgic and stylized utility demonstrating CSS repeating-linear-gradients and keyframe flickering."
    },
    {
        "title": "[FEATURE] CSS-Only Floating Cloud Background",
        "name": "CSS-Only Floating Cloud Background",
        "desc": "A parallax background featuring multiple layers of clouds moving at different speeds.",
        "useful": "Provides a serene, performant background animation relying purely on keyframes and absolute positioning."
    },
    {
        "title": "[FEATURE] CSS-Only Animated Download Button",
        "name": "CSS-Only Animated Download Button",
        "desc": "A button that, when interacted with, shows a 'filling' progress effect simulating a download.",
        "useful": "Adds interactive feedback for users performing actions, easily integrated into standard buttons."
    },
    {
        "title": "[FEATURE] CSS-Only Endless Scrolling Marquee",
        "name": "CSS-Only Endless Scrolling Marquee",
        "desc": "A seamlessly looping horizontal text or logo marquee that doesn't stutter when resetting.",
        "useful": "Replaces bulky JS marquee plugins with a performant, keyframe-based alternative."
    },
    {
        "title": "[FEATURE] CSS-Only Magnetic Social Icons",
        "name": "CSS-Only Magnetic Social Icons",
        "desc": "Social media icons that appear to be pulled towards the user's cursor (simulated via hover boxes and transforms).",
        "useful": "A highly trendy micro-interaction that makes footers and contact sections feel alive."
    }
]

def create_issue(issue):
    body = f"""## Feature Name

{issue['name']}

---

## Description

{issue['desc']}

---

## Why is this useful for EaseMotion CSS?

{issue['useful']}

---

## HTML Snippet

```html
<!-- Example structure for {issue['name']} -->
<div class="ease-{issue['name'].lower().replace('css-only ', '').replace(' ', '-')}">
    <!-- Component content goes here -->
</div>
```

---

## CSS Snippet

```css
/* Placeholder for CSS implementation */
.ease-{issue['name'].lower().replace('css-only ', '').replace(' ', '-')} {{
    /* Base styles */
}}

.ease-{issue['name'].lower().replace('css-only ', '').replace(' ', '-')}:hover {{
    /* Animation styles */
}}
```

---

## Visual Reference (optional)

N/A

---

## Checklist

- [x] This feature does not duplicate an existing EaseMotion CSS class
- [x] I understand my naming will be standardized by the maintainer
- [x] I will submit code inside `submissions/examples/` only — not in `core/` or `components/`
"""
    
    # Write body to temp file to avoid quoting issues
    with open('temp_issue_body.md', 'w', encoding='utf-8') as f:
        f.write(body)
        
    cmd = ['gh', 'issue', 'create', '--title', issue['title'], '--body-file', 'temp_issue_body.md', '--label', 'enhancement']
    print(f"Creating issue: {issue['title']}")
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode == 0:
        print(f"Successfully created: {result.stdout.strip()}")
    else:
        print(f"Error creating issue: {result.stderr}")
    
    # Sleep a bit to avoid rate limits
    time.sleep(2)

for i, issue in enumerate(issues):
    create_issue(issue)
