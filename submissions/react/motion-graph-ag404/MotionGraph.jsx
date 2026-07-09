import React from "react";

const DEFAULT_DURATION = "medium";
const DEFAULT_TAG = "div";
const DURATION_MS = { fast: 150, medium: 300, slow: 600 };

function validMs(value, fallback = 0) {
  return typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : fallback;
}

function resolveDuration(value) {
  if (typeof value === "number" && Number.isFinite(value) && value >= 0) {
    return { ms: value, className: "", numeric: true };
  }
  const key = typeof value === "string" ? value.trim() : "";
  const normalized = Object.prototype.hasOwnProperty.call(DURATION_MS, key) ? key : DEFAULT_DURATION;
  return { ms: DURATION_MS[normalized], className: `ease-duration-${normalized}`, numeric: false };
}

function classes(...values) {
  return values.filter(Boolean).join(" ");
}

function flatten(children) {
  const result = [];
  React.Children.toArray(children).forEach((child) => {
    if (React.isValidElement(child) && child.type === React.Fragment) {
      result.push(...flatten(child.props.children));
    } else {
      result.push(child);
    }
  });
  return result;
}

function MotionNode({ children }) {
  return React.createElement(React.Fragment, null, children);
}

function calculateGraph(nodes, graphDelay) {
  const byId = new Map();
  nodes.forEach((node) => {
    const id = typeof node.props.id === "string" ? node.props.id.trim() : "";
    if (!id) throw new Error("MotionGraph: every MotionNode requires a non-empty id.");
    if (byId.has(id)) throw new Error(`MotionGraph: duplicate MotionNode id "${id}".`);
    byId.set(id, node);
  });

  const state = new Map();
  const timing = new Map();

  function visit(id, path = []) {
    if (!byId.has(id)) throw new Error(`MotionGraph: dependency "${id}" does not exist.`);
    if (state.get(id) === "done") return timing.get(id);
    if (state.get(id) === "visiting") {
      throw new Error(`MotionGraph: dependency cycle detected (${[...path, id].join(" -> ")}).`);
    }

    state.set(id, "visiting");
    const node = byId.get(id);
    const duration = resolveDuration(node.props.duration ?? DEFAULT_DURATION);
    const gap = validMs(node.props.gap);
    const after = Array.isArray(node.props.after)
      ? node.props.after
      : node.props.after
        ? [node.props.after]
        : [];

    let start = graphDelay;
    after.forEach((dependencyId) => {
      const dependency = visit(String(dependencyId).trim(), [...path, id]);
      start = Math.max(start, dependency.end + gap);
    });

    const value = { start, end: start + duration.ms, duration };
    timing.set(id, value);
    state.set(id, "done");
    return value;
  }

  byId.forEach((_, id) => visit(id));
  return timing;
}

function renderNode(node, timing, index) {
  const id = node.props.id.trim();
  const nodeTiming = timing.get(id);
  const type = typeof node.props.type === "string" ? node.props.type.trim() : "";
  const nodeClass = classes(
    "ease-motion-graph-ag404-item",
    type ? `ease-${type}` : "",
    nodeTiming.duration.className,
    node.props.className
  );

  const content = flatten(node.props.children);
  const style = {
    ...(node.props.style || {}),
    animationDelay: `${nodeTiming.start}ms`,
  };
  if (nodeTiming.duration.numeric) style.animationDuration = `${nodeTiming.duration.ms}ms`;

  if (content.length === 1 && React.isValidElement(content[0])) {
    const child = content[0];
    return React.cloneElement(child, {
      className: classes(child.props.className, nodeClass),
      style: { ...(node.props.style || {}), ...(child.props.style || {}), ...style },
      "data-motion-node": id,
    });
  }

  return React.createElement(
    "span",
    {
      key: node.key ?? `motion-graph-ag404-${id}-${index}`,
      className: nodeClass,
      style,
      "data-motion-node": id,
    },
    content
  );
}

function MotionGraph({
  delay = 0,
  tag = DEFAULT_TAG,
  className,
  children,
}) {
  const Wrapper = typeof tag === "string" && tag.trim() ? tag.trim() : DEFAULT_TAG;
  const nodes = flatten(children);
  const motionNodes = nodes.filter(
    (child) => React.isValidElement(child) && child.type === MotionNode
  );
  const timing = calculateGraph(motionNodes, validMs(delay));

  return React.createElement(
    Wrapper,
    { className: classes("ease-motion-graph-ag404", className) },
    nodes.map((child, index) =>
      React.isValidElement(child) && child.type === MotionNode
        ? renderNode(child, timing, index)
        : child
    )
  );
}

export { MotionGraph, MotionNode, calculateGraph };
