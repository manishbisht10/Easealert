
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
const toggleBtn = document.getElementById('toggleBtn');

toggleBtn.addEventListener('change', function () {
    document.body.classList.toggle('dark-theme', this.checked);
});


// Tooltip 
