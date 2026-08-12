# Interactive Morphing Step Stepper (EaseMotion CSS)

An interactive, responsive step progress indicator component featuring fluid node scale transitions, glowing pulse rings, active fill lines, and glassmorphism styling built purely with HTML5 and CSS3.

## 1. What does this do?
This component renders a multi-step onboarding wizard stepper UI. Hovering over step nodes triggers physics-inspired spring scaling effects (`transform: translateY(-6px)`), while active and completed nodes display glowing status rings and linear progress bar fills.

## 2. How is it used?
Link `style.css` in your HTML file and include the `.stepper-card` container with `.step-node` elements as documented in `demo.html`.

## 3. Why is it useful?
- **Enhanced Form UX**: Outlines complex multi-step workflows (checkout, account setup, onboarding) in an engaging visual format.
- **Pure CSS Performance**: Hardware-accelerated transitions ensure fluid 60fps interaction without requiring external JavaScript libraries.
- **Mobile-Responsive Adaptability**: Flexibly transitions from a horizontal bar layout on desktop to a vertical timeline step sequence on mobile viewports.
