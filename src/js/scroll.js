const smoothLinks = document.querySelectorAll('a[href^="#scroll__"]');
const sidebarMenu = document.querySelectorAll('.sidebar__item');

for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        sidebarMenu.forEach((i) => {
            if (smoothLink.parentNode === i) {
                setTimeout(() => { scroll(smoothLink); }, 100)
                return
            }
        });
        scroll(smoothLink);
        
    });
};

function scroll(smoothLink) {
    const id = smoothLink.getAttribute('href');
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}