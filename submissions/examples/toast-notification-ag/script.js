document.addEventListener('DOMContentLoaded', () => {
    const toastContainer = document.getElementById('toast-container');
    
    // Configuration
    const TOAST_DURATION = 3000; // Time in ms before auto-dismissal
    
    // Icons for different toast types
    const ICONS = {
        success: '✔',
        error: '✖',
        warning: '⚠',
        info: 'ℹ'
    };

    /**
     * Creates and displays a toast notification.
     * @param {string} type - 'success', 'error', 'warning', or 'info'
     * @param {string} message - The message to display
     */
    function showToast(type, message) {
        // 1. Create the toast element
        const toast = document.createElement('div');
        
        // Add base class and the entrance animation class
        toast.className = `toast ${type} ease-slide-in-right`;
        
        // Accessibility: Announce dynamically added content
        toast.setAttribute('role', type === 'error' || type === 'warning' ? 'alert' : 'status');
        toast.setAttribute('aria-live', 'polite');

        // Build the HTML content
        toast.innerHTML = `
            <span class="toast-icon" aria-hidden="true">${ICONS[type]}</span>
            <span class="toast-message">${message}</span>
        `;

        // 2. Append to the container (triggers the CSS entrance animation)
        toastContainer.appendChild(toast);

        // 3. Set a timeout for automatic dismissal
        setTimeout(() => {
            dismissToast(toast);
        }, TOAST_DURATION);
    }

    /**
     * Handles the exit animation and DOM cleanup.
     * @param {HTMLElement} toast - The toast element to dismiss
     */
    function dismissToast(toast) {
        // Prevent multiple dismissals if triggered manually or via multiple timeouts
        if (toast.classList.contains('ease-fade-out')) return;

        // 1. Swap the entrance animation class with the exit animation class
        toast.classList.remove('ease-slide-in-right');
        toast.classList.add('ease-fade-out');

        // 2. Listen for the end of the animation to remove the element from the DOM
        toast.addEventListener('animationend', (e) => {
            // Ensure we are catching the fade-out animation end
            if (e.animationName === 'fade-out' || e.animationName === 'none') {
                 if (toast.parentNode) {
                     toast.parentNode.removeChild(toast);
                 }
            }
        });

        // Fallback for `prefers-reduced-motion` where the animation event might not fire robustly across all older browsers
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
             if (toast.parentNode) {
                 toast.parentNode.removeChild(toast);
             }
        }
    }

    // Attach event listeners to the demo buttons
    document.getElementById('btn-success').addEventListener('click', () => {
        showToast('success', 'Settings saved successfully.');
    });

    document.getElementById('btn-error').addEventListener('click', () => {
        showToast('error', 'Connection failed. Please try again.');
    });

    document.getElementById('btn-warning').addEventListener('click', () => {
        showToast('warning', 'Your session will expire in 5 minutes.');
    });

    document.getElementById('btn-info').addEventListener('click', () => {
        showToast('info', 'New update available for download.');
    });
});
