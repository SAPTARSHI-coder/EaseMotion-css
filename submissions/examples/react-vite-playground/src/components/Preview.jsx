import React from 'react';
import { Animate } from './wrappers/Animate';
import { Hover } from './wrappers/Hover';

function Preview({ config }) {
  const { type, duration, timingCurve, hoverLift, hoverScale, hoverGlow } = config;

  // We wrap the animated element inside multiple Hovers if needed.
  // Alternatively, we can compose the classes. Since we have wrappers, we nest them.
  let content = (
    <div className="preview-element">
      <div className="element-icon">✨</div>
      <div className="element-text">EaseMotion</div>
    </div>
  );

  // Apply Hovers
  if (hoverLift) {
    content = <Hover type="lift" className="hover-wrapper">{content}</Hover>;
  }
  if (hoverScale) {
    content = <Hover type="scale" className="hover-wrapper">{content}</Hover>;
  }
  if (hoverGlow) {
    content = <Hover type="glow" className="hover-wrapper">{content}</Hover>;
  }

  // Animation Timing is part of Animate via custom CSS variables if it's not default.
  // EaseMotion handles cubic-beziers via `--ease-ease`.
  let style = {};
  if (timingCurve === 'linear') style['--ease-ease'] = 'linear';
  if (timingCurve === 'elastic-bounce') style['--ease-ease'] = 'var(--ease-ease-bounce)';

  return (
    <Animate type={type} duration={duration} style={style}>
      {content}
    </Animate>
  );
}

export default Preview;
