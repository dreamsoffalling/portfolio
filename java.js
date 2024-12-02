document.addEventListener('DOMContentLoaded', function () {
    // Select all images in the scrolling container
    const images = document.querySelectorAll('.scrolling-images-container img');

    // Modal elements
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = document.querySelector('.close');

    // When an image is clicked, show the modal
    images.forEach(image => {
        image.addEventListener('click', (e) => {
            // Get the full-size image, title, and description from data attributes
            const fullImage = e.target.getAttribute('data-full');
            const title = e.target.getAttribute('data-title');
            const description = e.target.getAttribute('data-description');
            
            // Set modal content (full image, title, description)
            modalImage.src = fullImage;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            
            // Add show class to trigger fade-in
            modal.classList.add('show');
            modal.querySelector('.modal-content').classList.add('show');
        });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
        modal.querySelector('.modal-content').classList.remove('show');
    });

    // Close the modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            modal.querySelector('.modal-content').classList.remove('show');
        }
    });
});