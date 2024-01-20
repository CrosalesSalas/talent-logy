let currentTheme = 1;

function toggleTheme() {
    if (currentTheme === 1) {
        document.getElementById('themeStyles').href = 'style2.css';
        currentTheme = 2;
    } else {
        document.getElementById('themeStyles').href = 'style1.css';
        currentTheme = 1;
    }
}
