import { useEffect, useRef } from "react";

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}

interface SwipeOptions {
  threshold?: number;
  passive?: boolean;
}

export const useSwipe = (
  handlers: SwipeHandlers,
  options: SwipeOptions = {}
): { ref: React.RefObject<HTMLDivElement | null> } => {
  const { onSwipeLeft, onSwipeRight } = handlers;
  const { threshold = 50, passive = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let startX: number;
    let startY: number;
    let startTime: number;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startTime = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!startX || !startY) return;

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const diffX = endX - startX;
      const diffY = endY - startY;
      const timeDiff = Date.now() - startTime;

      // Only detect horizontal swipes
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > threshold && timeDiff < 300) {
        if (diffX > 0 && onSwipeRight) {
          onSwipeRight();
        } else if (diffX < 0 && onSwipeLeft) {
          onSwipeLeft();
        }
      }
    };

    element.addEventListener("touchstart", handleTouchStart, { passive });
    element.addEventListener("touchend", handleTouchEnd, { passive });

    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, threshold, passive]);

  return { ref };
};
