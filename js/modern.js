document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupThemeToggle();
    fetchExperience();
    fetchProjects();
    setupScrollTop();
    loadGitHubCalendar();
});

function initTheme() {
    const saved = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeIcon(saved);
}

function setupThemeToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
    });
}

function updateThemeIcon(theme) {
    const moon = document.querySelector('.theme-icon.moon');
    const sun = document.querySelector('.theme-icon.sun');
    if (!moon || !sun) return;
    moon.style.display = theme === 'dark' ? 'block' : 'none';
    sun.style.display = theme === 'light' ? 'block' : 'none';
}

function setupScrollTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function loadGitHubCalendar() {
    if (typeof GitHubCalendar === 'undefined') return;
    GitHubCalendar("#github-calendar", "patelchaitany", {
        responsive: true,
        tooltips: true
    }).catch(e => {
        const el = document.getElementById('github-calendar');
        if (el) el.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">Could not load GitHub contributions.</p>';
    });
}

async function fetchExperience() {
    try {
        const resp = await fetch('data/experience.json');
        if (!resp.ok) throw new Error('Failed');
        const { data } = await resp.json();
        renderExperience(data);
    } catch (e) {
        console.error('Error loading experience:', e);
    }
}

async function fetchProjects() {
    try {
        const resp = await fetch('data/projects.json');
        if (!resp.ok) throw new Error('Failed');
        const { data } = await resp.json();
        renderProjects(data);
    } catch (e) {
        console.error('Error loading projects:', e);
    }
}

function stripMustache(str) {
    return str.replace(/\{\{/g, '').replace(/\}\}/g, '');
}

function renderExperience(list) {
    const container = document.getElementById('experience-container');
    if (!container) return;

    list.forEach((exp, i) => {
        const card = document.createElement('div');
        card.className = 'exp-card';

        const techs = (exp.technologies || [])
            .map(t => `<span class="tag">${t}</span>`).join('');

        const bullets = exp.content
            .map(item => `<li>${item}</li>`).join('');

        card.innerHTML = `
            <div class="exp-card-header" onclick="this.parentElement.querySelector('.exp-body').classList.toggle('hidden');this.querySelector('.exp-toggle').classList.toggle('open')">
                <div class="exp-company-info">
                    <div class="exp-company-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    </div>
                    <div>
                        <h3 class="exp-company">${exp.company}</h3>
                        <p class="exp-role">${exp.role}</p>
                        <p class="exp-period">${exp.period}</p>
                    </div>
                </div>
                <button class="exp-toggle open" aria-label="Toggle details">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </button>
            </div>
            <div class="exp-body">
                <ul>${bullets}</ul>
                <div class="tags">${techs}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderProjects(list) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    list.sort((a, b) => b.year - a.year);

    const topProjects = list.slice(0, 6);

    topProjects.forEach((project, i) => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const desc = project.content
            .map(c => `<p>${stripMustache(c)}</p>`).join('');

        const techs = project.technologies
            .map(t => `<span class="tag">${stripMustache(t)}</span>`).join('');

        let links = '';
        if (project.githubUrl) {
            links += `<a href="${project.githubUrl}" target="_blank" class="project-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>`;
        }
        if (project.demoUrl) {
            links += `<a href="${project.demoUrl}" target="_blank" class="project-link" aria-label="Demo">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </a>`;
        }

        const isOpen = i < 2;

        card.innerHTML = `
            <div class="project-header" onclick="toggleProject(this)">
                <div class="project-title-wrap">
                    <div class="project-icon">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                    </div>
                    <div>
                        <h3 class="project-name">${project.name}</h3>
                        <p class="project-year">${project.year}</p>
                    </div>
                </div>
                <div class="project-actions">
                    ${links}
                    <button class="exp-toggle ${isOpen ? 'open' : ''}" aria-label="Toggle details">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
                    </button>
                </div>
            </div>
            <div class="project-body ${isOpen ? 'open' : ''}">
                ${desc}
                <div class="tags">${techs}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

function toggleProject(header) {
    const body = header.nextElementSibling;
    const toggle = header.querySelector('.exp-toggle');
    body.classList.toggle('open');
    toggle.classList.toggle('open');
}
