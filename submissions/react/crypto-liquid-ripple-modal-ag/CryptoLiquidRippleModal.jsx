import React, { useEffect, useRef, useState } from "react";

/**
 * CryptoLiquidRippleModal - A React Modal with a coordinates-triggered Liquid Ripple transition
 * custom styled for Cryptocurrency Exchanges.
 *
 * @param {object} props
 * @param {boolean} props.isOpen - Whether the modal is currently open
 * @param {function} props.onClose - Callback to close the modal
 * @param {object} props.triggerCoords - Optional target coordinates { x, y } to originate the liquid ripple reveal
 * @param {string} props.title - Modal title header (default: "Swap Assets")
 * @param {string} props.gasFee - Estimated gas fee descriptor (default: "$2.40")
 * @param {string} props.exchangeRate - Conversion rate descriptor (default: "1 ETH = 3,450 USDC")
 */
export default function CryptoLiquidRippleModal({
  isOpen,
  onClose,
  triggerCoords,
  title = "Swap Assets",
  gasFee = "$2.40",
  exchangeRate = "1 ETH = 3,450.00 USDC",
}) {
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Simulated cryptocurrency swap state variables
  const [payAmount, setPayAmount] = useState("1.00");
  const [receiveAmount, setReceiveAmount] = useState("3450.00");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Synchronize inputs based on active trading conversions
  const handlePayChange = (val) => {
    setPayAmount(val);
    if (!isNaN(parseFloat(val))) {
      setReceiveAmount((parseFloat(val) * 3450).toFixed(2));
    } else {
      setReceiveAmount("0.00");
    }
  };

  const handleSwapTrigger = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setPayAmount("1.00");
    setReceiveAmount("3450.00");
    onClose();
  };

  // Keyboard accessibility: Escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Focus recovery & focus capture trapping loops
  useEffect(() => {
    if (isOpen) {
      // Record currently focused element to return focus later
      const priorFocusElement = document.activeElement;

      // Clear status overrides
      setIsSuccess(false);
      setIsSubmitting(false);

      // Focus first input inside dialog
      const timer = setTimeout(() => {
        if (firstInputRef.current) {
          firstInputRef.current.focus();
        }
      }, 80); // Slight delay for clip-path transition render

      return () => {
        clearTimeout(timer);
        if (
          priorFocusElement &&
          typeof priorFocusElement.focus === "function"
        ) {
          priorFocusElement.focus();
        }
      };
    }
  }, [isOpen]);

  // Tab key focus trap inside modal content elements
  const handleKeyDownTrap = (e) => {
    if (e.key !== "Tab") return;
    if (!modalRef.current) return;

    const focusableSelectors =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements =
      modalRef.current.querySelectorAll(focusableSelectors);

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      // Shift + Tab: loop back to end element if active is first
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      // Tab: loop back to start element if active is last
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  };

  // Formulate ripple location variables based on triggering click points
  const rippleStyles = triggerCoords
    ? {
        "--ripple-x": `${triggerCoords.x}px`,
        "--ripple-y": `${triggerCoords.y}px`,
      }
    : {
        "--ripple-x": "50%",
        "--ripple-y": "50%",
      };

  return (
    <div
      className={`crypto-modal-overlay ease-modal-overlay ${isOpen ? "is-active" : ""}`}
      onClick={onClose}
      onKeyDown={handleKeyDownTrap}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div
        ref={modalRef}
        className="crypto-modal-content ease-modal"
        style={rippleStyles}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="crypto-modal-title"
      >
        {/* Header Section */}
        <div className="crypto-header-deck">
          <h2 id="crypto-modal-title" className="crypto-header-title">
            <span className="crypto-status-pulse"></span>
            {title}
          </h2>
          <button
            className="crypto-modal-close-btn"
            onClick={onClose}
            aria-label="Close Modal"
          >
            &times;
          </button>
        </div>

        {/* Dynamic State Layout (Swap Form / Success Screen) */}
        {!isSuccess ? (
          <form onSubmit={handleSwapTrigger} className="crypto-form-body">
            {/* Input Token 1 (Pay) */}
            <div className="crypto-input-group">
              <div className="crypto-input-label-row">
                <span>You Pay</span>
                <span>Balance: 12.45 ETH</span>
              </div>
              <div className="crypto-input-row">
                <input
                  ref={firstInputRef}
                  type="number"
                  step="any"
                  className="crypto-val-input"
                  value={payAmount}
                  onChange={(e) => handlePayChange(e.target.value)}
                  placeholder="0.0"
                  required
                  disabled={isSubmitting}
                />
                <div className="crypto-token-badge">
                  <span className="crypto-token-icon icon-eth">Ξ</span>
                  <span>ETH</span>
                </div>
              </div>
            </div>

            {/* Separator convert divider */}
            <div className="crypto-arrow-divider">
              <div className="crypto-arrow-badge">↓</div>
            </div>

            {/* Input Token 2 (Receive) */}
            <div className="crypto-input-group">
              <div className="crypto-input-label-row">
                <span>You Receive (Estimated)</span>
                <span>Balance: 1,200.00 USDC</span>
              </div>
              <div className="crypto-input-row">
                <input
                  type="text"
                  className="crypto-val-input"
                  value={receiveAmount}
                  readOnly
                  placeholder="0.0"
                  disabled={isSubmitting}
                />
                <div className="crypto-token-badge">
                  <span className="crypto-token-icon icon-usdc">$</span>
                  <span>USDC</span>
                </div>
              </div>
            </div>

            {/* Exchange Details Section */}
            <div className="crypto-details-box">
              <div className="crypto-details-row">
                <span>Rate</span>
                <span className="crypto-details-value">{exchangeRate}</span>
              </div>
              <div className="crypto-details-row">
                <span>Network Gas Estimate</span>
                <span className="crypto-details-value">{gasFee}</span>
              </div>
              <div className="crypto-details-row">
                <span>Slippage Tolerance</span>
                <span className="crypto-details-value">0.50%</span>
              </div>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="crypto-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing Swap..." : "Confirm Exchange"}
            </button>
          </form>
        ) : (
          <div
            className="crypto-form-body"
            style={{ textAlign: "center", padding: "40px 24px" }}
          >
            {/* Success Icon */}
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 255, 136, 0.1)",
                border: "2px solid var(--crypto-accent-green)",
                display: "flex",
                alignItems: "center",
                justifycontent: "center",
                justifyContent: "center",
                margin: "0 auto 20px auto",
                fontSize: "2rem",
                color: "var(--crypto-accent-green)",
                boxShadow: "var(--crypto-glow-green)",
              }}
            >
              ✓
            </div>
            <h3 style={{ fontSize: "1.3rem", margin: "0 0 10px 0" }}>
              Transaction Submitted
            </h3>
            <p className="modal-desc" style={{ marginBottom: "30px" }}>
              Swapped <strong>{payAmount} ETH</strong> for{" "}
              <strong>{receiveAmount} USDC</strong>. Your transaction has been
              dispatched to the blockchain network block.
            </p>
            <button
              onClick={handleReset}
              className="crypto-submit-btn"
              style={{
                background: "var(--crypto-text-bright)",
                color: "var(--crypto-bg)",
                boxShadow: "none",
              }}
            >
              Back to Exchange
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
