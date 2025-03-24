document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;

    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        html.classList.add("dark");
        themeToggle.src = "dist/sun_icon.png";
        themeToggle.classList.remove("invert"); // Make sun black in dark mode
    } else {
        html.classList.remove("dark");
        themeToggle.src = "dist/moon.png";
        themeToggle.classList.add("invert"); // Make moon white in light mode
    }

    themeToggle.addEventListener("click", () => {
        html.classList.toggle("dark");
        if (html.classList.contains("dark")) {
            themeToggle.src = "dist/sun_icon.png";
            themeToggle.classList.remove("invert"); // Sun black in dark mode
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.src = "dist/moon.png";
            themeToggle.classList.add("invert"); // Moon white in light mode
            localStorage.setItem("theme", "light");
        }
    });
});

