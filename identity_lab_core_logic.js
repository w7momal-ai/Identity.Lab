// Modal Control Functions (Enter to know, Report Analyses, Subscribe)
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore background scrolling
    }
}

// Close active modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modals = ['heroModal', 'analysisModal1', 'analysisModal2', 'analysisModal3', 'analysisModal4', 'subscribeModal'];
        modals.forEach(closeModal);
    }
});

// Toggle Header Mobile & Desktop Drawer Menu
function toggleNavMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.classList.toggle('hidden');
    }
}

// Newsletter Subscription Form Processing
function handleSubscribe(e, source) {
    e.preventDefault();
    if (source === 'footer') {
        const emailInput = document.getElementById('footerEmail');
        if (emailInput && emailInput.value) {
            const msg = document.getElementById('footerSubMsg');
            if (msg) msg.classList.remove('hidden');
            emailInput.value = '';
        }
    } else if (source === 'modal') {
        const emailInput = document.getElementById('modalEmail');
        if (emailInput && emailInput.value) {
            const msg = document.getElementById('modalSubMsg');
            if (msg) msg.classList.remove('hidden');
            setTimeout(() => {
                closeModal('subscribeModal');
                if (msg) msg.classList.add('hidden');
                emailInput.value = '';
            }, 1800);
        }
    }
}

// Article Search Index & Interactive Filtering
const searchableItems = [
    { title: "Your Identity Is Not a Dataset", target: "hero" },
    { title: "Pakistan Digital Rights Foundation Helpline Report 2025", target: "case-files" },
    { title: "NIST Demographic Effects in Face Recognition", target: "case-files" },
    { title: "A photo is not permission for everything", target: "reporting-explained" },
    { title: "When a face becomes raw material", target: "reporting-explained" },
    { title: "Bias is a measurable system risk", target: "reporting-explained" },
    { title: "UNESCO Human-centred approach to generative AI", target: "reporting-explained" },
    { title: "Before You Hand Over The Data", target: "before-handover" }
];

function filterArticles() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsDiv = document.getElementById('searchResults');
    
    if (!query) {
        resultsDiv.classList.add('hidden');
        resultsDiv.innerHTML = '';
        return;
    }

    const matches = searchableItems.filter(item => item.title.toLowerCase().includes(query));
    
    if (matches.length > 0) {
        resultsDiv.innerHTML = matches.map(m => `
            <div onclick="navigateToResult('${m.target}')" class="p-3 hover:bg-brandRed hover:text-white cursor-pointer border-b border-[#222]">
                ${m.title}
            </div>
        `).join('');
        resultsDiv.classList.remove('hidden');
    } else {
        resultsDiv.innerHTML = `<div class="p-3 text-brandGrey">No matching analysis found</div>`;
        resultsDiv.classList.remove('hidden');
    }
}

function navigateToResult(targetId) {
    const resultsDiv = document.getElementById('searchResults');
    const searchInput = document.getElementById('searchInput');
    if (resultsDiv) resultsDiv.classList.add('hidden');
    if (searchInput) searchInput.value = '';
    
    toggleNavMenu();
    
    const elem = document.getElementById(targetId);
    if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
    }
}