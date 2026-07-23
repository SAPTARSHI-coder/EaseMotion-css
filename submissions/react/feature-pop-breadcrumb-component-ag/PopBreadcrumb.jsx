import React from "react";
import "./style.css";

/**
 * PopBreadcrumb Component
 *
 * A lightweight, accessible React breadcrumb component featuring a smooth CSS scale-pop
 * transition on hover and focus for enabled items, with visual distinction and non-interactivity
 * for disabled items.
 *
 * @param {Object} props
 * @param {Array<{label: string, href?: string, disabled?: boolean, current?: boolean}>} [props.items=[]] - Array of breadcrumb items
 * @param {string} [props.separator="/"] - Visual separator between items
 */
export default function PopBreadcrumb({ items = [], separator = "/" }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="pop-breadcrumb-nav-ag">
      <ol className="pop-breadcrumb-list-ag">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isCurrent = Boolean(item.current ?? isLast);
          const isDisabled = Boolean(item.disabled);
          const itemKey = `${item.label}-${item.href ?? index}`;

          let itemContent;

          if (isDisabled) {
            itemContent = (
              <span
                className="pop-breadcrumb-text-ag pop-breadcrumb-disabled-ag"
                aria-disabled="true"
                aria-current={isCurrent ? "page" : undefined}
              >
                {item.label}
              </span>
            );
          } else if (item.href && !isCurrent) {
            itemContent = (
              <a
                href={item.href}
                className="pop-breadcrumb-link-ag"
                aria-current={isCurrent ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          } else {
            itemContent = (
              <span
                className="pop-breadcrumb-text-ag"
                aria-current={isCurrent ? "page" : undefined}
              >
                {item.label}
              </span>
            );
          }

          return (
            <li key={itemKey} className="pop-breadcrumb-item-ag">
              {itemContent}
              {!isLast && (
                <span className="pop-breadcrumb-separator-ag" aria-hidden="true">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
