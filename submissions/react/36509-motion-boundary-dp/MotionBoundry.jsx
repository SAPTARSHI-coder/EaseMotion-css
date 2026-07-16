import { createContext, useContext, useEffect, useMemo, useRef } from "react";

const MotionBoundaryContext = createContext(null);

export default function MotionBoundary({
  children,
  id,
  active = true,
  className = "",
  as: Wrapper = "div",
  onBoundaryActive,
}) {
  const parentBoundary = useContext(MotionBoundaryContext);
  const hasNotifiedRef = useRef(false);

  const boundaryValue = useMemo(() => {
    if (!active) return parentBoundary;
    return { id, parentId: parentBoundary ? parentBoundary.id : null };
  }, [active, id, parentBoundary]);

  useEffect(() => {
    if (active && !hasNotifiedRef.current) {
      hasNotifiedRef.current = true;
      if (typeof onBoundaryActive === "function") onBoundaryActive(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, id]);

  if (!active) {
    return children;
  }

  return (
    <MotionBoundaryContext.Provider value={boundaryValue}>
      <Wrapper
        className={["motion-boundary", className].filter(Boolean).join(" ")}
        data-motion-boundary={id}
      >
        {children}
      </Wrapper>
    </MotionBoundaryContext.Provider>
  );
}

export function useMotionBoundary() {
  return useContext(MotionBoundaryContext);
}
