import React, { useState } from 'react';

/**
 * CryptoCard Component
 * 
 * A React component utilizing a smooth Elastic Slide interaction transition, 
 * designed for Cryptocurrency Exchange Layouts.
 * 
 * @param {Object} props
 * @param {string} props.coinName - The name of the cryptocurrency (e.g., 'Bitcoin').
 * @param {string} props.coinSymbol - The symbol of the cryptocurrency (e.g., 'BTC').
 * @param {string} props.price - The current price (e.g., '$64,230.00').
 * @param {string} props.change - The 24h change (e.g., '+2.45%').
 * @param {boolean} props.isPositive - Whether the change is positive (true) or negative (false).
 */
const CryptoCard = ({
  coinName = 'Bitcoin',
  coinSymbol = 'BTC',
  price = '$64,230.00',
  change = '+2.45%',
  isPositive = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <style>{`
        /* Crypto Exchange Variables */
        :root {
          --ease-crypto-bg: #0b0e11;
          --ease-crypto-card-bg: #181a20;
          --ease-crypto-card-hover: #1f222a;
          --ease-crypto-border: #2b3139;
          
          --ease-crypto-text-primary: #eaecef;
          --ease-crypto-text-secondary: #848e9c;
          --ease-crypto-green: #0ecb81;
          --ease-crypto-red: #f6465d;
          
          --ease-crypto-radius: 8px;
          --ease-crypto-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.24);
          
          --ease-slide-timing: 0.5s;
          --ease-slide-easing-elastic: cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .ease-crypto-card {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background: var(--ease-crypto-card-bg);
          border: 1px solid var(--ease-crypto-border);
          border-radius: var(--ease-crypto-radius);
          padding: 20px;
          width: 280px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease, border-color 0.3s ease;
          box-shadow: var(--ease-crypto-shadow);
        }

        .ease-crypto-card:hover {
          background: var(--ease-crypto-card-hover);
          border-color: var(--ease-crypto-text-secondary);
        }

        .ease-crypto-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .ease-crypto-title {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ease-crypto-symbol {
          color: var(--ease-crypto-text-primary);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .ease-crypto-name {
          color: var(--ease-crypto-text-secondary);
          font-size: 0.85rem;
          background: rgba(132, 142, 156, 0.15);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .ease-crypto-price {
          color: var(--ease-crypto-text-primary);
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .ease-crypto-change {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .ease-crypto-change.positive {
          color: var(--ease-crypto-green);
        }

        .ease-crypto-change.negative {
          color: var(--ease-crypto-red);
        }

        /* The Elastic Slide Layer */
        .ease-crypto-action-layer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(14, 203, 129, 0.1);
          border-top: 1px solid rgba(14, 203, 129, 0.3);
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          
          /* Initial State: hidden below the card */
          transform: translateY(100%);
          opacity: 0;
          transition: transform var(--ease-slide-timing) var(--ease-slide-easing-elastic), 
                      opacity 0.2s ease;
        }

        .ease-crypto-card:hover .ease-crypto-action-layer {
          /* Hover State: elastic slide up */
          transform: translateY(0);
          opacity: 1;
        }

        .ease-crypto-action-btn {
          background: var(--ease-crypto-green);
          color: #000;
          border: none;
          padding: 6px 12px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
        }
        
        .ease-crypto-card-content {
          transition: transform var(--ease-slide-timing) var(--ease-slide-easing-elastic);
        }

        .ease-crypto-card:hover .ease-crypto-card-content {
          transform: translateY(-10px);
        }
      `}</style>

      <div 
        className="ease-crypto-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tabIndex={0}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <div className="ease-crypto-card-content">
          <div className="ease-crypto-header">
            <div className="ease-crypto-title">
              <span className="ease-crypto-symbol">{coinSymbol}</span>
              <span className="ease-crypto-name">{coinName}</span>
            </div>
          </div>
          <div className="ease-crypto-price">{price}</div>
          <div className={`ease-crypto-change ${isPositive ? 'positive' : 'negative'}`}>
            {change}
          </div>
        </div>

        <div className="ease-crypto-action-layer">
          <span style={{ color: 'var(--ease-crypto-green)', fontWeight: '500', fontSize: '0.85rem' }}>
            Trade Now
          </span>
          <button className="ease-crypto-action-btn">Buy</button>
        </div>
      </div>
    </>
  );
};

export default CryptoCard;
