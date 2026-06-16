// ===== NAV TOGGLE (Project Page) =====
document.getElementById('navToggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('active');
    document.getElementById('navToggle').classList.toggle('active');
});

// Close nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-menu').classList.remove('active');
        document.getElementById('navToggle').classList.remove('active');
    });
});
