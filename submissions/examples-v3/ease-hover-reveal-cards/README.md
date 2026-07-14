# Hover Reveal Cards

Interactive card component that reveals hidden content on hover with smooth animations and gradient overlay transitions.

## Features

- **Hover Reveal** – Hidden content slides in smoothly when hovering over cards
- **Gradient Overlay** – Dynamic gradient transitions on card images
- **Smooth Easing** – All animations use `cubic-bezier` for natural motion
- **Scale & Lift** – Cards lift and scale slightly on hover for depth
- **Interactive Button** – CTA button with hover scale effect
- **Responsive Grid** – Adapts to all screen sizes
- **Glassmorphism Design** – Modern blurred background effects
- **Zero Dependencies** – Pure HTML, CSS, and vanilla JavaScript

## Technologies Used

- HTML5
- CSS3 (Animations, Grid, Flexbox, Glassmorphism, Transitions)

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/hover-reveal-cards.git

2. Navigate to the project folder:
   cd hover-reveal-cards

3. Open demo.html in your browser

## File Structure

hover-reveal-cards/
├── demo.html     # HTML structure with sample cards
├── style.css     # All styles and animations
└── README.md     # Documentation

## Usage

Simply include the HTML structure and CSS styles. The cards work with any content:

```html
<div class="card">
    <div class="card-image" style="background-image: url('your-image.jpg');">
        <div class="card-overlay"></div>
    </div>
    <div class="card-content">
        <h3>Card Title</h3>
        <p>Visible description</p>
        <div class="card-hidden">
            <!-- Hidden content revealed on hover -->
            <p>Detail 1</p>
            <p>Detail 2</p>
            <button class="card-btn">Action</button>
        </div>
    </div>
</div>