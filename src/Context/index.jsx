export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

// export const clientReviews = [
//     {
//         id: 1,
//         name: 'Emily Johnson',
//         position: 'Marketing Director at GreenLeaf',
//         img: 'assets/review1.png',
//         review:
//             'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//     },
//     {
//         id: 2,
//         name: 'Mark Rogers',
//         position: 'Founder of TechGear Shop',
//         img: 'assets/review2.png',
//         review:
//             'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//     },
//     {
//         id: 3,
//         name: 'John Dohsas',
//         position: 'Project Manager at UrbanTech ',
//         img: 'assets/review3.png',
//         review:
//             'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//     },
//     {
//         id: 4,
//         name: 'Ether Smith',
//         position: 'CEO of BrightStar Enterprises',
//         img: 'assets/review4.png',
//         review:
//             'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//     },
// ];

export const myProjects = [
    {
        title: '🚖 Uber Clone - MERN Stack Project',
        desc: "This is a fully functional Uber Clone built using the MERN stack, integrating real-time communication, authentication, and smooth UI animations.",
        subdesc:
            'Secure ride-sharing platform with JWT & bcrypt authentication, real-time ride updates via Socket.io, interactive Google Maps integration, seamless routing with React Router DOM, smooth animations using GSAP, secure API calls via Axios, and an optimized Express.js & MongoDB backend.',
        href: 'https://github.com/Gautam4513/uber',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/uber.webp',
        logoStyle: {
            backgroundColor: '#ffffff',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'Socket io',
                path: '/assets/socket.svg',
            },
            {
                id: 4,
                name: 'Node js',
                path: '/assets/node-js.svg',
            },
            {
                id:5,
                name:"Three js",
                path:"/assets/three-js.svg",
            },
        ],
    },
    {
        title: 'Flappy Bird Game',
        desc: 'A browser-based Flappy Bird game implemented using HTML, CSS, and JavaScript, demonstrating object-oriented programming (OOP) principles.',
        subdesc:
            'Responsive game with smooth animations, score tracking, sound effects, and interactive gameplay using HTML5, CSS3, JavaScript (ES6+), and the HTML5 Canvas',
        href: 'https://github.com/Gautam4513/flappy-bird-game',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.jpeg',
        logoStyle: {
            backgroundColor: '#ffffff',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/html.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/js.svg',
            },
           
        ],
    },
    {
        title: 'Kaleidoscope',
        desc: 'Kaleidoscope project using HTML, JavaScript, Tailwind CSS, and P5.js to create mesmerizing rangoli-inspired patterns from user-drawn designs.',
        subdesc:
            'The Kaleidoscope project is an interactive digital art tool that transforms user-drawn sketches into intricate and symmetrical rangoli-inspired designs. Built with HTML, JavaScript, Tailwind CSS, and P5.js, it leverages creative coding to generate dynamic and visually appealing patterns in real time. The project enhances artistic expression by mirroring and repeating strokes, turning simple inputs into stunning geometric artwork.',
        href: 'https://github.com/Gautam4513/Kaleidoscope',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/html.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/js.svg',
            },
            {
                id: 4,
                name: 'P5 js',
                path: '/assets/p5-js.svg',
            },
        ],
    },
    {
        title: '✋ Hand Gesture Drawing using ML5.js & P5.js',
        desc: 'An interactive drawing application using ML5.js and P5.js, featuring real-time hand tracking, gesture-based drawing, smooth and continuous strokes, dynamic gesture recognition, and a fun, user-friendly UI built with HTML, CSS, and JavaScript.',
        subdesc:
            'This project is a web-based hand-tracking application that allows users to draw on a canvas using hand gestures. It leverages ML5.js for hand tracking and P5.js for interactive graphics. Simply show the "👆" (Index finger up) gesture, and the canvas will start drawing as you move your hand.',
        href: 'https://github.com/Gautam4513/ml5-js-hand-drawing',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.jpg',
        logoStyle: {
            backgroundColor: '#ffffff',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/html.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/js.svg',
            },
            {
                id: 4,
                name: 'P5 js',
                path: '/assets/p5-js.svg',
            },
            {
                id:5,
                name:"ML5 js",
                path:"/assets/ml5-js.png"
            }
        ],
    },
    {
        title: 'Solay-system',
        desc: 'A 3D solar system simulation built with HTML, Tailwind CSS, JavaScript, and Three.js, featuring four planets with realistic orbits, lighting, and smooth animations for an immersive space experience.',
        subdesc:
            'This project showcases a visually engaging 3D solar system with four planets, leveraging Three.js for rendering, Tailwind CSS for styling, and JavaScript for interactivity. It includes dynamic lighting, orbital motion, and smooth animations for an interactive exploration of space.',
        href: 'https://github.com/Gautam4513/Solay-system',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#ffffff',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/html.png',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/js.svg',
            },
            {
                id: 4,
                name: 'Three js',
                path: '/assets/three-js.svg',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const learningExperiences = [
    {
        id: 1,
        name: 'React Js',
        from: 'sheryians coding school',
        duration: '2024 - Present',
        title: "Sheryians Coding School: Where I Mastered React.js to Build Dynamic and Interactive User Interfaces",
        icon: './assets/React.webp',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'MERN Stack',
        from: 'sheryians coding school',
        duration: '2025 - present',
        title: "Mastering the MERN Stack: From Frontend React Interfaces to Scalable Backend Solutions with MongoDB, Express, and Node.js",
        icon: './assets/mern.webp',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Blender',
        from: 'Youtube',
        duration: '2024 - present',
        title: "Learning Blender on YouTube: Crafting 3D Models and Animations to Bring Creative Visions to Life",
        icon: './assets/blender.png',
        animation: 'salute',
    },
];