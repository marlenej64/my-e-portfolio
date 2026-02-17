// Einfaches Script für interaktive Effekte
document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio von Marlene Jungreithmayr geladen!");

    // Smooth Scrolling für die Links (falls der Browser es nicht nativ macht)
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Standardverhalten wird durch CSS scroll-behavior: smooth geregelt
        });
    });
});