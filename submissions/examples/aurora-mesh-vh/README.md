# Aurora Glowing Mesh Background

A pure-CSS animated mesh background featuring organic, slowly drifting glow spheres of violet and pink gradients.

## How to use

1. Include the styles in your CSS:
   ```css
   @import "style.css";
   ```

2. Add the markup to your HTML:
   ```html
   <div class="aurora-container">
     <div class="aurora-glow-1"></div>
     <div class="aurora-glow-2"></div>
     <div class="aurora-content">
       <h1>Modern Backdrop</h1>
       <p>Premium ambient glow animation built in pure CSS.</p>
     </div>
   </div>
   ```

## Design Details
- **Organic Movement:** Uses two separate keyframe floats animating on asynchronous intervals (8s and 10s) with different translate values to keep the gradient movement feeling dynamic and non-repetitive.
- **Hardware-Accelerated:** Translates and scales the elements via GPU execution instead of triggering browser reflows.
