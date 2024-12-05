document.addEventListener("DOMContentLoaded", () => {
    const bodyParts = document.querySelectorAll(".body-part");
    const infoPanel = document.getElementById("info-text"); 

    bodyParts.forEach(part => {
        part.addEventListener("click", () => {
            const info = part.getAttribute("data-info");
            infoPanel.textContent = info;
        });

        part.addEventListener("mouseover", () => {
            infoPanel.textContent = part.getAttribute("data-info");
        });

        part.addEventListener("mouseleave", () => {
            infoPanel.textContent = "Survolez une partie du corps pour en apprendre plus";
        });
    });
});
