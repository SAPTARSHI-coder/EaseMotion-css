const primaryColor =
document.getElementById("primaryColor");

const bgColor =
document.getElementById("bgColor");

const surfaceColor =
document.getElementById("surfaceColor");

const textColor =
document.getElementById("textColor");

const cssOutput =
document.getElementById("cssOutput");

const customThemePreview =
document.getElementById("customThemePreview");

function updateTheme() {

    customThemePreview.style.setProperty(
        "--ease-color-primary",
        primaryColor.value
    );

    customThemePreview.style.setProperty(
        "--ease-color-bg",
        bgColor.value
    );

    customThemePreview.style.setProperty(
        "--ease-color-surface",
        surfaceColor.value
    );

    customThemePreview.style.setProperty(
        "--ease-color-text",
        textColor.value
    );

    cssOutput.textContent = `
:root {
  --ease-color-primary: ${primaryColor.value};
  --ease-color-bg: ${bgColor.value};
  --ease-color-surface: ${surfaceColor.value};
  --ease-color-text: ${textColor.value};
}
`;
}

primaryColor.addEventListener("input", updateTheme);
bgColor.addEventListener("input", updateTheme);
surfaceColor.addEventListener("input", updateTheme);
textColor.addEventListener("input", updateTheme);

updateTheme();

document
.getElementById("copyBtn")
.addEventListener("click", () => {

    navigator.clipboard.writeText(
        cssOutput.textContent
    );

    alert("Theme CSS copied!");
});