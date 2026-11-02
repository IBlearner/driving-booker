import { useEffect, type RefObject } from "react";

// While `active`, calls `onEscape` when Escape is pressed.
// Pass a stable (useCallback) handler, or the listener is re-attached every render.
export function useEscapeKey(active: boolean, onEscape: () => void) {
  useEffect(() => {
    if (!active) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onEscape();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [active, onEscape]);
}

// While `active`, calls `onOutside` when the pointer goes down outside `ref`'s element.
export function useClickOutside(active: boolean, ref: RefObject<HTMLElement | null>, onOutside: () => void) {
  useEffect(() => {
    if (!active) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onOutside();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [active, ref, onOutside]);
}
