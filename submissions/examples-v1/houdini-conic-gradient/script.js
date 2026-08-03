// Fallback for browsers that do not support CSS Houdini @property yet (e.g. Firefox)
if (!CSS.registerProperty) {
    console.warn("CSS.registerProperty is not supported in this browser. Falling back to a static gradient border.");
    
    // Polyfill or fallback styling can go here.
    // For this demo, the browser will just ignore the animation and show a static border.
    document.querySelector('.card-wrapper').style.background = 'linear-gradient(45deg, #ff4545, #00ff99, #006aff, #ff0095)';
}
