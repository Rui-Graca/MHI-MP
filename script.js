document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        localStorage.setItem(this.value, this.checked);
    });

    const storedValue = localStorage.getItem(checkbox.value);
    if (storedValue !== null) {
        checkbox.checked = storedValue === 'true';
    }
});
