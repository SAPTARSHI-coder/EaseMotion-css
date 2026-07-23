import { useEffect, useRef } from 'react';

/**
 * useEaseMotion(tokens, deps)
 * -----------------------------------------------------------------
 * Wires a DOM ref into EaseMotion CSS's Motion Engine `em=""` DSL
 * directly from React — no dangerouslySetInnerHTML, no manual
 * classList management, no re-implementation of the engine.
 *
 * How it works: easemotion/engine/runtime.js already runs a
 * MutationObserver (attributeFilter: ['em']) against the whole
 * document as soon as the engine is imported. This hook's only job
 * is to set/update/remove the `em` attribute on the ref'd element at
 * the right point in the React lifecycle — the existing runtime
 * observer picks up the change itself and does the real parse +
 * compile + class-injection work. No calls into parser.js,
 * compiler.js, or runtime.js internals from this hook.
 *
 * @param {string} tokens - an em="" token string, e.g. "fade-in 500ms ease-out"
 * @param {any[]} deps - effect dependency array (defaults to re-running only if tokens changes)
 * @returns {React.RefObject} attach to the element you want animated
 */
export function useEaseMotion(tokens, deps = [tokens]) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !tokens) return undefined;

    el.setAttribute('em', tokens);

    return () => {
      el.removeAttribute('em');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

export default useEaseMotion;
