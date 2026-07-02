import React, { useState, useCallback, useRef, useEffect } from 'react';

/**
 * CodeSnippetBlock - A premium, interactive code block React component.
 * Integrates directly with EaseMotion CSS utility/animation classes.
 *
 * @param {Object} props
 * @param {string} props.code - The code snippet to display and copy.
 * @param {string} [props.language] - Language label shown in the header.
 * @param {string} [props.buttonText] - Default text label for the copy button.
 * @param {string} [props.copiedText] - Success text label shown after copy.
 * @param {Function} [props.onCopy] - Optional callback fired when code is copied.
 * @param {string} [props.className] - Additional wrapper container CSS class names.
 */
export default function CodeSnippetBlock({
  code,
  language = '',
  buttonText = 'Copy',
  copiedText = 'Copied!',
  onCopy,
  className = '',
}) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const handleCopy = useCallback(async () => {
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      if (onCopy) {
        onCopy();
      }

      // Reset copied state after 2 seconds
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error('CodeSnippetBlock: Failed to copy to clipboard', err);
    }
  }, [code, onCopy]);

  // Clean up timer on component unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={`ease-code-block-container ${className}`}
      style={{
        fontFamily: 'var(--ease-font-sans, system-ui, -apple-system, sans-serif)',
        borderRadius: 'var(--ease-radius-lg, 12px)',
        border: '1px solid var(--ease-color-neutral-700, #334155)',
        backgroundColor: 'var(--ease-color-neutral-900, #0f172a)',
        color: 'var(--ease-color-neutral-200, #e2e8f0)',
        overflow: 'hidden',
        boxShadow: 'var(--ease-shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1))',
        position: 'relative',
        width: '100%',
      }}
    >
      {/* Header Bar */}
      <div
        className="ease-code-block-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 'var(--ease-space-3, 12px) var(--ease-space-4, 16px)',
          backgroundColor: 'rgba(255, 255, 255, 0.02)',
          borderBottom: '1px solid var(--ease-color-neutral-800, #1e293b)',
        }}
      >
        {/* Language Indicator */}
        <span
          className="ease-code-block-language"
          style={{
            fontFamily: 'var(--ease-font-mono, monospace)',
            fontSize: 'var(--ease-text-xs, 12px)',
            color: 'var(--ease-color-neutral-400, #94a3b8)',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            fontWeight: '600',
          }}
        >
          {language || 'code'}
        </span>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          aria-label={copied ? copiedText : buttonText}
          className={`ease-squish-button ${copied ? 'ease-pulse-border-emphasis' : ''}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--ease-font-sans, sans-serif)',
            fontSize: 'var(--ease-text-xs, 12px)',
            fontWeight: '600',
            color: copied ? 'var(--ease-color-success, #22c55e)' : 'var(--ease-color-neutral-300, #cbd5e1)',
            backgroundColor: copied ? 'rgba(34, 197, 94, 0.1)' : 'rgba(255, 255, 255, 0.04)',
            border: `1px solid ${copied ? 'var(--ease-color-success, #22c55e)' : 'var(--ease-color-neutral-700, #334155)'}`,
            borderRadius: 'var(--ease-radius-md, 8px)',
            padding: '6px 14px',
            cursor: 'pointer',
            outline: 'none',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all var(--ease-speed-fast, 150ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1))',
          }}
        >
          {/* Animated Icon and Text block */}
          {copied ? (
            <>
              {/* Success Checkmark Icon (Bounces in) */}
              <svg
                className="ease-bounce-in"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {/* Success Text (Zooms/Fades in) */}
              <span className="ease-zoom-in" aria-live="polite">
                {copiedText}
              </span>
            </>
          ) : (
            <>
              {/* Standard Copy Icon */}
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>{buttonText}</span>
            </>
          )}
        </button>
      </div>

      {/* Code Text Snippet Container */}
      <pre
        style={{
          margin: 0,
          padding: 'var(--ease-space-4, 16px)',
          overflowX: 'auto',
          backgroundColor: 'transparent',
        }}
      >
        <code
          style={{
            fontFamily: 'var(--ease-font-mono, monospace)',
            fontSize: 'var(--ease-text-sm, 14px)',
            lineHeight: 'var(--ease-leading-normal, 1.6)',
            color: 'var(--ease-color-neutral-100, #f1f5f9)',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
          }}
        >
          {code}
        </code>
      </pre>
    </div>
  );
}
