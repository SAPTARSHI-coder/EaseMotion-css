import React, { useState, useCallback } from 'react';

// Default Chevron separator SVG
const DefaultChevron = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ display: 'block' }}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

// Dynamic Stylesheet Injection to support hover selectors on adjacent siblings
const styles = `
  .ease-breadcrumb-nav {
    font-family: var(--ease-font-sans, system-ui, -apple-system, sans-serif);
    width: 100%;
  }
  .ease-breadcrumb-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 0;
  }
  .ease-breadcrumb-item-wrapper {
    display: inline-flex;
    align-items: center;
  }
  .ease-breadcrumb-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    color: var(--ease-color-neutral-500, #64748b);
    font-size: var(--ease-text-sm, 14px);
    font-weight: 500;
    position: relative;
    padding: 6px 0;
    cursor: pointer;
    transition: color var(--ease-speed-fast, 150ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1));
  }
  .ease-breadcrumb-link:hover {
    color: var(--ease-color-primary, #6c63ff);
  }
  /* Underline Sweep Transition */
  .ease-breadcrumb-link::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100%;
    height: 1.5px;
    background-color: var(--ease-color-primary, #6c63ff);
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform var(--ease-speed-medium, 300ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1));
  }
  .ease-breadcrumb-link:hover::after {
    transform: scaleX(1);
  }
  .ease-breadcrumb-separator {
    color: var(--ease-color-neutral-400, #94a3b8);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 var(--ease-space-2, 8px);
    transition: transform var(--ease-speed-medium, 300ms) var(--ease-ease, cubic-bezier(0.4, 0, 0.2, 1)), 
                color var(--ease-speed-fast, 150ms) var(--ease-ease);
  }
  /* Chevron shift animation on link hover */
  .ease-breadcrumb-animate-chevrons .ease-breadcrumb-link:hover + .ease-breadcrumb-separator {
    transform: translateX(5px) scale(1.2);
    color: var(--ease-color-primary, #6c63ff);
  }
  .ease-breadcrumb-active {
    color: var(--ease-color-neutral-800, #1e293b);
    font-weight: 650;
    font-size: var(--ease-text-sm, 14px);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 0;
  }
  .ease-breadcrumb-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .ease-breadcrumb-ellipsis-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--ease-color-neutral-700, #334155);
    border-radius: var(--ease-radius-sm, 4px);
    color: var(--ease-color-neutral-500, #64748b);
    cursor: pointer;
    font-family: var(--ease-font-mono, monospace);
    font-weight: 700;
    padding: 2px 8px;
    font-size: var(--ease-text-xs, 12px);
    transition: all var(--ease-speed-fast, 150ms) var(--ease-ease);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    outline: none;
    line-height: 1;
    height: 20px;
  }
  .ease-breadcrumb-ellipsis-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    color: var(--ease-color-primary, #6c63ff);
    border-color: var(--ease-color-primary, #6c63ff);
  }
`;

/**
 * BreadcrumbTrail - Responsive breadcrumbs with chevron animation dividers.
 *
 * @param {Object} props
 * @param {Array<Object>} props.items - Array of crumb items: `{ label, href, icon }`.
 * @param {number} [props.maxItems=8] - Max items displayed before collapsing.
 * @param {React.ReactNode} [props.separator] - Custom divider element (default Chevron SVG).
 * @param {boolean} [props.animateDividers=true] - Triggers chevron hover animations.
 * @param {Function} [props.onItemClick] - Click event callback.
 * @param {string} [props.className] - Custom parent CSS class name.
 */
export default function BreadcrumbTrail({
  items = [],
  maxItems = 8,
  separator = <DefaultChevron />,
  animateDividers = true,
  onItemClick,
  className = '',
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLinkClick = useCallback((event, item, index) => {
    if (onItemClick) {
      onItemClick(item, index);
    }
  }, [onItemClick]);

  // Helper to render single item wrapper
  const renderItem = (item, index, isLast, hasSeparator) => {
    const key = `crumb-${index}-${item.label}`;

    return (
      <React.Fragment key={key}>
        <li className="ease-breadcrumb-item-wrapper">
          {isLast ? (
            <span 
              className="ease-breadcrumb-active" 
              aria-current="page"
            >
              {item.icon && <span className="ease-breadcrumb-icon">{item.icon}</span>}
              <span>{item.label}</span>
            </span>
          ) : (
            <React.Fragment>
              <a
                href={item.href || '#'}
                onClick={(e) => handleLinkClick(e, item, index)}
                className="ease-breadcrumb-link"
              >
                {item.icon && <span className="ease-breadcrumb-icon">{item.icon}</span>}
                <span>{item.label}</span>
              </a>
              {hasSeparator && (
                <span className="ease-breadcrumb-separator" aria-hidden="true">
                  {separator}
                </span>
              )}
            </React.Fragment>
          )}
        </li>
      </React.Fragment>
    );
  };

  // Build breadcrumb items based on collapsed/expanded rules
  const renderList = () => {
    if (!items || items.length === 0) return null;

    if (items.length <= maxItems || isExpanded) {
      return items.map((item, index) => 
        renderItem(item, index, index === items.length - 1, index < items.length - 1)
      );
    }

    // Collapse middle items
    const rendered = [];
    
    // First item + separator
    rendered.push(renderItem(items[0], 0, false, true));

    // Ellipsis item + separator
    rendered.push(
      <li className="ease-breadcrumb-item-wrapper" key="ellipsis">
        <button
          onClick={() => setIsExpanded(true)}
          className="ease-breadcrumb-ellipsis-btn ease-squish-button"
          aria-label="Expand breadcrumbs"
        >
          ...
        </button>
        <span className="ease-breadcrumb-separator" aria-hidden="true">
          {separator}
        </span>
      </li>
    );

    // Last items (leaves maxItems - 1 spaces, since first & ellipsis take 2 slots)
    const lastItemsCount = maxItems - 1;
    const startIndex = items.length - lastItemsCount;
    for (let i = startIndex; i < items.length; i++) {
      rendered.push(renderItem(items[i], i, i === items.length - 1, i < items.length - 1));
    }

    return rendered;
  };

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={`ease-breadcrumb-nav ${animateDividers ? 'ease-breadcrumb-animate-chevrons' : ''} ${className}`}
    >
      {/* Inject styling definitions locally */}
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      
      <ol className="ease-breadcrumb-list">
        {renderList()}
      </ol>
    </nav>
  );
}
