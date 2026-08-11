/* ══════════════════════════════════════════════════════════
   Documentation Search Script
   ══════════════════════════════════════════════════════════ */

/**
 * Complete documentation index with all searchable content.
 * Each entry contains: title, breadcrumb, content, category, tags, href
 */
const DOCUMENTATION_INDEX = [
    // ── Introduction Pages ──────────────────────────────────────
    {
        title: "Getting Started",
        breadcrumb: "Introduction",
        content: "Introduction to EaseMotion CSS framework",
        category: "Page",
        tags: ["intro", "start", "guide", "overview"],
        href: "../../docs/index.html#getting-started",
    },
    {
        title: "Design Philosophy",
        breadcrumb: "Introduction",
        content: "Core principles: human-readable, animation-first, composable",
        category: "Page",
        tags: ["philosophy", "principles", "design", "human-readable", "animation-first"],
        href: "../../docs/index.html#philosophy",
    },
    {
        title: "Installation",
        breadcrumb: "Introduction",
        content: "CDN, npm, and manual installation methods",
        category: "Page",
        tags: ["install", "setup", "cdn", "npm", "getting-started"],
        href: "../../docs/index.html#installation",
    },

    // ── Core Concepts ───────────────────────────────────────────
    {
        title: "CSS Variables & Tokens",
        breadcrumb: "Core",
        content: "Design tokens for colors, spacing, speeds, typography",
        category: "Reference",
        tags: ["variables", "tokens", "css-custom-properties", "theming", "design-tokens"],
        href: "../../docs/index.html#variables",
    },
    {
        title: "Utilities",
        breadcrumb: "Core",
        content: "Utility classes for layout, spacing, flexbox, grid",
        category: "Reference",
        tags: ["utilities", "layout", "flex", "grid", "responsive"],
        href: "../../docs/index.html#utilities",
    },
    {
        title: "Animations",
        breadcrumb: "Core",
        content: "Built-in animations: fade, slide, bounce, pulse, bounce, rotate",
        category: "Reference",
        tags: ["animations", "motion", "ease", "fade", "slide", "bounce", "pulse", "rotate"],
        href: "../../docs/index.html#animations",
    },
    {
        title: "Browser Compatibility",
        breadcrumb: "Core",
        content: "Supported browsers and CSS feature support",
        category: "Reference",
        tags: ["browser", "compatibility", "support", "caniuse"],
        href: "../../docs/index.html#browser-compatibility",
    },

    // ── Components ──────────────────────────────────────────────
    {
        title: "Buttons",
        breadcrumb: "Components",
        content: "Button styles: primary, secondary, danger, sizes, states",
        category: "Component",
        tags: ["button", "btn", "primary", "secondary", "danger", "size", "state"],
        href: "../../docs/index.html#buttons",
    },
    {
        title: "Cards",
        breadcrumb: "Components",
        content: "Card layouts with shadows, borders, hover effects",
        category: "Component",
        tags: ["card", "box", "layout", "shadow", "hover", "border"],
        href: "../../docs/index.html#cards",
    },

    // ── Advanced Topics ────────────────────────────────────────
    {
        title: "Accessibility & Reduced Motion",
        breadcrumb: "Advanced",
        content: "Accessible animations with prefers-reduced-motion support",
        category: "Guide",
        tags: ["accessibility", "a11y", "wcag", "reduced-motion", "aria"],
        href: "../../docs/accessibility-reduced-motion.md",
    },
    {
        title: "Animation Combination Guide",
        breadcrumb: "Advanced",
        content: "Combine multiple animations for complex effects",
        category: "Guide",
        tags: ["animation", "combine", "chaining", "complex", "timing"],
        href: "../../docs/animation-combination-guide.md",
    },
    {
        title: "Class Naming Conventions",
        breadcrumb: "Advanced",
        content: "Naming rules: ease-purpose-state pattern",
        category: "Guide",
        tags: ["naming", "convention", "class-name", "pattern", "rule"],
        href: "../../docs/class-naming-conventions.md",
    },
    {
        title: "CSS Variable Theming",
        breadcrumb: "Advanced",
        content: "Theme EaseMotion CSS by overriding CSS variables",
        category: "Guide",
        tags: ["theme", "theming", "css-variables", "customize", "override"],
        href: "../../docs/css-variable-theming.md",
    },

    // ── Contributing ────────────────────────────────────────────
    {
        title: "How to Contribute",
        breadcrumb: "Contributing",
        content: "Contribution guidelines and workflow",
        category: "Guide",
        tags: ["contribute", "contributing", "guidelines", "workflow", "pr"],
        href: "../../docs/index.html#contributing",
    },
    {
        title: "Naming Rules",
        breadcrumb: "Contributing",
        content: "Naming conventions for new utilities and components",
        category: "Guide",
        tags: ["naming", "rules", "convention", "class-name", "contribute"],
        href: "../../docs/index.html#naming",
    },

    // ── Common Animations (Searchable entries) ──────────────────
    {
        title: "ease-fade-in",
        breadcrumb: "Animations",
        content: "Fade in animation from transparent to opaque",
        category: "Animation",
        tags: ["fade", "animation", "entrance", "in"],
        href: "../../docs/index.html#animations",
    },
    {
        title: "ease-fade-out",
        breadcrumb: "Animations",
        content: "Fade out animation from opaque to transparent",
        category: "Animation",
        tags: ["fade", "animation", "exit", "out"],
        href: "../../docs/index.html#animations",
    },
    {
        title: "ease-slide-down",
        breadcrumb: "Animations",
        content: "Slide down entrance animation with fade",
        category: "Animation",
        tags: ["slide", "animation", "down", "entrance"],
        href: "../../docs/index.html#animations",
    },
    {
        title: "ease-slide-up",
        breadcrumb: "Animations",
        content: "Slide up entrance animation with fade",
        category: "Animation",
        tags: ["slide", "animation", "up", "entrance"],
        href: "../../docs/index.html#animations",
    },
    {
        title: "ease-bounce",
        breadcrumb: "Animations",
        content: "Bouncy elastic animation effect",
        category: "Animation",
        tags: ["bounce", "animation", "elastic", "effect"],
        href: "../../docs/index.html#animations",
    },
    {
        title: "ease-pulse",
        breadcrumb: "Animations",
        content: "Pulse animation for attention drawing",
        category: "Animation",
        tags: ["pulse", "animation", "attention", "effect"],
        href: "../../docs/index.html#animations",
    },
    {
        title: "ease-rotate",
        breadcrumb: "Animations",
        content: "Rotation animation for spinners and loading",
        category: "Animation",
        tags: ["rotate", "animation", "spin", "loading"],
        href: "../../docs/index.html#animations",
    },

    // ── Common Utilities (Searchable entries) ────────────────────
    {
        title: "ease-hover-glow",
        breadcrumb: "Utilities",
        content: "Glow effect on hover for interactive elements",
        category: "Utility",
        tags: ["hover", "glow", "effect", "interactive"],
        href: "../../docs/index.html#utilities",
    },
    {
        title: "ease-transition-smooth",
        breadcrumb: "Utilities",
        content: "Smooth transition with standard easing",
        category: "Utility",
        tags: ["transition", "smooth", "easing", "effect"],
        href: "../../docs/index.html#utilities",
    },
    {
        title: "ease-shadow-elevated",
        breadcrumb: "Utilities",
        content: "Elevated shadow for depth perception",
        category: "Utility",
        tags: ["shadow", "elevated", "depth", "effect"],
        href: "../../docs/index.html#utilities",
    },
    {
        title: "ease-border-subtle",
        breadcrumb: "Utilities",
        content: "Subtle border for subtle visual separation",
        category: "Utility",
        tags: ["border", "subtle", "separation", "line"],
        href: "../../docs/index.html#utilities",
    },

    // ── Button States (Searchable entries) ───────────────────────
    {
        title: "Button Primary",
        breadcrumb: "Components > Buttons",
        content: "Primary action button style",
        category: "Component",
        tags: ["button", "primary", "action", "cta"],
        href: "../../docs/index.html#buttons",
    },
    {
        title: "Button Secondary",
        breadcrumb: "Components > Buttons",
        content: "Secondary button for less important actions",
        category: "Component",
        tags: ["button", "secondary", "action"],
        href: "../../docs/index.html#buttons",
    },
    {
        title: "Button Danger",
        breadcrumb: "Components > Buttons",
        content: "Danger/destructive action button style",
        category: "Component",
        tags: ["button", "danger", "destructive", "delete"],
        href: "../../docs/index.html#buttons",
    },
    {
        title: "Button Disabled",
        breadcrumb: "Components > Buttons",
        content: "Disabled state for unavailable actions",
        category: "Component",
        tags: ["button", "disabled", "state", "inactive"],
        href: "../../docs/index.html#buttons",
    },

    // ── Responsive & Layout ─────────────────────────────────────
    {
        title: "Responsive Design",
        breadcrumb: "Core",
        content: "Mobile-first responsive classes and breakpoints",
        category: "Reference",
        tags: ["responsive", "mobile", "breakpoint", "media-query"],
        href: "../../docs/index.html#utilities",
    },
    {
        title: "Flexbox Layout",
        breadcrumb: "Core",
        content: "Flexbox utility classes for layouts",
        category: "Reference",
        tags: ["flexbox", "flex", "layout", "alignment"],
        href: "../../docs/index.html#utilities",
    },
    {
        title: "Grid Layout",
        breadcrumb: "Core",
        content: "CSS Grid utility classes for layouts",
        category: "Reference",
        tags: ["grid", "layout", "layout-system", "alignment"],
        href: "../../docs/index.html#utilities",
    },

    // ── Color & Theming ─────────────────────────────────────────
    {
        title: "Color Palette",
        breadcrumb: "Core",
        content: "Primary, success, danger, and warning colors",
        category: "Reference",
        tags: ["color", "palette", "primary", "success", "danger", "warning"],
        href: "../../docs/index.html#variables",
    },
    {
        title: "Dark Mode",
        breadcrumb: "Advanced",
        content: "Dark mode support and theming",
        category: "Guide",
        tags: ["dark", "mode", "theme", "color-scheme"],
        href: "../../docs/index.html",
    },

    // ── Typography ──────────────────────────────────────────────
    {
        title: "Typography",
        breadcrumb: "Core",
        content: "Font sizes, weights, and text utilities",
        category: "Reference",
        tags: ["typography", "text", "font", "size", "weight"],
        href: "../../docs/index.html#variables",
    },
    {
        title: "Font Sizes",
        breadcrumb: "Core",
        content: "Responsive font sizes from xs to 4xl",
        category: "Reference",
        tags: ["font", "size", "text", "typography"],
        href: "../../docs/index.html#variables",
    },

    // ── Spacing ─────────────────────────────────────────────────
    {
        title: "Spacing Scale",
        breadcrumb: "Core",
        content: "Spacing utilities from 0.25rem to 4rem (space-1 to space-16)",
        category: "Reference",
        tags: ["spacing", "margin", "padding", "gap"],
        href: "../../docs/index.html#variables",
    },

    // ── Examples ────────────────────────────────────────────────
    {
        title: "Live Demo",
        breadcrumb: "Getting Started",
        content: "Interactive examples and component showcase",
        category: "Example",
        tags: ["demo", "example", "live", "showcase"],
        href: "../../examples/demo.html",
    },
    {
        title: "Skeleton Loading",
        breadcrumb: "Examples",
        content: "Skeleton loading animation example",
        category: "Example",
        tags: ["skeleton", "loading", "animation", "placeholder"],
        href: "../../examples/skeleton-loading.html",
    },
];

// ═══════════════════════════════════════════════════════════
// Search Engine Implementation
// ═══════════════════════════════════════════════════════════

class DocumentationSearch {
    constructor() {
        this.index = DOCUMENTATION_INDEX;
        this.searchInput = document.getElementById("search-input");
        this.searchResults = document.getElementById("search-results");
        this.currentFocusIndex = -1;
        this.filteredResults = [];

        this.init();
    }

    init() {
        if (!this.searchInput || !this.searchResults) return;

        // Event listeners
        this.searchInput.addEventListener("input", (e) => this.handleSearch(e));
        this.searchInput.addEventListener("keydown", (e) => this.handleKeyboard(e));
        document.addEventListener("click", (e) => this.handleOutsideClick(e));
    }

    /**
     * Main search handler - filters index based on input
     */
    handleSearch(event) {
        const query = event.target.value.trim().toLowerCase();

        if (query.length === 0) {
            this.hideResults();
            return;
        }

        // Perform search
        this.filteredResults = this.performSearch(query);
        this.currentFocusIndex = -1;

        // Render results
        this.renderResults();
    }

    /**
     * Fuzzy search implementation
     */
    performSearch(query) {
        return this.index
            .map((item) => {
                // Calculate relevance score
                let score = 0;
                const searchFields = {
                    title: { text: item.title, weight: 3 },
                    breadcrumb: { text: item.breadcrumb, weight: 1.5 },
                    content: { text: item.content, weight: 1 },
                    tags: { text: item.tags.join(" "), weight: 2 },
                    category: { text: item.category, weight: 1 },
                };

                for (const [field, { text, weight }] of Object.entries(searchFields)) {
                    if (text.toLowerCase().includes(query)) {
                        // Exact word match bonus
                        if (text.toLowerCase().split(/\s+/).some((word) => word.startsWith(query))) {
                            score += 2 * weight;
                        } else {
                            score += weight;
                        }

                        // If query is at the start of the field, boost score
                        if (text.toLowerCase().startsWith(query)) {
                            score += 1 * weight;
                        }
                    }
                }

                return { item, score };
            })
            .filter((result) => result.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 10) // Limit to 10 results
            .map((result) => result.item);
    }

    /**
     * Render search results to DOM
     */
    renderResults() {
        // Clear previous results
        this.searchResults.innerHTML = "";

        if (this.filteredResults.length === 0) {
            this.searchResults.innerHTML = `
        <div class="docs-search-no-results">
          <div class="docs-search-no-results-icon">🔍</div>
          <p class="docs-search-no-results-text">No results found</p>
          <p class="docs-search-no-results-tip">Try different keywords or check the documentation</p>
        </div>
      `;
            this.showResults();
            return;
        }

        const query = this.searchInput.value.toLowerCase();

        this.filteredResults.forEach((item, index) => {
            const resultEl = this.createResultElement(item, query, index);
            this.searchResults.appendChild(resultEl);
        });

        this.showResults();
    }

    /**
     * Create individual result element with highlighting
     */
    createResultElement(item, query, index) {
        const div = document.createElement("div");
        div.className = "docs-search-result";
        div.dataset.index = index;
        div.role = "option";

        // Securely highlight matching text without innerHTML
        const appendHighlightedText = (container, text) => {
            if (!query) {
                container.textContent = text;
                return;
            }
            // Escape regex special characters to prevent regex injection
            const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(${escapedQuery})`, "gi");
            const parts = text.split(regex);
            
            parts.forEach((part) => {
                if (part.toLowerCase() === query.toLowerCase()) {
                    const span = document.createElement('span');
                    span.className = 'search-highlight';
                    span.textContent = part;
                    container.appendChild(span);
                } else if (part) {
                    container.appendChild(document.createTextNode(part));
                }
            });
        };

        const titleDiv = document.createElement('div');
        titleDiv.className = 'docs-search-result-title';
        appendHighlightedText(titleDiv, item.title);

        const metaDiv = document.createElement('div');
        metaDiv.style.display = 'flex';
        metaDiv.style.justifyContent = 'space-between';
        metaDiv.style.alignItems = 'center';
        metaDiv.style.gap = '0.5rem';

        const breadcrumbSpan = document.createElement('span');
        breadcrumbSpan.className = 'docs-search-result-breadcrumb';
        breadcrumbSpan.textContent = item.breadcrumb;

        const badgeSpan = document.createElement('span');
        badgeSpan.className = 'docs-search-result-badge';
        badgeSpan.textContent = item.category;

        metaDiv.appendChild(breadcrumbSpan);
        metaDiv.appendChild(badgeSpan);

        const previewDiv = document.createElement('div');
        previewDiv.className = 'docs-search-result-preview';
        previewDiv.textContent = item.content;

        div.appendChild(titleDiv);
        div.appendChild(metaDiv);
        div.appendChild(previewDiv);

        // Click handler for navigation
        div.addEventListener("click", () => {
            this.navigateTo(item.href);
        });

        // Keyboard navigation support
        div.addEventListener("click", () => {
            this.currentFocusIndex = index;
            this.updateFocusedResult();
        });

        return div;
    }

    /**
     * Handle keyboard navigation
     */
    handleKeyboard(event) {
        const { key } = event;

        switch (key) {
            case "ArrowDown":
                event.preventDefault();
                this.currentFocusIndex = Math.min(this.currentFocusIndex + 1, this.filteredResults.length - 1);
                this.updateFocusedResult();
                break;

            case "ArrowUp":
                event.preventDefault();
                this.currentFocusIndex = Math.max(this.currentFocusIndex - 1, -1);
                this.updateFocusedResult();
                break;

            case "Enter":
                event.preventDefault();
                if (this.currentFocusIndex >= 0 && this.filteredResults[this.currentFocusIndex]) {
                    const item = this.filteredResults[this.currentFocusIndex];
                    this.navigateTo(item.href);
                }
                break;

            case "Escape":
                event.preventDefault();
                this.hideResults();
                this.searchInput.blur();
                break;

            default:
                break;
        }
    }

    /**
     * Update visual focus on keyboard navigation
     */
    updateFocusedResult() {
        const resultElements = this.searchResults.querySelectorAll(".docs-search-result");
        resultElements.forEach((el, index) => {
            if (index === this.currentFocusIndex) {
                el.classList.add("focused");
                el.setAttribute("aria-selected", "true");
                el.scrollIntoView({ block: "nearest" });
            } else {
                el.classList.remove("focused");
                el.setAttribute("aria-selected", "false");
            }
        });
    }

    /**
     * Navigate to selected documentation
     */
    navigateTo(href) {
        window.location.href = href;
    }

    /**
     * Show results container
     */
    showResults() {
        this.searchResults.classList.add("visible");
    }

    /**
     * Hide results container
     */
    hideResults() {
        this.searchResults.classList.remove("visible");
        this.searchResults.innerHTML = "";
        this.currentFocusIndex = -1;
    }

    /**
     * Handle outside clicks to close dropdown
     */
    handleOutsideClick(event) {
        if (
            !this.searchInput.contains(event.target) &&
            !this.searchResults.contains(event.target)
        ) {
            this.hideResults();
        }
    }

    /**
     * Get search statistics (useful for debugging/development)
     */
    getStats() {
        return {
            totalIndexed: this.index.length,
            categories: [...new Set(this.index.map((item) => item.category))],
            totalTags: new Set(this.index.flatMap((item) => item.tags)).size,
        };
    }
}

// ═══════════════════════════════════════════════════════════
// Initialize on DOM Ready
// ═══════════════════════════════════════════════════════════

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        const search = new DocumentationSearch();
        // Expose to console for debugging
        window.documentationSearch = search;
    });
} else {
    const search = new DocumentationSearch();
    window.documentationSearch = search;
}
