class EaseMotionObserver {

    constructor(options = {}) {

        this.options = {
            threshold: 0.2,
            root: null,
            rootMargin: "0px",
            once: true,
            ...options
        };

        this.observer = null;
    }

    init() {

        // Respect reduced motion preference
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

            document
                .querySelectorAll("[data-ease-scroll]")
                .forEach(el => {
                    el.style.opacity = "1";
                });

            return;
        }

        this.observer = new IntersectionObserver(
            this.handleIntersection.bind(this),
            {
                threshold: this.options.threshold,
                root: this.options.root,
                rootMargin: this.options.rootMargin
            }
        );

        document
            .querySelectorAll("[data-ease-scroll]")
            .forEach(el => this.observer.observe(el));

    }

    handleIntersection(entries) {

        entries.forEach(entry => {

            if (!entry.isIntersecting)
                return;

            const element = entry.target;

            const animation =
                element.dataset.easeScroll;

            const delay =
                element.dataset.easeDelay || 0;

            const duration =
                element.dataset.easeDuration || 700;

            const once =
                element.dataset.easeOnce;

            element.style.animationDelay =
                `${delay}ms`;

            element.style.animationDuration =
                `${duration}ms`;

            element.classList.add("visible");
            element.classList.add(animation);

            if (
                once === "true" ||
                (once === undefined && this.options.once)
            ) {

                this.observer.unobserve(element);

            }

        });

    }

    destroy() {

        if (this.observer) {

            this.observer.disconnect();

        }

    }

}