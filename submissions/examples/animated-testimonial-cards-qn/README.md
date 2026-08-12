# Animated Testimonial Cards

## Description
A beautiful, fully interactive testimonial carousel component that showcases customer reviews with smooth sliding transitions. It features navigation dots, quote icons, author avatars with gradient backgrounds, and elegant typography. Built entirely with pure CSS using the radio button hack for state management, requiring absolutely zero JavaScript.

## Files
- `demo.html`: Contains the HTML structure using hidden radio inputs, testimonial cards with quotes and author info, and navigation dots.
- `style.css`: Contains the carousel layout, sliding transitions, active dot styling, and responsive design.

## How to use
1. Open `demo.html` in your browser and click the dots to slide between testimonials.
2. Copy the HTML and CSS into your project.
3. **Structure:**
   - Add hidden radio inputs at the top (one for each testimonial)
   - Wrap all testimonial cards in a `.testimonial-track-qn` div
   - Add navigation dots as `<label>` elements linked to the radio inputs
4. **Customization:**
   - **Add More Testimonials:** Add a new radio input, a new `.testimonial-card-qn`, and a new `.testimonial-dot-qn`. Then add a CSS rule for the new `:checked` state with the appropriate `transform: translateX(-X00%)`.
   - **Animation Speed:** Adjust the `0.6s` transition duration in `.testimonial-track-qn`.
   - **Avatar Colors:** Change the gradient backgrounds in the inline `style` attributes of `.author-avatar-qn`.
   - **Quote Icon:** Modify or remove the `.quote-icon-qn` SVG if desired.
   - **Typography:** Adjust font sizes in `.testimonial-text-qn` and `.author-info-qn`.

## Features
- **Smooth Sliding:** Hardware-accelerated `transform: translateX()` for buttery smooth transitions
- **Radio Button Hack:** Pure CSS state management without JavaScript
- **Active Dot Indicator:** Navigation dots scale up and glow when active
- **Quote Icons:** Decorative quote marks for visual appeal
- **Author Avatars:** Gradient-colored circular avatars with initials
- **Elegant Typography:** Italic quote text with proper line height
- **Fully Responsive:** Adapts to mobile screens
- **Accessible:** Proper semantic HTML with ARIA labels

## Adding More Testimonials
To add a 4th testimonial:
1. Add: `<input type="radio" name="testimonial-qn" id="test4-qn">`
2. Add a new `.testimonial-card-qn` with content
3. Add: `<label for="test4-qn" class="testimonial-dot-qn"></label>`
4. Add CSS: `#test4-qn:checked ~ .testimonial-track-qn { transform: translateX(-300%); }`
5. Add CSS for the active dot: `#test4-qn:checked ~ .testimonial-controls-qn .testimonial-dot-qn:nth-child(4)`

## Use Cases
- Customer review sections
- Client testimonials
- Case study highlights
- Social proof sections
- Product feedback displays
- Service endorsements
- Team member quotes
- Event speaker highlights