import React from "react";

const DEFAULT_DELAY = 0;
const DEFAULT_DURATION = "medium";
const DEFAULT_TAG = "div";

const DURATION_KEYWORDS = {
  fast: 150,
  medium: 300,
  slow: 600,
};

function isFiniteNonNegativeNumber(value) {
  return (
    typeof value === "number" &&
    Number.isFinite(value) &&
    value >= 0
  );
}

function normalizeDelay(value) {
  return isFiniteNonNegativeNumber(value) ? value : 0;
}

function normalizeTag(tag) {
  return typeof tag === "string" && tag.trim()
    ? tag.trim()
    : DEFAULT_TAG;
}

function normalizeDuration(duration) {
  if (typeof duration === "number") {
    if (isFiniteNonNegativeNumber(duration)) {
      return {
        timingMs: duration,
        className: null,
        numeric: true,
      };
    }

    return {
      timingMs: DURATION_KEYWORDS.medium,
      className: "ease-duration-medium",
      numeric: false,
    };
  }

  const normalized =
    typeof duration === "string" ? duration.trim() : "";

  if (Object.prototype.hasOwnProperty.call(
    DURATION_KEYWORDS,
    normalized
  )) {
    return {
      timingMs: DURATION_KEYWORDS[normalized],
      className: `ease-duration-${normalized}`,
      numeric: false,
    };
  }

  return {
    timingMs: DURATION_KEYWORDS.medium,
    className: "ease-duration-medium",
    numeric: false,
  };
}

function normalizeType(type) {
  return typeof type === "string" ? type.trim() : "";
}

function buildClassName(...classNames) {
  return classNames.filter(Boolean).join(" ");
}

function mergeBaseStyles(stepStyle, childStyle) {
  return {
    ...(stepStyle || {}),
    ...(childStyle || {}),
  };
}

function applyAnimationStyle(
  existingStyle,
  animationDelay,
  numericDurationMs
) {
  const mergedStyle = existingStyle
    ? { ...existingStyle }
    : {};

  mergedStyle.animationDelay = `${animationDelay}ms`;

  if (typeof numericDurationMs === "number") {
    mergedStyle.animationDuration = `${numericDurationMs}ms`;
  }

  return mergedStyle;
}

function flattenNodes(children) {
  const items = [];

  React.Children.toArray(children).forEach((child) => {
    if (
      React.isValidElement(child) &&
      child.type === React.Fragment
    ) {
      items.push(...flattenNodes(child.props.children));
      return;
    }

    items.push(child);
  });

  return items;
}

function MotionStep({ children }) {
  return React.createElement(
    React.Fragment,
    null,
    children
  );
}

function getMotionStepContent(stepChildren) {
  const flattened = flattenNodes(stepChildren).filter(
    (item) =>
      item !== null &&
      item !== undefined &&
      item !== false
  );

  if (flattened.length === 0) {
    return null;
  }

  if (flattened.length === 1) {
    return flattened[0];
  }

  return flattened;
}

function renderMotionStepContent(
  content,
  stepProps,
  motionClassName,
  delayMs,
  durationInfo,
  stepKey
) {
  if (
    content === null ||
    content === undefined ||
    content === false
  ) {
    return null;
  }

  const stepClassName = buildClassName(
    "ease-motion-timeline-ag404-item",
    motionClassName,
    durationInfo.className,
    stepProps.className
  );

  const numericDurationMs = durationInfo.numeric
    ? durationInfo.timingMs
    : null;

  if (React.isValidElement(content)) {
    const combinedStyle = mergeBaseStyles(
      stepProps.style,
      content.props.style
    );

    return React.cloneElement(content, {
      className: buildClassName(
        content.props.className,
        stepClassName
      ),
      style: applyAnimationStyle(
        combinedStyle,
        delayMs,
        numericDurationMs
      ),
    });
  }

  return React.createElement(
    "span",
    {
      key: stepKey,
      className: stepClassName,
      style: applyAnimationStyle(
        stepProps.style,
        delayMs,
        numericDurationMs
      ),
    },
    content
  );
}

function MotionTimeline({
  delay = DEFAULT_DELAY,
  reverse = false,
  tag = DEFAULT_TAG,
  className,
  children,
}) {
  const WrapperTag = normalizeTag(tag);
  const normalizedDelay = normalizeDelay(delay);
  const nodes = flattenNodes(children);

  const motionStepEntries = nodes.filter(
    (child) =>
      React.isValidElement(child) &&
      child.type === MotionStep
  );

  const timingByChild = new Map();
  let currentDelay = normalizedDelay;

  const sequencingOrder = reverse
    ? [...motionStepEntries].reverse()
    : motionStepEntries;

  sequencingOrder.forEach((stepElement) => {
    const durationInfo = normalizeDuration(
      stepElement.props.duration ?? DEFAULT_DURATION
    );

    const gap = normalizeDelay(stepElement.props.gap);

    timingByChild.set(stepElement, {
      delayMs: currentDelay,
      durationInfo,
    });

    currentDelay += durationInfo.timingMs + gap;
  });

  const renderedChildren = nodes.map(
    (child, nodeIndex) => {
      if (
        !React.isValidElement(child) ||
        child.type !== MotionStep
      ) {
        return child;
      }

      const timing = timingByChild.get(child);

      const durationInfo = timing
        ? timing.durationInfo
        : normalizeDuration(DEFAULT_DURATION);

      const delayMs = timing
        ? timing.delayMs
        : normalizedDelay;

      const normalizedType = normalizeType(
        child.props.type
      );

      const motionClassName = normalizedType
        ? `ease-${normalizedType}`
        : "";

      const stepContent = getMotionStepContent(
        child.props.children
      );

      return renderMotionStepContent(
        stepContent,
        child.props,
        motionClassName,
        delayMs,
        durationInfo,
        child.key ??
          `motion-step-ag404-${nodeIndex}`
      );
    }
  );

  return React.createElement(
    WrapperTag,
    {
      className: buildClassName(
        "ease-motion-timeline-ag404",
        className
      ),
    },
    renderedChildren
  );
}

export { MotionTimeline, MotionStep };