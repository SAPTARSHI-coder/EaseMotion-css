const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "../../");

const folders = ["components", "submissions"];

const manifest = [];

folders.forEach(folder => {
    const folderPath = path.join(ROOT, folder);

    if (!fs.existsSync(folderPath)) return;

    fs.readdirSync(folderPath).forEach(item => {
        const componentPath = path.join(folderPath, item);

        if (fs.statSync(componentPath).isDirectory()) {

            const cssFile = path.join(componentPath, "style.css");

            manifest.push({
                name: item,
                category: folder,
                hasCSS: fs.existsSync(cssFile)
            });

        }
    });
});

fs.writeFileSync(
    path.join(ROOT, "components.json"),
    JSON.stringify(manifest, null, 2)
);

console.log("components.json generated successfully.");