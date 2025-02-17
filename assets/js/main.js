// Function to load HTML components
async function loadComponent(url, containerId) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Load components when page loads
window.addEventListener('DOMContentLoaded', () => {
    loadComponent('./components/header.html', 'header-container');
    loadComponent('./components/footer.html', 'footer-container');
});