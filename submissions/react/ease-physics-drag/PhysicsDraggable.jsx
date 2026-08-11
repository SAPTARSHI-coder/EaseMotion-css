import React, { useRef, useState, useEffect, useCallback } from 'react';
import './style.css';

/**
 * ============================================================================
 * EaseMotion Physics Draggable Wrapper
 * ============================================================================
 * 
 * Standard drag-and-drop interfaces feel flat and stiff. Premium interfaces 
 * apply physics to the dragged element, causing it to tilt and sway based on 
 * the velocity and direction of the user's mouse movement, simulating physical weight.
 * 
 * This component utilizes Pointer Events (rather than native HTML5 Drag and Drop)
 * to achieve 60fps continuous coordinate reading. The math is calculated in React,
 * but the actual DOM manipulation is handed off to native CSS Custom Properties,
 * ensuring hardware-accelerated 3D rendering.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to make draggable.
 * @param {number} props.maxTilt - The maximum tilt angle in degrees (default: 25).
 * @param {number} props.friction - How quickly the element returns to flat when stopped (default: 0.1).
 * @param {number} props.mass - How heavy the element feels (affects velocity-to-tilt ratio).
 * @param {string} props.className - Additional class names for the wrapper.
 */
export const PhysicsDraggable = ({
  children,
  maxTilt = 30,
  friction = 0.85,
  mass = 0.15,
  className = ''
}) => {
  const cardRef = useRef(null);
  const requestRef = useRef(null);
  
  // State for drag mechanics
  const [isDragging, setIsDragging] = useState(false);
  
  // We use refs for positional and velocity data to avoid constant React state re-renders
  // which would completely destroy drag performance.
  const pos = useRef({ x: 0, y: 0 });
  const startPos = useRef({ x: 0, y: 0 });
  const pointerStart = useRef({ x: 0, y: 0 });
  
  // Velocity and Tilt Tracking
  const velocity = useRef({ x: 0, y: 0 });
  const lastPointer = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  const currentTilt = useRef({ x: 0, y: 0 });

  /**
   * Main Physics Loop
   * Runs via requestAnimationFrame. This constantly updates the CSS custom
   * properties based on the current calculated tilt. If the user stops moving 
   * the mouse while dragging, the friction slowly reduces the tilt back to 0, 
   * simulating pendulum physics.
   */
  const updatePhysics = useCallback(() => {
    if (!cardRef.current) return;

    if (isDragging) {
      // Apply friction to slowly degrade tilt if the mouse stops moving
      currentTilt.current.x *= friction;
      currentTilt.current.y *= friction;

      // Ensure the tilt doesn't exceed our maximum constraints
      const clampedTiltX = Math.max(-maxTilt, Math.min(maxTilt, currentTilt.current.x));
      const clampedTiltY = Math.max(-maxTilt, Math.min(maxTilt, currentTilt.current.y));

      // Apply raw translation coordinates
      cardRef.current.style.setProperty('--drag-x', `${pos.current.x}px`);
      cardRef.current.style.setProperty('--drag-y', `${pos.current.y}px`);

      // Apply the calculated 3D physics tilt
      cardRef.current.style.setProperty('--drag-tilt-x', `${clampedTiltX}deg`);
      cardRef.current.style.setProperty('--drag-tilt-y', `${clampedTiltY}deg`);

      // Keep the loop running while dragging
      requestRef.current = requestAnimationFrame(updatePhysics);
    } else {
      // When dragging stops, we use a CSS transition to snap back,
      // so we don't need to manually animate the physics loop to 0.
      cardRef.current.style.setProperty('--drag-x', `0px`);
      cardRef.current.style.setProperty('--drag-y', `0px`);
      cardRef.current.style.setProperty('--drag-tilt-x', `0deg`);
      cardRef.current.style.setProperty('--drag-tilt-y', `0deg`);
    }
  }, [isDragging, friction, maxTilt]);

  /**
   * Pointer Down Event
   * Initializes the drag sequence, captures the starting coordinates,
   * and sets the cursor style.
   */
  const handlePointerDown = (e) => {
    // Prevent default text selection during drag
    e.preventDefault();
    // Capture pointer so if the mouse moves outside the element, we still track it
    e.currentTarget.setPointerCapture(e.pointerId);
    
    setIsDragging(true);
    
    // Store where the pointer clicked
    pointerStart.current = { x: e.clientX, y: e.clientY };
    
    // Store where the element was before drag (usually 0,0 unless already offset)
    startPos.current = { ...pos.current };
    
    // Reset velocity and time
    lastPointer.current = { x: e.clientX, y: e.clientY };
    lastTime.current = Date.now();
  };

  /**
   * Pointer Move Event
   * Fires constantly while the mouse is moving. Calculates the velocity
   * vector based on the distance moved divided by the time elapsed.
   */
  const handlePointerMove = (e) => {
    if (!isDragging) return;

    // 1. Calculate raw Translation
    const deltaX = e.clientX - pointerStart.current.x;
    const deltaY = e.clientY - pointerStart.current.y;
    pos.current = {
      x: startPos.current.x + deltaX,
      y: startPos.current.y + deltaY
    };

    // 2. Calculate Velocity for Physics Tilt
    const now = Date.now();
    const timeDelta = Math.max(1, now - lastTime.current); // Prevent divide by zero
    
    const moveX = e.clientX - lastPointer.current.x;
    const moveY = e.clientY - lastPointer.current.y;
    
    // Velocity = Distance / Time
    const vx = moveX / timeDelta;
    const vy = moveY / timeDelta;

    // 3. Map Velocity to Tilt
    // Dragging right (positive vx) tilts the right side down (positive Y rotation)
    // Dragging down (positive vy) tilts the bottom side down (negative X rotation)
    const targetTiltY = vx * mass * 100;
    const targetTiltX = -(vy * mass * 100);

    // Smoothly blend the current tilt towards the target tilt
    currentTilt.current.x += (targetTiltX - currentTilt.current.x) * 0.5;
    currentTilt.current.y += (targetTiltY - currentTilt.current.y) * 0.5;

    // Update trackers for next frame
    lastPointer.current = { x: e.clientX, y: e.clientY };
    lastTime.current = now;
  };

  /**
   * Pointer Up Event
   * Ends the drag sequence and releases the pointer capture.
   */
  const handlePointerUp = (e) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
    
    // Reset physics trackers
    pos.current = { x: 0, y: 0 };
    currentTilt.current = { x: 0, y: 0 };
    velocity.current = { x: 0, y: 0 };
  };

  // Lifecycle management for the requestAnimationFrame physics loop
  useEffect(() => {
    if (isDragging) {
      requestRef.current = requestAnimationFrame(updatePhysics);
    }
    return () => cancelAnimationFrame(requestRef.current);
  }, [isDragging, updatePhysics]);

  return (
    <div className={`ease-physics-wrapper ${className}`}>
      <div 
        className={`ease-physics-draggable ${isDragging ? 'is-dragging' : ''}`}
        ref={cardRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className="ease-physics-inner">
          {children}
        </div>
        
        {/* Advanced: A dynamic drop shadow that scales based on drag state */}
        <div className="ease-physics-shadow"></div>
      </div>
    </div>
  );
};

export default PhysicsDraggable;
