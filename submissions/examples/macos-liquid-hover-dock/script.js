/**
 * MacOS Liquid Hover Dock Engine
 * Adheres to dynamic distance tracking and smooth scaling curves.
 */

document.addEventListener('DOMContentLoaded', () => {
    const dockContainer = document.getElementById('dock');
    const dockItems = Array.from(document.querySelectorAll('.dock-item'));
    const tooltip = document.getElementById('dock-tooltip');
    
    let isHoveringDock = false;

    dockContainer.addEventListener('mousemove', (e) => {
        isHoveringDock = true;
        
        requestAnimationFrame(() => {
            if (!isHoveringDock) return;

            // 1. Mobile Responsiveness sizes
            const isMobile = window.innerWidth <= 600;
            const baseSize = isMobile ? 44 : 60;
            const baseSvg = isMobile ? 24 : 32;
            const baseFont = isMobile ? 18 : 24;
            
            const baseScale = 1;
            const maxScale = 1.6;
            const maxDistance = isMobile ? 120 : 200;

            let hoveredItem = null;
            let closestDist = Infinity;

            dockItems.forEach(item => {
                // Remove transition while tracking to eliminate lag completely
                item.style.transition = 'none';
                const svg = item.querySelector('svg');
                if(svg) svg.style.transition = 'none';
                const calText = item.querySelector('.calendar-text');
                if(calText) calText.style.transition = 'none';

                const rect = item.getBoundingClientRect();
                const itemCenterX = rect.left + (rect.width / 2);
                const distance = Math.abs(e.clientX - itemCenterX);
                
                if (distance < maxDistance) {
                    const normalizedDist = distance / maxDistance;
                    const scaleFactor = (Math.cos(normalizedDist * Math.PI) + 1) / 2;
                    
                    const currentScale = baseScale + ((maxScale - baseScale) * scaleFactor);
                    const marginFactor = (isMobile ? 10 : 16) * scaleFactor; 

                    item.style.width = `${baseSize * currentScale}px`;
                    item.style.height = `${baseSize * currentScale}px`;
                    item.style.margin = `0 ${marginFactor}px`;
                    
                    if (svg) {
                        svg.style.width = `${baseSvg * currentScale}px`;
                        svg.style.height = `${baseSvg * currentScale}px`;
                    }
                    if (calText) {
                        calText.style.fontSize = `${baseFont * currentScale}px`;
                    }

                    if (distance < closestDist && distance < (rect.width / 2)) {
                        closestDist = distance;
                        hoveredItem = item;
                    }
                } else {
                    resetItemDimensions(item, baseSize, baseSvg, baseFont);
                }
            });

            if (hoveredItem && !isMobile) {
                const title = hoveredItem.getAttribute('data-title');
                if (tooltip.textContent !== title) tooltip.textContent = title;
                
                const itemRect = hoveredItem.getBoundingClientRect();
                const wrapperRect = document.querySelector('.macos-dock-wrapper').getBoundingClientRect();
                const relativeLeft = itemRect.left - wrapperRect.left + (itemRect.width / 2);
                
                tooltip.style.left = `${relativeLeft}px`;
                tooltip.classList.add('show');
            } else {
                tooltip.classList.remove('show');
            }
        });
    });

    dockContainer.addEventListener('mouseleave', () => {
        isHoveringDock = false;
        
        const isMobile = window.innerWidth <= 600;
        const baseSize = isMobile ? 44 : 60;
        const baseSvg = isMobile ? 24 : 32;
        const baseFont = isMobile ? 18 : 24;

        dockItems.forEach(item => {
            // Restore smooth transitions for when the cursor leaves the dock
            const transitionCSS = 'width 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), height 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), margin 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)';
            item.style.transition = transitionCSS;
            
            const svg = item.querySelector('svg');
            if(svg) svg.style.transition = transitionCSS;
            
            const calText = item.querySelector('.calendar-text');
            if(calText) calText.style.transition = 'font-size 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)';
            
            resetItemDimensions(item, baseSize, baseSvg, baseFont);
        });
        tooltip.classList.remove('show');
    });

    dockItems.forEach(item => {
        item.addEventListener('mousedown', () => item.classList.add('active-click'));
        item.addEventListener('mouseup', () => item.classList.remove('active-click'));
        item.addEventListener('mouseleave', () => item.classList.remove('active-click'));
    });

    function resetItemDimensions(item, baseSize, baseSvg, baseFont) {
        item.style.width = `${baseSize}px`;
        item.style.height = `${baseSize}px`;
        item.style.margin = `0 0px`;
        
        const svg = item.querySelector('svg');
        if (svg) {
            svg.style.width = `${baseSvg}px`;
            svg.style.height = `${baseSvg}px`;
        }
        
        const calText = item.querySelector('.calendar-text');
        if (calText) {
            calText.style.fontSize = `${baseFont}px`;
        }
    }
});
