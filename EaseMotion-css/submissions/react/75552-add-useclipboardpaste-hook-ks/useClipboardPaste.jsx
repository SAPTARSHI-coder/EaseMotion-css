import { useEffect, useRef } from "react";

/**
 * Listens for paste events anywhere in the document
 * and passes plain-text clipboard content to a callback.
 *
 * @param {Function} onPaste - Callback invoked with pasted plain text.
 */
export function useClipboardPaste(onPaste) {
  const callbackRef = useRef(onPaste);

  useEffect(() => {
    callbackRef.current = onPaste;
  }, [onPaste]);

  useEffect(() => {
    const handlePaste = (event) => {
      const text = event.clipboardData?.getData("text/plain") ?? "";

      callbackRef.current?.(text);
    };

    document.addEventListener("paste", handlePaste);

    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, []);
}

export default useClipboardPaste;