// Toggle the visibility of the TOC content
document.querySelector('.toc-header').addEventListener('click', function() {
    const tocContent = document.querySelector('.toc-content');
    const tocArrow = document.querySelector('.toc-arrow');

    tocContent.style.display = tocContent.style.display === 'block' ? 'none' : 'block';
    tocArrow.textContent = tocContent.style.display === 'block' ? '▼' : '▶'; // Change arrow direction
});

// Smooth scroll to section on button click
// document.querySelectorAll('.toc-link').forEach(link => {
//     link.addEventListener('click', function() {
//         const targetId = this.getAttribute('data-scroll');
//         document.querySelector(`#${targetId}`).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
