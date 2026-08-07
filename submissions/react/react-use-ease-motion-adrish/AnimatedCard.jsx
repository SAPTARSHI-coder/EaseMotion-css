import React from 'react';
import { useEaseMotion } from './useEaseMotion';

/**
 * AnimatedCard — demo consumer of useEaseMotion().
 * Any `em=""`-valid token string works here (same grammar the DSL
 * already documents), including engine plugins like the em-scroll
 * attribute from the scroll-trigger plugin, once that's merged too.
 */
export default function AnimatedCard({
  title,
  children,
  tokens = 'fade-in 500ms ease-out',
}) {
  const ref = useEaseMotion(tokens);

  return (
    <div ref={ref} className="ease-card ease-card-hover">
      <div className="ease-card-header">
        <h3 className="ease-card-title">{title}</h3>
      </div>
      <div className="ease-card-body">{children}</div>
    </div>
  );
}
