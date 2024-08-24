document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scrolled-into-view');
                }
            });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    document.querySelectorAll('.fade-in').forEach((section) => {
        observer.observe(section);
    });
});
