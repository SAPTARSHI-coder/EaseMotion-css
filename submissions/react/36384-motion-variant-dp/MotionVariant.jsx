import React, {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";

const FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
const MEMO_TYPE = Symbol.for("react.memo");

function cx(...values) {
  const classes = new Set();

  values
    .filter(Boolean)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean)
    .forEach((className) => classes.add(className));

  return Array.from(classes).join(" ");
}

function composeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === "function") {
        ref(node);
        return;
      }

      ref.current = node;
    });
  };
}

function callAll(...handlers) {
  return (event) => {
    handlers.forEach((handler) => {
      if (typeof handler === "function") {
        handler(event);
      }
    });
  };
}

function canReceiveRef(element) {
  return canReceiveRefType(element.type);
}

function canReceiveRefType(type) {
  if (typeof type === "string") return true;
  if (
    typeof type === "function" &&
    type.prototype &&
    type.prototype.isReactComponent
  )
    return true;
  if (type && type.$$typeof === FORWARD_REF_TYPE) return true;
  if (
    type &&
    type.$$typeof === MEMO_TYPE &&
    type.type &&
    type.type.$$typeof === FORWARD_REF_TYPE
  )
    return true;

  return false;
}

export default function MotionVariant({
  children,
  state,
  variants = {},
  fallback = "",
  replay = false,
  className = "",
  as: Component,
  onVariantChange,
  onAnimationStart,
  onAnimationEnd,
}) {
  const child = Children.only(children);

  if (!isValidElement(child)) {
    throw new Error(
      "MotionVariant expects exactly one valid React element child."
    );
  }

  const targetRef = useRef(null);
  const previousVariantRef = useRef();
  const previousReplayRef = useRef(replay);
  const hasMountedRef = useRef(false);

  const variantClass = useMemo(() => {
    if (variants && Object.prototype.hasOwnProperty.call(variants, state)) {
      return variants[state] || "";
    }

    return fallback || "";
  }, [fallback, state, variants]);

  const resolvedClassName = useMemo(
    () => cx(child.props.className, className, variantClass),
    [child.props.className, className, variantClass]
  );

  useEffect(() => {
    if (previousVariantRef.current === variantClass) return;

    previousVariantRef.current = variantClass;

    if (typeof onVariantChange === "function") {
      onVariantChange({
        state,
        variant: variantClass,
        isFallback: !(
          variants && Object.prototype.hasOwnProperty.call(variants, state)
        ),
      });
    }
  }, [onVariantChange, state, variantClass, variants]);

  useEffect(() => {
    const node = targetRef.current;
    const classes = variantClass.split(/\s+/).filter(Boolean);

    if (!node || classes.length === 0) {
      hasMountedRef.current = true;
      previousReplayRef.current = replay;
      return undefined;
    }

    const shouldReplay =
      hasMountedRef.current &&
      (replay === true || previousReplayRef.current !== replay);

    hasMountedRef.current = true;
    previousReplayRef.current = replay;

    if (!shouldReplay) return undefined;

    classes.forEach((name) => node.classList.remove(name));

    const frame = window.requestAnimationFrame(() => {
      void node.offsetWidth;
      classes.forEach((name) => node.classList.add(name));
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [replay, state, variantClass]);

  const animationHandlers = {
    onAnimationStart: (event) => {
      if (event.currentTarget !== event.target) return;
      callAll(child.props.onAnimationStart, onAnimationStart)(event);
    },
    onAnimationEnd: (event) => {
      if (event.currentTarget !== event.target) return;
      callAll(child.props.onAnimationEnd, onAnimationEnd)(event);
    },
  };

  if (Component) {
    const wrapperHandlers = {
      onAnimationStart: (event) => {
        if (
          event.currentTarget === event.target &&
          typeof onAnimationStart === "function"
        ) {
          onAnimationStart(event);
        }
      },
      onAnimationEnd: (event) => {
        if (
          event.currentTarget === event.target &&
          typeof onAnimationEnd === "function"
        ) {
          onAnimationEnd(event);
        }
      },
    };
    const wrapperProps = {
      className: cx(className, variantClass),
      ...wrapperHandlers,
    };

    if (canReceiveRefType(Component)) {
      wrapperProps.ref = targetRef;
    }

    return <Component {...wrapperProps}>{child}</Component>;
  }

  const childProps = {
    ...animationHandlers,
    className: resolvedClassName,
  };

  if (canReceiveRef(child)) {
    childProps.ref = composeRefs(child.ref, targetRef);
  }

  return cloneElement(child, childProps);
}
