// Close the mobile menu after a nav link is tapped
document.querySelectorAll("#navLinks .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("navLinks");
        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});
