document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;
    const aboutMeBtn = document.getElementById('aboutme-btn');
    const closeButton = document.getElementById('close-btn');
    const aboutMe = document.getElementById('about-me');
    const latestWorks = document.getElementById('latestwork-btn')

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


    aboutMeBtn.addEventListener('click', () => {
        aboutMe.classList.remove('hidden'); // Show popup
        aboutMe.classList.add('flex'); // Apply flex layout
    });

    latestWorks.addEventListener('click', () => {
        document.getElementById('target-section').scrollIntoView({ behavior: 'smooth' });
    });

    closeButton.addEventListener('click', () => {
        aboutMe.classList.remove('flex'); // Remove flex
        aboutMe.classList.add('hidden'); // Hide popup
    });

    document.getElementById('downloadBtn').addEventListener('click', () => {
        const filePath = './dist/Venu_Gopal_SR_Resume (updated_on_dec_2024).pdf';
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'Venu_Gopal_SR_Resume.pdf'; // Clean download name
        link.click();
    });

});
