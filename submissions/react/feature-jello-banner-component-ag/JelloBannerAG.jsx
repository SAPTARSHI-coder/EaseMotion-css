import React from 'react';
import './style.css';

const JelloBannerAG = ({ isLoading, message, children }) => {
  if (!isLoading) {
    return <div className="jello-banner-resolved-ag">{children}</div>;
  }

  return (
    <div className="jello-banner-wrapper-ag" role="alert" aria-busy="true">
      <div className="jello-banner-content-ag">
        <span className="jello-banner-spinner-ag"></span>
        <span className="jello-banner-text-ag">{message || 'Loading...'}</span>
      </div>
    </div>
  );
};

export default JelloBannerAG;
