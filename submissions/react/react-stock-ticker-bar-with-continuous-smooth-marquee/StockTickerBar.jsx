import React from 'react';
import './style.css';

/**
 * StockTickerBar
 * A horizontally scrolling stock ticker with a continuous, seamless
 * marquee animation. Pauses on hover.
 */
export default function StockTickerBar({ items, speed = 30, pauseOnHover = true }) {
  const duplicated = [...items, ...items];

  return (
    <div className="ease-ticker">
      <div
        className={`ease-ticker__track ${pauseOnHover ? 'ease-ticker__track--pausable' : ''}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((item, index) => {
          const isUp = item.change >= 0;
          return (
            <div className="ease-ticker__item" key={`${item.symbol}-${index}`}>
              <span className="ease-ticker__symbol">{item.symbol}</span>
              <span className="ease-ticker__price">{item.price}</span>
              <span className={`ease-ticker__change ${isUp ? 'ease-ticker__change--up' : 'ease-ticker__change--down'}`}>
                <svg className="ease-ticker__arrow" viewBox="0 0 24 24" width="10" height="10" aria-hidden="true">
                  <path d="M12 4l8 8h-5v8h-6v-8H4z" />
                </svg>
                {Math.abs(item.change)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
