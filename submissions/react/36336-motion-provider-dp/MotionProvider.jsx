import { createContext, useContext, useMemo } from "react";

const MotionContext = createContext(null);

const DEFAULT_CONFIG = {
  animationClass: "fade-up",
  duration: "400ms",
  easing: "ease-out",
  stagger: 100,
  reducedMotion: false,
  disabled: false,
};

export function MotionProvider({
  children,
  animationClass = DEFAULT_CONFIG.animationClass,
  duration = DEFAULT_CONFIG.duration,
  easing = DEFAULT_CONFIG.easing,
  stagger = DEFAULT_CONFIG.stagger,
  reducedMotion = DEFAULT_CONFIG.reducedMotion,
  disabled = DEFAULT_CONFIG.disabled,
}) {
  const value = useMemo(() => {
    if (disabled) {
      return {
        animationClass: "",
        duration: "0ms",
        easing,
        stagger: 0,
        reducedMotion,
        disabled: true,
      };
    }

    if (reducedMotion) {
      return {
        animationClass,
        duration: "1ms",
        easing: "linear",
        stagger: 0,
        reducedMotion: true,
        disabled: false,
      };
    }

    return {
      animationClass,
      duration,
      easing,
      stagger,
      reducedMotion: false,
      disabled: false,
    };
  }, [animationClass, duration, easing, stagger, reducedMotion, disabled]);

  return (
    <MotionContext.Provider value={value}>{children}</MotionContext.Provider>
  );
}

export function useMotionConfig() {
  const context = useContext(MotionContext);
  return context ?? DEFAULT_CONFIG;
}

export default MotionProvider;
