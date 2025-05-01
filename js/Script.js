
// active butons
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('#buttonGroup .NEO-button');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      this.classList.toggle('active');
    });
  });
});


//Dark theme implmeteds
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


// Get the button
const backToTopButton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

