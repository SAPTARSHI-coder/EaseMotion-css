import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds an event listener with cleanup
 * 
 * @param {string} eventName - Name of the event (e.g., 'click', 'keydown')
 * @param {function} handler - Event handler function
 * @param {HTMLElement} element - Element to attach listener to (default: window)
 */
const useEventListener = (eventName, handler, element = window) => {
    // Create a ref that stores the handler
    const savedHandler = useRef();

    // Update ref.current value if handler changes
    useEffect(() => {
        savedHandler.current = handler;
    }, [handler]);

    useEffect(() => {
        // Make sure element supports addEventListener
        const isSupported = element && element.addEventListener;
        if (!isSupported) return;

        // Create event listener that calls handler function stored in ref
        const eventListener = (event) => savedHandler.current(event);

        // Add event listener
        element.addEventListener(eventName, eventListener);

        // Cleanup: Remove event listener on unmount
        return () => {
            element.removeEventListener(eventName, eventListener);
        };
    }, [eventName, element]);
};

export default useEventListener;

