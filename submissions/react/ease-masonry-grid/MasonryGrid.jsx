import React from 'react';
import './style.css';

/**
 * A highly performant, JS-free Masonry Grid using CSS columns.
 * Implements staggered entrance animations utilizing EaseMotion utilities.
 */
export const MasonryGrid = ({ items, columns = 3, gap = 16 }) => {
  return (
    <div 
      className="ease-masonry-container"
      style={{ 
        columnCount: columns, 
        columnGap: gap 
      }}
    >
      {items.map((item, index) => {
        // Calculate a staggered delay based on the index (cap at 1.5s to prevent excessive waiting)
        const animationDelay = `${Math.min(index * 0.1, 1.5)}s`;
        
        return (
          <div 
            key={item.id || index}
            className="ease-masonry-item ease-slide-up ease-fade-in"
            style={{ 
              marginBottom: gap,
              animationDelay,
              animationFillMode: 'both' // Ensures items stay hidden before their delay triggers
            }}
          >
            {/* 
              Render the child content. 
              In a real application, you might pass render props or ReactNodes.
            */}
            <div className="ease-masonry-content">
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="ease-masonry-image"
                />
              )}
              {item.title && <h3 className="ease-masonry-title">{item.title}</h3>}
              {item.description && <p className="ease-masonry-desc">{item.description}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MasonryGrid;
