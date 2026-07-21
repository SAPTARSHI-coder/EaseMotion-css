import React from 'react';

const EaseMotionWrapperAG = ({ animation, duration = 300, children }) => {
  return (
    <div className={`ease-${animation}`} style={{ animationDuration: `${duration}ms` }}>
      {children}
    </div>
  );
};

export default EaseMotionWrapperAG;
