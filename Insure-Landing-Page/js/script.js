const $hamburger = document.getElementById('hamburger');
const $menu = document.getElementById('menu');

$hamburger.addEventListener('click', () => {
    $hamburger.classList.toggle('show');
    $menu.classList.toggle('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        $hamburger.classList.toggle('show');
        $menu.classList.remove('show');
    }
})