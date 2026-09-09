/**
 * ============================================================================
 * EaseMotion Hardware-Accelerated Magnifying Glass
 * ============================================================================
 * 
 * Standard magnifiers read the cursor position in JS, duplicate the DOM into 
 * a new node, and recalculate background positions every frame.
 * 
 * Our approach uses JS for one thing only: mapping the cursor X/Y coordinates 
 * to CSS Custom Properties natively.
 * 
 * We use `requestAnimationFrame` to ensure the CSS variables are updated 
 * strictly during the browser's painting cycle, resulting in flawless 60fps 
 * interaction without layout thrashing.
 */

document.addEventListener("DOMContentLoaded", () => {
    const containers = document.querySelectorAll('.ease-magnifier-container');
    
    containers.forEach(container => {
        let isHovering = false;
        let pointerX = 0;
        let pointerY = 0;
        let ticking = false;

        // When the pointer enters, we reveal the lens
        container.addEventListener('pointerenter', () => {
            isHovering = true;
            container.style.setProperty('--lens-opacity', '1');
            container.style.setProperty('--lens-scale', '1');
        });

        // When the pointer leaves, we hide the lens
        container.addEventListener('pointerleave', () => {
            isHovering = false;
            container.style.setProperty('--lens-opacity', '0');
            container.style.setProperty('--lens-scale', '0.5');
        });

        // Track the pointer coordinates
        container.addEventListener('pointermove', (e) => {
            if (!isHovering) return;
            
            // Get pointer position relative to the container itself
            const rect = container.getBoundingClientRect();
            pointerX = e.clientX - rect.left;
            pointerY = e.clientY - rect.top;
            
            // Calculate percentage across the container (0.0 to 1.0)
            const percentX = pointerX / rect.width;
            const percentY = pointerY / rect.height;

            // Throttle the CSS variable update to the animation frame
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // Pass the physical pixel coordinates for the lens position
                    container.style.setProperty('--cursor-x', `${pointerX}px`);
                    container.style.setProperty('--cursor-y', `${pointerY}px`);
                    
                    // Pass the percentage coordinates for the background shifting
                    container.style.setProperty('--cursor-percent-x', percentX);
                    container.style.setProperty('--cursor-percent-y', percentY);
                    
                    ticking = false;
                });
                ticking = true;
            }
        });
    });
});
