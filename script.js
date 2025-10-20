// Soccer Career Database - Add your soccer achievements here
const projectsDatabase = [
    {
        id: 1,
        title: "Regional Championship Winner",
        description: "Led my team to victory in the regional championship, scoring 8 goals and providing 12 assists throughout the tournament. Recognized as tournament MVP.",
        image: "", // Add photo later
        liveUrl: "#",
        githubUrl: "#",
        technologies: ["MVP Award", "8 Goals", "12 Assists", "Championship Winner"],
        category: "web", // tournaments
        status: "featured",
        featured: true,
        date: "2024-06-15"
    },
    {
        id: 2,
        title: "Youth Academy Graduate",
        description: "Successfully completed 3-year development program at prestigious youth academy. Improved technical skills, tactical awareness, and physical conditioning.",
        image: "",
        liveUrl: "#",
        githubUrl: "#",
        technologies: ["Technical Training", "Tactical Development", "Physical Conditioning", "3 Years"],
        category: "tool", // training
        status: "new",
        featured: true,
        date: "2024-05-01"
    },
    {
        id: 3,
        title: "State Team Selection",
        description: "Selected to represent state team in national competition. Competed against top talent from across the country as starting midfielder.",
        image: "",
        liveUrl: "#",
        githubUrl: "#",
        technologies: ["State Representative", "National Competition", "Starting XI", "Midfielder"],
        category: "mobile", // teams
        status: "",
        featured: true,
        date: "2024-03-20"
    },
    {
        id: 4,
        title: "Top Scorer Award",
        description: "Finished as league's top scorer with 24 goals in 20 matches. Maintained excellent goal-to-game ratio while creating opportunities for teammates.",
        image: "",
        liveUrl: "#",
        githubUrl: "#",
        technologies: ["24 Goals", "20 Matches", "Top Scorer", "League Winner"],
        category: "game", // awards
        status: "featured",
        featured: false,
        date: "2023-11-30"
    },
    {
        id: 5,
        title: "Club Team Captain",
        description: "Appointed as team captain for local club team. Led by example on and off the field, organizing training sessions and motivating teammates.",
        image: "",
        liveUrl: "#",
        githubUrl: "#",
        technologies: ["Team Captain", "Leadership", "Organizing", "Motivation"],
        category: "mobile", // teams
        status: "updated",
        featured: false,
        date: "2023-09-01"
    },
    {
        id: 6,
        title: "Soccer Skills Camp",
        description: "Attended intensive summer soccer skills camp with professional coaches. Focused on advanced ball control, set pieces, and game intelligence.",
        image: "",
        liveUrl: "#",
        githubUrl: "#",
        technologies: ["Professional Coaching", "Ball Control", "Set Pieces", "Game Intelligence"],
        category: "tool", // training
        status: "",
        featured: false,
        date: "2023-07-15"
    }
    // Add more soccer achievements here
];

// Apps Database - Add your applications here
const appsDatabase = [
    {
        id: 1,
        title: "Soccer Game - Play Online",
        description: "An interactive browser-based soccer game where you control a player to score goals. Features realistic ball physics, responsive controls, and scoring system. Perfect for soccer fans!",
        image: "", // Add screenshot later
        liveUrl: "./soccer-game/index.html",
        githubUrl: "https://github.com/namanmandloi/soccer-game",
        technologies: ["HTML5 Canvas", "JavaScript ES6+", "CSS3", "Game Physics", "Responsive Design"],
        category: "game",
        status: "featured",
        featured: true,
        date: "2025-10-20"
    },
    {
        id: 2,
        title: "Test App - Interactive Demo",
        description: "A fully functional demonstration app showcasing modern web development features including theme switching, calculator, counter with local storage, and responsive design.",
        image: "", // Add screenshot later
        liveUrl: "./test-app/index.html",
        githubUrl: "https://github.com/namanmandloi/test-app",
        technologies: ["HTML5", "CSS3", "JavaScript ES6+", "Local Storage", "CSS Grid"],
        category: "web",
        status: "featured",
        featured: true,
        date: "2025-10-20"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Interactive weather dashboard with real-time data, forecasts, and location-based services. Built with modern JavaScript and weather APIs.",
        image: "",
        liveUrl: "#", // Will be updated when you build this
        githubUrl: "https://github.com/namanmandloi/weather-dashboard",
        technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
        category: "web",
        status: "new",
        featured: true,
        date: "2025-10-25"
    },
    {
        id: 4,
        title: "Task Manager Pro",
        description: "A full-stack web application for managing tasks and projects. Features user authentication, real-time updates, and team collaboration tools.",
        image: "",
        liveUrl: "#", // Will be updated when you build this
        githubUrl: "https://github.com/namanmandloi/task-manager",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        category: "web",
        status: "",
        featured: false,
        date: "2025-11-01"
    },
    {
        id: 5,
        title: "Soccer Stats Tracker",
        description: "Mobile app for tracking soccer statistics, match performance, and training progress. Perfect for players and coaches.",
        image: "",
        liveUrl: "#", // Will be updated when you build this
        githubUrl: "https://github.com/namanmandloi/soccer-stats",
        technologies: ["React Native", "SQLite", "Charts", "Camera"],
        category: "mobile",
        status: "updated",
        featured: true,
        date: "2025-11-05"
    },
    {
        id: 6,
        title: "Soccer Skills Game",
        description: "An engaging browser game where players practice soccer skills through interactive challenges and mini-games.",
        image: "",
        liveUrl: "#", // Will be updated when you build this
        githubUrl: "https://github.com/namanmandloi/soccer-game",
        technologies: ["JavaScript", "HTML5 Canvas", "Game Physics", "CSS3"],
        category: "game",
        status: "",
        featured: false,
        date: "2025-11-10"
    },
    {
        id: 7,
        title: "Code Snippet Manager",
        description: "A developer tool for organizing and searching code snippets. Features syntax highlighting and tag-based organization.",
        image: "",
        liveUrl: "#", // Will be updated when you build this
        githubUrl: "https://github.com/namanmandloi/snippet-manager",
        technologies: ["Electron", "Vue.js", "SQLite", "Monaco Editor"],
        category: "tool",
        status: "",
        featured: false,
        date: "2025-11-15"
    }
    // Add more apps here as you build them
];

// Project Management System (for Soccer Career)
class ProjectManager {
    constructor() {
        this.projects = projectsDatabase;
        this.currentFilter = 'all';
        this.projectsPerLoad = 6;
        this.loadedProjects = 0;
        this.init();
    }

    init() {
        this.renderProjects();
        this.setupFilters();
        this.setupLoadMore();
        this.updateProjectCount();
    }

    // Render projects to the DOM
    renderProjects(filter = 'all', loadMore = false) {
        const container = document.getElementById('projects-container');
        
        if (!loadMore) {
            container.innerHTML = '';
            this.loadedProjects = 0;
        }

        let filteredProjects = this.filterProjects(filter);
        
        // Sort by featured first, then by date
        filteredProjects.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return new Date(b.date) - new Date(a.date);
        });

        const projectsToShow = filteredProjects.slice(
            this.loadedProjects, 
            this.loadedProjects + this.projectsPerLoad
        );

        projectsToShow.forEach((project, index) => {
            const projectCard = this.createProjectCard(project);
            projectCard.style.animationDelay = `${index * 0.1}s`;
            container.appendChild(projectCard);
        });

        this.loadedProjects += projectsToShow.length;
        this.updateLoadMoreButton(filteredProjects.length);
        this.updateProjectCount();
    }

    // Create individual project card
    createProjectCard(project) {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category);

        const statusBadge = project.status ? 
            `<div class="project-status ${project.status}">${project.status}</div>` : '';

        const imageContent = project.image ? 
            `<img src="${project.image}" alt="${project.title}" loading="lazy">` :
            `<div class="project-placeholder">
                <i class="fas ${this.getCategoryIcon(project.category)}"></i>
            </div>`;

        card.innerHTML = `
            <div class="project-image" onclick="window.open('${project.liveUrl}', '_blank', 'noopener,noreferrer')">
                ${imageContent}
                ${statusBadge}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveUrl}" class="project-link primary" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a href="${project.githubUrl}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> Source Code
                    </a>
                </div>
            </div>
        `;

        return card;
    }

    // Get appropriate icon for project category
    getCategoryIcon(category) {
        const icons = {
            'web': 'fa-trophy',
            'mobile': 'fa-users',
            'game': 'fa-medal',
            'tool': 'fa-dumbbell',
            'other': 'fa-futbol'
        };
        return icons[category] || 'fa-futbol';
    }

    // Filter projects by category
    filterProjects(filter) {
        if (filter === 'all') {
            return this.projects;
        }
        return this.projects.filter(project => project.category === filter);
    }

    // Setup filter buttons
    setupFilters() {
        const filterButtons = document.querySelectorAll('.project-filters .filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter and render projects
                const filter = button.getAttribute('data-filter');
                this.currentFilter = filter;
                this.renderProjects(filter);
            });
        });
    }

    // Setup load more functionality
    setupLoadMore() {
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.renderProjects(this.currentFilter, true);
            });
        }
    }

    // Update load more button visibility
    updateLoadMoreButton(totalProjects) {
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            if (this.loadedProjects < totalProjects) {
                loadMoreBtn.style.display = 'inline-block';
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
    }

    // Update project count display
    updateProjectCount() {
        const countElement = document.getElementById('project-count');
        if (countElement) {
            const filteredProjects = this.filterProjects(this.currentFilter);
            countElement.textContent = filteredProjects.length;
        }
    }

    // Method to add new project (for future use)
    addProject(project) {
        project.id = this.projects.length + 1;
        project.date = new Date().toISOString().split('T')[0];
        this.projects.unshift(project); // Add to beginning
        this.renderProjects(this.currentFilter);
    }
}

// App Management System (for Development Portfolio)
class AppManager {
    constructor() {
        this.apps = appsDatabase;
        this.currentFilter = 'all';
        this.appsPerLoad = 6;
        this.loadedApps = 0;
        this.init();
    }

    init() {
        this.renderApps();
        this.setupFilters();
        this.setupLoadMore();
        this.updateAppCount();
    }

    // Render apps to the DOM
    renderApps(filter = 'all', loadMore = false) {
        const container = document.getElementById('apps-container');
        
        if (!container) return; // Exit if container doesn't exist
        
        if (!loadMore) {
            container.innerHTML = '';
            this.loadedApps = 0;
        }

        let filteredApps = this.filterApps(filter);
        
        // Sort by featured first, then by date
        filteredApps.sort((a, b) => {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return new Date(b.date) - new Date(a.date);
        });

        // For now, only show the soccer game (first featured game)
        filteredApps = filteredApps.filter(app => app.category === 'game' && app.featured);

        const appsToShow = filteredApps.slice(
            this.loadedApps, 
            this.loadedApps + this.appsPerLoad
        );

        appsToShow.forEach((app, index) => {
            const appCard = this.createAppCard(app);
            appCard.style.animationDelay = `${index * 0.1}s`;
            container.appendChild(appCard);
        });

        this.loadedApps += appsToShow.length;
        this.updateLoadMoreButton(filteredApps.length);
        this.updateAppCount();
    }

    // Create individual app card
    createAppCard(app) {
        const card = document.createElement('article');
        card.className = 'app-card';
        card.setAttribute('data-category', app.category);

        const statusBadge = app.status ? 
            `<div class="app-status ${app.status}">${app.status}</div>` : '';

        const imageContent = app.image ? 
            `<img src="${app.image}" alt="${app.title}" loading="lazy">` :
            `<div class="app-placeholder">
                <i class="fas ${this.getCategoryIcon(app.category)}"></i>
            </div>`;

        card.innerHTML = `
            <a href="${app.liveUrl}" class="app-image-link" target="_blank" rel="noopener noreferrer">
                <div class="app-image">
                    ${imageContent}
                    ${statusBadge}
                </div>
            </a>
            <div class="app-content">
                <h3 class="app-title">${app.title}</h3>
                <p class="app-description">${app.description}</p>
                <div class="app-tech">
                    ${app.technologies.map(tech => 
                        `<span class="app-tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                <div class="app-links">
                    <a href="${app.liveUrl}" class="app-link" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-rocket"></i> Launch App
                    </a>
                    <a href="${app.githubUrl}" class="app-link secondary" target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i> View Code
                    </a>
                </div>
            </div>
        `;

        return card;
    }

    // Get appropriate icon for app category
    getCategoryIcon(category) {
        const icons = {
            'web': 'fa-globe',
            'mobile': 'fa-mobile-alt',
            'game': 'fa-gamepad',
            'tool': 'fa-tools',
            'other': 'fa-code'
        };
        return icons[category] || 'fa-code';
    }

    // Filter apps by category
    filterApps(filter) {
        if (filter === 'all') {
            return this.apps;
        }
        return this.apps.filter(app => app.category === filter);
    }

    // Setup filter buttons for apps
    setupFilters() {
        const filterButtons = document.querySelectorAll('.app-filters .filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter and render apps
                const filter = button.getAttribute('data-filter');
                this.currentFilter = filter;
                this.renderApps(filter);
            });
        });
    }

    // Setup load more functionality for apps
    setupLoadMore() {
        const loadMoreBtn = document.getElementById('load-more-apps-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.renderApps(this.currentFilter, true);
            });
        }
    }

    // Update load more button visibility for apps
    updateLoadMoreButton(totalApps) {
        const loadMoreBtn = document.getElementById('load-more-apps-btn');
        if (loadMoreBtn) {
            if (this.loadedApps < totalApps) {
                loadMoreBtn.style.display = 'inline-block';
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
    }

    // Update app count display
    updateAppCount() {
        const countElement = document.getElementById('app-count');
        if (countElement) {
            const filteredApps = this.filterApps(this.currentFilter);
            countElement.textContent = filteredApps.length;
        }
    }

    // Method to add new app (for future use)
    addApp(app) {
        app.id = this.apps.length + 1;
        app.date = new Date().toISOString().split('T')[0];
        this.apps.unshift(app); // Add to beginning
        this.renderApps(this.currentFilter);
    }
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Project Manager
    const projectManager = new ProjectManager();
    
    // Initialize App Manager
    const appManager = new AppManager();

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('.nav');
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = 'none';
        }
    });

    // Typing animation for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Initialize typing animation
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 500);
    }

    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Skills animation on scroll
    const skillItems = document.querySelectorAll('.skill-item');
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }, index * 100);
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px) scale(0.8)';
        item.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        skillObserver.observe(item);
    });

    // Contact form validation (if you add a form later)
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroImage = document.querySelector('.hero-image');
        
        if (hero && heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Theme toggle (optional feature)
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('darkTheme', isDark);
    }

    // Load saved theme preference
    const savedTheme = localStorage.getItem('darkTheme');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-theme');
    }

    // Console welcome message
    console.log(`
    ╭─────────────────────────────────────╮
    │  Welcome to my personal website!    │
    │  Built with HTML, CSS, and JS       │
    │  Check out the source code on       │
    │  GitHub: github.com/yourusername    │
    ╰─────────────────────────────────────╯
    `);
});