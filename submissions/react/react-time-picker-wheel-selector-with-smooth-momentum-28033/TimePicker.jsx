import React, { useState, useRef, useEffect } from 'react';

/**
 * Time Picker Wheel Selector with Smooth Momentum
 * 
 * @param {string} initialTime - Initial time in HH:MM AM/PM format (e.g. "08:30 AM")
 * @param {function} onChange - Callback triggered when time changes, receives formatted string
 */
const TimePicker = ({ 
  initialTime = "09:00 AM", 
  onChange 
}) => {
  // Parse initial time
  const [initHour, initMinStr, initAmPm] = initialTime.match(/(\d+):(\d+)\s+(AM|PM)/).slice(1);
  
  const [hour, setHour] = useState(parseInt(initHour, 10));
  const [minute, setMinute] = useState(parseInt(initMinStr, 10));
  const [ampm, setAmpm] = useState(initAmPm);

  // Arrays for the wheels
  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const periods = ['AM', 'PM'];

  // Calculate current time string to notify parent
  useEffect(() => {
    if (onChange) {
      const formattedMin = minute.toString().padStart(2, '0');
      const formattedHour = hour.toString().padStart(2, '0');
      onChange(`${formattedHour}:${formattedMin} ${ampm}`);
    }
  }, [hour, minute, ampm, onChange]);

  return (
    <div className="ease-time-picker-container">
      <div className="ease-time-picker-header">
        <h3 className="ease-time-picker-title">Set Time</h3>
        <div className="ease-time-picker-display">
          {hour.toString().padStart(2, '0')}:{minute.toString().padStart(2, '0')} {ampm}
        </div>
      </div>
      
      <div className="ease-time-picker-wheels">
        {/* Selection overlay (the glass strip in the middle) */}
        <div className="ease-time-picker-selection-strip"></div>
        
        <Wheel 
          data={hours} 
          selectedValue={hour} 
          onSelect={setHour} 
          format={(v) => v.toString().padStart(2, '0')}
        />
        <div className="ease-time-picker-colon">:</div>
        <Wheel 
          data={minutes} 
          selectedValue={minute} 
          onSelect={setMinute} 
          format={(v) => v.toString().padStart(2, '0')}
        />
        <div className="ease-time-picker-spacer"></div>
        <Wheel 
          data={periods} 
          selectedValue={ampm} 
          onSelect={setAmpm} 
        />
      </div>
    </div>
  );
};

/**
 * Individual Wheel Component
 */
const Wheel = ({ data, selectedValue, onSelect, format = (v) => v }) => {
  const scrollRef = useRef(null);
  const itemHeight = 44; // Must match CSS --item-height

  // Find index of selected value
  const selectedIndex = data.indexOf(selectedValue);

  // Auto-scroll to selected index on mount or when controlled value changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: selectedIndex * itemHeight,
        behavior: 'smooth'
      });
    }
  }, [selectedIndex, itemHeight]);

  // Handle scroll snapping and updating parent state
  const handleScroll = (e) => {
    // Debounce the scroll handling slightly to allow snapping to settle
    clearTimeout(scrollRef.current.scrollTimeout);
    
    scrollRef.current.scrollTimeout = setTimeout(() => {
      if (!scrollRef.current) return;
      
      // Calculate which item is closest to the center
      const scrollTop = scrollRef.current.scrollTop;
      const index = Math.round(scrollTop / itemHeight);
      
      // Ensure index is within bounds
      const safeIndex = Math.max(0, Math.min(index, data.length - 1));
      
      if (data[safeIndex] !== selectedValue) {
        onSelect(data[safeIndex]);
      }
    }, 50);
  };

  return (
    <div 
      className="ease-time-picker-column" 
      ref={scrollRef}
      onScroll={handleScroll}
    >
      {/* Top padding to center first item */}
      <div className="ease-time-picker-pad"></div>
      
      {data.map((item, index) => {
        // Calculate distance from center for perspective scaling
        const dist = Math.abs(index - selectedIndex);
        const isCenter = dist === 0;
        
        // CSS custom variables passed via style for dynamic 3D rendering
        const style = {
          '--dist': dist,
          opacity: isCenter ? 1 : Math.max(0.2, 1 - (dist * 0.3)),
          transform: `rotateX(${dist * -15}deg) scale(${isCenter ? 1 : Math.max(0.7, 1 - (dist * 0.1))})`
        };

        return (
          <div 
            key={item} 
            className={`ease-time-picker-item ${isCenter ? 'is-selected' : ''}`}
            style={style}
            onClick={() => {
              // Allow clicking an item to auto-scroll to it
              scrollRef.current.scrollTo({
                top: index * itemHeight,
                behavior: 'smooth'
              });
              onSelect(item);
            }}
          >
            {format(item)}
          </div>
        );
      })}
      
      {/* Bottom padding to center last item */}
      <div className="ease-time-picker-pad"></div>
    </div>
  );
};

export default TimePicker;
