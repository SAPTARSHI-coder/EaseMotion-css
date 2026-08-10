const sidebarData = [
    {
        title: "INTRODUCTION",
        items: [
            { title: "Getting Started" },
            { title: "Design Philosophy", active: true },
            { title: "Installation" }
        ]
    },

    {
        title: "CORE",
        items: [
            { 
                title: "Variables",
                children: [
                    {title: "Overview"},
                    {title: "CSS custom properties"},
                    {title: "Custom Theme Example"},
                ]

             },

            { title: "Dark Mode" },

            {
                title: "Utilities",
                children: [
                    { title: "Flexbox" },
                    { title: "Grid" },
                    { title: "Spacing" },
                ]
            },

            {
                title: "Animations",
                children: [
                    { title: "Animations Reference" },
                    { title: "Browser Compatibility" },
                ]
            }
        ]
    },

    {
        title: "COMPONENTS",
        items: [
            { title: "Buttons"},
            { title: "Cards" },
            { title: "Scroll Progress" }
        ]
    },

    {
        title: "CONTRIBUTING",
        items: [
            { title: "How to Contribute" },
            { title: "Code Guidelines" },
            { title: "Pull Requests" }
        ]
    }
];

function createMenu(items) {
    const ul = document.createElement("ul");
    ul.className = "menu";

    items.forEach(item => {
        const li = document.createElement("li");

        if (item.children) {
            const button = document.createElement("button");
            button.className = "toggle";

            button.innerHTML = `
                ${item.title}
                <span class="arrow">▶</span>
            `;

            li.appendChild(button);

            const childMenu = createMenu(item.children);
            childMenu.classList.add("submenu");

            li.appendChild(childMenu);

            button.addEventListener("click", () => {
                li.classList.toggle("open");
            });
        } else {
            const link = document.createElement("a");
            link.href = "#";
            link.textContent = item.title;

            if (item.active) {
                link.classList.add("active");
            }

            li.appendChild(link);
        }

        ul.appendChild(li);
    });

    return ul;
}

const container = document.getElementById("sidebar-nav");

sidebarData.forEach(section => {
    const wrapper = document.createElement("div");
    wrapper.className = "section";

    const heading = document.createElement("div");
    heading.className = "section-title";
    heading.textContent = section.title;

    wrapper.appendChild(heading);
    wrapper.appendChild(createMenu(section.items));

    container.appendChild(wrapper);
});