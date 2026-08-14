import { Children, cloneElement, isValidElement } from 'react';

/**
 * StaggeredGrid
 * Clones its children to inject a per-item `--i` custom property, so a CSS
 * cascade delay can be expressed once instead of per child.
 *
 * The stagger is capped so long lists do not take unbounded time to settle.
 */
export default function StaggeredGrid({
  children,
  step = 60,
  maxDelay = 600,
  animation = 'ease-slide-up',
  as: Tag = 'div',
  className = '',
  style,
  ...rest
}) {
  const items = Children.toArray(children).filter(isValidElement);

  return (
    <Tag
      className={`sgrid ${className}`.trim()}
      style={{ '--sgrid-step': `${step}ms`, ...style }}
      {...rest}
    >
      {items.map((child, i) => {
        // Cap the index so item 200 does not wait 12 seconds.
        const cappedIndex = Math.min(i, Math.floor(maxDelay / step));

        return cloneElement(child, {
          key: child.key ?? i,
          className: [child.props.className, 'sgrid__item', animation]
            .filter(Boolean)
            .join(' '),
          style: { ...child.props.style, '--i': cappedIndex },
        });
      })}
    </Tag>
  );
}
