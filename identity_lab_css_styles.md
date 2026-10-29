/* Base Theme Styles for IDENTITY.LAB */
:root {
    --bg-dark: #121111;
    --card-bg: #181717;
    --card-border: #282626;
    --brand-red: #C83232;
    --brand-red-dark: #A62424;
    --off-white: #F0EEE8;
    --grey: #969696;
    --taupe-bg: #C5B9B7;
    --taupe-text: #2B2625;
}

body {
    background-color: var(--bg-dark);
    color: var(--off-white);
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
}

/* Red Left Highlight Bar for Taupe Overlay Modals */
.red-bar-left {
    border-left: 3px solid var(--brand-red);
    padding-left: 1rem;
}

/* Custom Scrollbar Styling */
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-track {
    background: var(--bg-dark);
}
::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
    background: var(--brand-red);
}

/* Modal Fade-In Animation */
@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.98); }
    to { opacity: 1; transform: scale(1); }
}

.animate-modal {
    animation: fadeIn 0.25s ease-out forwards;
}