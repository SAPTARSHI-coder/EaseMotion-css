import React from "react";

const DEFAULT_STAGGER = 100;
const DEFAULT_DELAY = 0;
const DEFAULT_DURATION = "medium";
const DEFAULT_TAG = "div";

const DURATION_KEYWORDS = new Set(["fast", "medium", "slow"]);

function normalizeTag(tag) {
  return typeof tag === "string" && tag.trim() ? tag.trim() : DEFAULT_TAG;
}

function normalizeDuration(duration) {
  if (typeof duration === "number" && Number.isFinite(duration)) {
    return duration;
  }

  if (
    typeof duration === "string" &&
    DURATION_KEYWORDS.has(duration.trim())
  ) {
    return duration.trim();
  }

  return DEFAULT_DURATION;
}

function flattenChildren(children, parentKey = "root") {
  const items = [];

  React.Children.toArray(children).forEach((child, index) => {
    const childKey =
      React.isValidElement(child) && child.key != null
        ? String(child.key)
        : String(index);

    const normalizedKey = `${parentKey}-${childKey}`;

    if (React.isValidElement(child) && child.type === React.Fragment) {
      items.push(...flattenChildren(child.props.children, normalizedKey));
      return;
    }

    items.push({
      child,
      key: normalizedKey,
    });
  });

  return items;
}

function buildClassName(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

function buildStyle(existingStyle, delayMs, duration) {
  const mergedStyle = existingStyle ? { ...existingStyle } : {};

  mergedStyle.animationDelay = `${delayMs}ms`;

  if (typeof duration === "number") {
    mergedStyle.animationDuration = `${duration}ms`;
  }

  return mergedStyle;
}

function AnimateGroup({
  type,
  stagger = DEFAULT_STAGGER,
  delay = DEFAULT_DELAY,
  duration = DEFAULT_DURATION,
  reverse = false,
  tag = DEFAULT_TAG,
  className,
  children,
}) {
  const WrapperTag = normalizeTag(tag);
  const normalizedChildren = flattenChildren(children);
  const totalChildren = normalizedChildren.length;
  const normalizedDuration = normalizeDuration(duration);

  const normalizedType =
    typeof type === "string" && type.trim() ? type.trim() : null;

  const animationClassName = normalizedType
    ? `ease-${normalizedType}`
    : null;

  const durationClassName =
    typeof normalizedDuration === "string"
      ? `ease-duration-${normalizedDuration}`
      : null;

  const animatedChildren = normalizedChildren.map(
    ({ child, key }, index) => {
      const staggerIndex = reverse
        ? totalChildren - 1 - index
        : index;

      const computedDelay = delay + staggerIndex * stagger;

      const itemClassName = buildClassName(
        "ease-animate-group-ag404-item",
        animationClassName,
        durationClassName
      );

      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          className: buildClassName(
            child.props.className,
            itemClassName
          ),
          style: buildStyle(
            child.props.style,
            computedDelay,
            normalizedDuration
          ),
        });
      }

      return React.createElement(
        "span",
        {
          key: `ease-animate-group-ag404-item-${key}`,
          className: itemClassName,
          style: buildStyle(
            undefined,
            computedDelay,
            normalizedDuration
          ),
        },
        child
      );
    }
  );

  return React.createElement(
    WrapperTag,
    {
      className: buildClassName(
        "ease-animate-group-ag404",
        className
      ),
    },
    animatedChildren
  );
}

export default AnimateGroup;