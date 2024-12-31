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
        ],
        'demo': [
            'images/gallery/figma.png',
             'images/gallery/figma.png',
              'images/gallery/figma.png'
        ],
        'dialserve': [
            'images/gallery/dialserve1.png',
            'images/gallery/dialserve2.png',
            'images/gallery/dialserve3.png'
        ],
        'mosh': [
            'images/gallery/mosh1.png',
            'images/gallery/mosh2.png',
            'images/gallery/mosh3.png'
        ]
    };

    // Text content for each contentId
    if (contentId === 'elite') {
        headerText.innerHTML = 'Elite International Freight & Cargo';
        bodyText.innerHTML = 'I Developed a comprehensive web application using HTML, CSS, JavaScript, and PHP for the backend. The project included an admin panel for managing shipping packages, email functionality with automated responses, and integration with a mobile app via API which I developed.';
        link.href = 'https://eifcltd.com/';
    } else if (contentId === 'diamond') {
        headerText.innerHTML = 'Diamond Financial Consulting';
        bodyText.innerHTML = 'I developed the Diamond Financial website, a sleek and professional platform tailored for financial consulting services. Built on WordPress, the website features a modern design and intuitive navigation, enhancing user experience and accessibility. It includes detailed information on services, a blog for financial insights, and an integrated booking system for client consultations. The website effectively communicates the brand’s expertise and commitment to helping clients achieve their financial goals, making it a reliable resource for both existing and potential clients.';
        link.href = 'https://diamondfinancial.suiccabranding.online';
    }
    else if (contentId === 'talley') {
        headerText.innerHTML = 'Talley Financial Group';
        bodyText.innerHTML = "I developed the Talley Financial website, a professional platform dedicated to offering financial insights, services, and resources. Built on WordPress, the site combines a clean, modern design with a user-friendly interface, making it easy for visitors to navigate and access essential information. Key features include detailed service descriptions, client testimonials, and an integrated contact form for seamless communication. The site reflects a commitment to providing valuable financial guidance and showcases the brand's expertise in the industry.";
        link.href = 'https://talleyfinancial.suiccabranding.online/';
    }
    else if (contentId === 'junction') {
        headerText.innerHTML = 'The Junction';
        bodyText.innerHTML = 'I developed a news platform focused on delivering comprehensive updates on economic health and agricultural developments. The platform integrates real-time data, expert analyses, and interactive tools designed to support informed decision-making for stakeholders in the agricultural sector. This solution was built on WordPress, leveraging its flexibility to create an engaging and informative user experience.';
        link.href = 'https://thejunction.ng/';
    }
    else if (contentId === 'unicornbabes') {
        headerText.innerHTML = 'Unicornbabes';
        bodyText.innerHTML = 'I developed an eCommerce website for a beauty and lip care retail business using WordPress with WooCommerce and Elementor. I also integrated the Paystack payment gateway to enable secure and seamless online transactions.';
        link.href = 'http://unicornbabes.ng/';
    }
    else if (contentId === 'demo') {
        headerText.innerHTML = 'Demo Project';
        bodyText.innerHTML = 'I replicated a figma design using html,css and Javascript here is a link to <a href="https://www.figma.com/design/SxRF76pb2lTmRJSNIelROA/Frontend-Developer-Test-(Copy)?m=auto&t=lhhLQJzRLrdxgVsw-6" target="_blank" rel="noopener noreferrer">figma design</a>. Click on the button below to see the live project';
        link.href = 'https://pagexoxo.netlify.app/';
    }
    else if (contentId === 'dialserve') {
        headerText.innerHTML = 'Dialserve';
        bodyText.innerHTML = 'I developed, Dialserve Solutions which offers remote call center job opportunities tailored for flexibility, allowing individuals to work from home on their own schedules. ';
        link.href = 'https://dialserve.suiccabranding.online/';
    }
    else if (contentId === 'mosh') {
        headerText.innerHTML = 'Oladunni Moshood';
        bodyText.innerHTML = 'A well built personal Portfolio for an Multidisciplinary Artist, which tells you more about the artist and displays his works ';
        link.href = 'https://oladunnimoshood.com/';
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
