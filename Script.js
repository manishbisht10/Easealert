
// active butons
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('#buttonGroup .NEO-button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});



// dark theme & light theme
// const toggleBtn = document.getElementById('toggleBtn');

// toggleBtn.addEventListener('change', function () {
//     document.body.classList.toggle('dark-theme', this.checked);
// });



const toggleBtn = document.getElementById('toggleBtn');
const darkThemeId = 'dark-theme-style';

// Helper: load dark CSS file
function loadDarkTheme() {
  if (!document.getElementById(darkThemeId)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = './Css/theme.css'; // Path to your dark theme CSS
    link.id = darkThemeId;
    document.head.appendChild(link);
  }
}

// Helper: remove dark CSS file
function removeDarkTheme() {
  const existingLink = document.getElementById(darkThemeId);
  if (existingLink) {
    existingLink.remove();
  }
}

// Toggle logic
toggleBtn.addEventListener('change', function () {
  if (this.checked) {
    loadDarkTheme();
    localStorage.setItem('theme', 'dark');
  } else {
    removeDarkTheme();
    localStorage.setItem('theme', 'light');
  }
});

// On load, apply saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    toggleBtn.checked = true;
    loadDarkTheme();
  }
});


// Tooltip 

