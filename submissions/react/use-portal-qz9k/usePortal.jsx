import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * usePortal
 * Creates (and cleans up) a dedicated DOM node appended to document.body,
 * returning a render function that portals children into it. Useful for
 * modals/tooltips/toasts that need to escape an ancestor's overflow:hidden
 * or a low stacking context, which no amount of z-index on the component
 * itself can overcome from inside that ancestor.
 */
export function usePortal(id) {
  const nodeRef = useRef(null);
  const [, forceMount] = useState(0);

  useEffect(() => {
    const node = document.createElement('div');
    if (id) node.id = id;
    document.body.appendChild(node);
    nodeRef.current = node;
    forceMount((n) => n + 1); // trigger a render now that the node exists

    return () => {
      document.body.removeChild(node);
      nodeRef.current = null;
    };
  }, [id]);

  return function renderPortal(children) {
    return nodeRef.current ? createPortal(children, nodeRef.current) : null;
  };
}

export default usePortal;
