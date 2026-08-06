/**
 * EaseMotion CSS — StatusDot
 * ============================================================
 * Service status indicator.
 *
 * Status UI is the canonical colour-only interface: a green dot and a red
 * dot are identical to a user with deuteranopia, which is roughly 1 in 12
 * men. Every state here carries a distinct SHAPE as well as a colour —
 * a filled circle, a hollow ring, a square, a diamond — so the status is
 * readable in greyscale and by anyone.
 *
 * The pulse is bound to `live`, not to severity. An outage is not more
 * "live" than an operational service; what the pulse communicates is
 * "this reading is current", which is a different axis entirely.
 * ============================================================
 */

import { useMemo } from 'react';

/** Shape and default label per status. */
const STATUSES = {
  operational: { shape: 'circle', label: 'Operational' },
  degraded: { shape: 'diamond', label: 'Degraded performance' },
  outage: { shape: 'square', label: 'Outage' },
  maintenance: { shape: 'ring', label: 'Under maintenance' },
  unknown: { shape: 'ring', label: 'Status unknown' },
};

/**
 * @param {object} props
 * @param {'operational'|'degraded'|'outage'|'maintenance'|'unknown'} [props.status='unknown']
 * @param {string}  [props.label]      Service name. Prefixes the announcement.
 * @param {boolean} [props.showLabel=false]  Render the status text visibly.
 * @param {boolean} [props.live=false] Pulse to indicate a current reading.
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {string}  [props.className]
 */
export default function StatusDot({
  status = 'unknown',
  label,
  showLabel = false,
  live = false,
  size = 'md',
  className = '',
  ...rest
}) {
  // Unknown status degrades rather than throwing on an undefined lookup.
  const config = STATUSES[status] ?? STATUSES.unknown;

  const classes = useMemo(
    () =>
      [
        'ease-status-ad',
        `ease-status-ad--${status in STATUSES ? status : 'unknown'}`,
        `ease-status-ad--${size}`,
        `ease-status-ad--shape-${config.shape}`,
        live ? 'ease-status-ad--live' : '',
        className,
      ]
        .filter(Boolean)
        .join(' '),
    [status, size, config.shape, live, className],
  );

  // "Payments API: Degraded performance" reads correctly; a bare
  // "Degraded performance" leaves the listener asking what is degraded.
  const announcement = label ? `${label}: ${config.label}` : config.label;

  return (
    <span className={classes} {...rest}>
      <span className="ease-status-ad__mark" aria-hidden="true" />

      {showLabel ? (
        <span className="ease-status-ad__text">
          {label ? `${label} — ${config.label}` : config.label}
        </span>
      ) : (
        <span className="ease-status-ad__sr">{announcement}</span>
      )}
    </span>
  );
}
