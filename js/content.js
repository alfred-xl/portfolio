document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const contentId = urlParams.get('content');

    const headerText = document.getElementById('header');
    const bodyText = document.getElementById('body');
    const link = document.getElementById('link');
    const dynamicImageContainers = document.querySelectorAll('.dynamic-image-container'); // Select all elements with the class

    // Define image paths for each contentId
    const imagePaths = {
        'elite': [
            'images/gallery/elite1.png',
            'images/gallery/elite2.png',
            'images/gallery/elite3.png'
        ],
        'diamond': [
            'images/gallery/diamond1.png',
            'images/gallery/diamond2.png',
            'images/gallery/diamond3.png'
        ],
        'talley': [
            'images/gallery/talley1.png',
            'images/gallery/talley2.png',
            'images/gallery/talley3.png'
        ],
        'junction': [
            'images/gallery/junction1.png',
            'images/gallery/junction2.png',
            'images/gallery/junction3.png'
        ],
        'unicornbabes': [
            'images/gallery/unicornbabes1.png',
            'images/gallery/unicornbabes2.png',
            'images/gallery/unicornbabes3.png'
        ]
    };

    // Text content for each contentId
    if (contentId === 'elite') {
        headerText.innerHTML = 'Elite International Freight & Cargo';
        bodyText.innerHTML = 'I Developed a comprehensive web application using HTML, CSS, JavaScript, and PHP for the backend. The project included an admin panel for managing shipping packages, email functionality with automated responses, and integration with a mobile app via API which I developed.';
        link.href = 'https://eifcltd.com/';
    } else if (contentId === 'diamond') {
        headerText.innerHTML = 'Diamond Financial Consulting';
        bodyText.innerHTML = 'This is the description for project two.';
        link.href = 'https://diamondfinancial.suiccabranding.online';
    }
    else if (contentId === 'talley') {
        headerText.innerHTML = 'Talley Financial Group';
        bodyText.innerHTML = 'This is the description for project two.';
        link.href = 'https://talleyfinancial.suiccabranding.online/';
    }
    else if (contentId === 'junction') {
        headerText.innerHTML = 'The Junction';
        bodyText.innerHTML = 'This is the description for project two.';
        link.href = 'https://thejunction.ng/';
    }
    else if (contentId === 'unicornbabes') {
        headerText.innerHTML = 'Unicornbabes';
        bodyText.innerHTML = 'This is the description for project two.';
        link.href = 'http://unicornbabes.ng/';
    }

    // Get the image paths for the current contentId or use a default set if not matched
    const images = imagePaths[contentId] || ['images/gallery/default1.jpg', 'images/gallery/default2.jpg', 'images/gallery/default3.jpg'];

    // Update each container with its respective image path
    dynamicImageContainers.forEach((container, index) => {
        // Clear any existing content in each container
        container.innerHTML = '';

        // Create anchor and image elements using the respective image path
        const anchor = document.createElement('a');
        anchor.href = images[index]; // Assign href based on index from the images array
        anchor.className = 'image-popup';

        const img = document.createElement('img');
        img.src = images[index]; // Assign src based on index from the images array
        img.className = 'img-fluid';
        img.alt = 'Dynamic Image ' + (index + 1); // Provide a unique alt for each image

        // Append the image to the anchor, and then the anchor to the container
        anchor.appendChild(img);
        container.appendChild(anchor);
    });
});
