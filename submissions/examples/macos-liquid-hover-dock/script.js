/**
 * MacOS Liquid Hover Dock Engine
 * Calculates the distance of the mouse to each dock item and dynamically adjusts 
 * its width and height to create a smooth, authentic magnification effect.
 */

document.addEventListener('DOMContentLoaded', () => {
    const dockContainer = document.getElementById('dock');
    const dockItems = document.querySelectorAll('.dock-item');
    
    // Base sizes
    const baseSize = 54;
    const maxSize = 86; // Maximum size an item can reach
    const maxDistance = 150; // The radius of effect around the cursor

    dockContainer.addEventListener('mousemove', (e) => {
        // Iterate through each dock item
        dockItems.forEach(item => {
            // Get the center X position of the item
            const itemRect = item.getBoundingClientRect();
            const itemCenterX = itemRect.left + (itemRect.width / 2);
            
            // Calculate absolute distance from mouse X to item center X
            const distance = Math.abs(e.clientX - itemCenterX);
            
            // If the mouse is within the radius of effect
            if (distance < maxDistance) {
                // Calculate scale factor using a bell curve (cosine interpolation)
                // 1 means exact center, 0 means outside maxDistance
                const scaleFactor = (Math.cos((distance / maxDistance) * Math.PI) + 1) / 2;
                
                // Calculate new size
                const newSize = baseSize + ((maxSize - baseSize) * scaleFactor);
                
                // Apply dynamic size
                item.style.width = `${newSize}px`;
                item.style.height = `${newSize}px`;
                
                // Scale up the icon inside proportionally
                const svg = item.querySelector('svg');
                if(svg) {
                    const iconBase = 24;
                    const iconMax = 40;
                    const newIconSize = iconBase + ((iconMax - iconBase) * scaleFactor);
                    svg.style.width = `${newIconSize}px`;
                    svg.style.height = `${newIconSize}px`;
                }
                
                // Add margins so the dock expands outwards instead of overlapping
                const marginFactor = 10 * scaleFactor;
                item.style.margin = `0 ${marginFactor}px`;

            } else {
                // Reset if outside distance
                resetItem(item);
            }
        });
    });

    // Reset everything smoothly when mouse leaves the dock entirely
    dockContainer.addEventListener('mouseleave', () => {
        dockItems.forEach(item => {
            resetItem(item);
        });
    });

    function resetItem(item) {
        item.style.width = `${baseSize}px`;
        item.style.height = `${baseSize}px`;
        item.style.margin = `0 0px`;
        
        const svg = item.querySelector('svg');
        if(svg) {
            svg.style.width = `24px`;
            svg.style.height = `24px`;
        }
    }
});
