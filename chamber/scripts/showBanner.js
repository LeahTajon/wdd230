const banner = document.getElementById('banner');
const originalBanner = document.getElementById('regular-banner');
const today = new Date();
const dayOfWeek = today.getDay();

if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
    banner.style.display = "block";
    originalBanner.style.display = "none";
}
