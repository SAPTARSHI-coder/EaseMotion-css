/**
 * EaseMotion CSS — AvatarStack
 * ============================================================
 * Overlapping avatar group that fans out on hover or focus.
 *
 * The accessibility problem this solves: an avatar stack that collapses to
 * "+7" gives a screen reader user the number and nothing else. The seven
 * people are visually present but semantically absent. Here the full member
 * list is always exposed as readable text, and the visual stack — including
 * the overflow chip — is hidden from the accessibility tree.
 *
 * Initials are derived rather than required, so a member with no avatar
 * image still renders something meaningful instead of a broken <img>.
 * ============================================================
 */

import { useMemo } from 'react';

/**
 * Derive up to two initials from a name.
 * Falls back to '?' rather than an empty circle for unnamed members.
 */
function initialsFrom(name) {
  if (typeof name !== 'string' || name.trim() === '') return '?';

  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();

  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Deterministic tone index from a name, so a given person keeps the same
 * colour across renders and across pages. Math.random() would reshuffle on
 * every render and make the list feel unstable.
 */
function toneFor(name, toneCount) {
  const source = typeof name === 'string' ? name : '';
  let hash = 0;

  for (let i = 0; i < source.length; i += 1) {
    hash = (hash * 31 + source.charCodeAt(i)) >>> 0;
  }

  return hash % toneCount;
}

const TONE_COUNT = 6;

/**
 * @param {object} props
 * @param {Array<{id?: string|number, name: string, src?: string}>} props.members
 * @param {number}  [props.max=4]     Avatars shown before collapsing to +N.
 * @param {'sm'|'md'|'lg'} [props.size='md']
 * @param {boolean} [props.fan=true]  Fan the stack out on hover/focus.
 * @param {string}  [props.label='Team members']  Accessible group label.
 * @param {string}  [props.className]
 */
export default function AvatarStack({
  members = [],
  max = 4,
  size = 'md',
  fan = true,
  label = 'Team members',
  className = '',
  ...rest
}) {
  // A max below 1 would render only the overflow chip and hide everyone,
  // so it is clamped rather than trusted.
  const safeMax = Number.isFinite(max) && max >= 1 ? Math.floor(max) : 1;

  const { shown, overflow, spokenList } = useMemo(() => {
    const valid = members.filter((m) => m && typeof m === 'object');
    const visible = valid.slice(0, safeMax);

    return {
      shown: visible,
      overflow: Math.max(0, valid.length - visible.length),
      spokenList: valid.map((m) => m.name || 'Unnamed member').join(', '),
    };
  }, [members, safeMax]);

  if (shown.length === 0) {
    return null;
  }

  const classes = [
    'ease-avstack-ad',
    `ease-avstack-ad--${size}`,
    fan ? 'ease-avstack-ad--fan' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {/* The complete roster, always announced — not just the count. */}
      <span className="ease-avstack-ad__sr">
        {label}: {spokenList}
      </span>

      <span className="ease-avstack-ad__row" aria-hidden="true">
        {shown.map((member, index) => (
          <span
            className="ease-avstack-ad__item"
            key={member.id ?? `${member.name}-${index}`}
            style={{ '--av-index-ad': index }}
          >
            {member.src ? (
              <img
                className="ease-avstack-ad__img"
                src={member.src}
                alt=""
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span
                className={`ease-avstack-ad__initials ease-avstack-ad__initials--t${toneFor(
                  member.name,
                  TONE_COUNT,
                )}`}
              >
                {initialsFrom(member.name)}
              </span>
            )}
          </span>
        ))}

        {overflow > 0 && (
          <span
            className="ease-avstack-ad__item ease-avstack-ad__item--more"
            style={{ '--av-index-ad': shown.length }}
          >
            <span className="ease-avstack-ad__initials">+{overflow}</span>
          </span>
        )}
      </span>
    </div>
  );
}
