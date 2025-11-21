document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    fetchExperience();
    fetchProjects();
    setupNavigation();
    setupThemeToggle();

    if (typeof GitHubCalendar !== 'undefined') {
        GitHubCalendar(".calendar", "patelchaitany", {
            responsive: true,
            tooltips: true
        }).then(r => {
            console.log("GitHub Calendar loaded", r);
        }).catch(e => {
            console.error("GitHub Calendar error:", e);
            document.querySelector('.calendar').innerHTML = "Error loading calendar: " + e.message;
        });
    } else {
        console.error("GitHubCalendar is not defined");
        document.querySelector('.calendar').innerHTML = "Error: GitHubCalendar library not loaded.";
    }
});

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function setupThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const moonIcon = document.querySelector('.theme-icon.moon');
    const sunIcon = document.querySelector('.theme-icon.sun');

    if (theme === 'dark') {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    }
}

async function fetchExperience() {
    try {
        const response = await fetch('/data/experience.json');
        if (!response.ok) throw new Error('Failed to fetch experience data');
        const { data } = await response.json();
        renderExperience(data);
    } catch (error) {
        console.error('Error loading experience:', error);
    }
}

async function fetchProjects() {
    try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) throw new Error('Failed to fetch projects data');
        const { data } = await response.json();
        renderProjects(data);
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

function renderExperience(experienceList) {
    const container = document.getElementById('experience-container');
    if (!container) return;

    experienceList.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'item-card';

        const techStack = exp.technologies ? exp.technologies.map(t => `<span class="tag">${t}</span>`).join('') : '';

        card.innerHTML = `
            <div class="item-header">
                <div class="item-title">${exp.role} · ${exp.company}</div>
                <div class="item-date">${exp.period}</div>
            </div>
            <div class="item-description">
                <ul>
                    ${exp.content.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            <div class="tags">
                ${techStack}
            </div>
        `;
        container.appendChild(card);
    });
}

function renderProjects(projectsList) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    // Sort by year desc
    projectsList.sort((a, b) => b.year - a.year);

    projectsList.forEach(project => {
        const card = document.createElement('div');
        card.className = 'item-card';

        // Process content to remove mustache brackets for display
        const description = project.content[0].replace(/{{/g, '').replace(/}}/g, '');

        const techStack = project.technologies.map(t => {
            const cleanTech = t.replace(/{{/g, '').replace(/}}/g, '');
            return `<span class="tag">${cleanTech}</span>`;
        }).join('');

        let linksHtml = '';
        if (project.githubUrl) {
            linksHtml += `
                <a href="${project.githubUrl}" target="_blank" class="link-btn">
                    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="margin-right: 4px;"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    GitHub
                </a>`;
        }
        if (project.demoUrl) {
            linksHtml += `
                <a href="${project.demoUrl}" target="_blank" class="link-btn">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="margin-right: 4px;"><path d="M14 3h7v7h-2V6.414l-8.293 8.293-1.414-1.414L17.586 5H14V3zm-2 14v2H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7h-7z"/></svg>
                    Demo
                </a>`;
        }

        card.innerHTML = `
            <div class="item-header">
                <div class="item-title">${project.name}</div>
                <div class="item-date">${project.year}</div>
            </div>
            <div class="item-description">
                <p>${description}</p>
            </div>
            <div class="tags">
                ${techStack}
            </div>
            <div class="item-links">
                ${linksHtml}
            </div>
        `;
        container.appendChild(card);
    });
}

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section');

    // Smooth scroll
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Active state on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });
}
