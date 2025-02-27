document.addEventListener('DOMContentLoaded', () => {
    // Animation for the input field
    const searchInput = document.querySelector('main input');
    searchInput.addEventListener('focus', () => {
        searchInput.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.5)';
    });
    searchInput.addEventListener('blur', () => {
        searchInput.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });

    // Smooth scroll to sections (example for future feature)
    // const links = document.querySelectorAll('header ul li a');
    // links.forEach(link => {
    //     link.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         alert("This link will redirect to the respective section.");
    //     });
    // });
    // Ensure all links open in the same tab
    document.addEventListener('DOMContentLoaded', () => {
        // Select all anchor tags
        const links = document.querySelectorAll('a');

        // Set the target attribute to '_self' for each link
        links.forEach(link => {
            link.setAttribute('target', '_self');
        });
    });


    // Add a fade-in animation for main content
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = 0;
    mainContent.style.transition = 'opacity 1.5s ease-in-out';
    window.onload = () => {
        mainContent.style.opacity = 1;
    };
});
