export const sampleAST = {
  animation: "fade-in",
  duration: 1000,
  delay: 100,
  easing: "ease-in-out",
  fill: "forwards",
  iterations: Infinity,
  direction: "alternate",
  keyframes: [
    {
      offset: 0,
      opacity: 0,
      transform: "translateY(30px) rotate(0deg)"
    },
    {
      offset: 0.5,
      opacity: 0.5,
      transform: "translateY(0) rotate(180deg)"
    },
    {
      offset: 1,
      opacity: 1,
      transform: "translateY(30px) rotate(360deg)"
    }
  ]
};
