
const themeToggleButton = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Detect system preference and update the theme automatically
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    htmlElement.setAttribute('data-bs-theme', 'dark');
} else {
    htmlElement.setAttribute('data-bs-theme', 'light');
}

// Toggle between light and dark mode when button is clicked
themeToggleButton.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'light');
    } else {
        htmlElement.setAttribute('data-bs-theme', 'dark');
    }
});
