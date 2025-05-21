let darkmodeCache = localStorage.getItem('darkmode'); // fetch if any user selection from the cache.

const themeSwitch = document.getElementById('theme-switch');

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
}

if(darkmodeCache === 'active') enableDarkMode();

themeSwitch.addEventListener('click', () => {
    darkmodeCache = localStorage.getItem('darkmode');
    darkmodeCache !== 'active' ? enableDarkMode() : disableDarkMode()
})