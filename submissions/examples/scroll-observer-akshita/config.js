const config = {
    threshold: 0.25,
    root: null,
    rootMargin: "0px 0px -10% 0px",
    once: true
};

const observer = new EaseMotionObserver(config);

observer.init();