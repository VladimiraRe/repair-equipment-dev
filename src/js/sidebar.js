const burger = document.querySelector('.header__burger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = sidebar.querySelector('.sidebar__wrap--row .icon:first-child');
const container = document.querySelector('.container');

checker();
window.addEventListener('resize', () => { checker(); })

function checker() {
    if (sidebar.classList.contains('sidebar--open') && 
    document.documentElement.clientWidth >= 1440) {
        close();
    }

    if (document.documentElement.clientWidth < 1440) {
        burger.addEventListener('click', openClose);
    }
}

function openClose() {
    openSidebar();
    sidebar.addEventListener('transitionend', closeSidebar, {once: true});
}

function openSidebar() {
    container.classList.add('container--locked');
    sidebar.classList.add('sidebar--open');
    setTimeout(() => {
        sidebar.classList.remove('sidebar--position');
    }, 100)
}

function closeSidebar() {
    closeBtn.addEventListener('click', close);
    if (document.documentElement.clientWidth >= 768) {
        container.addEventListener('click', closeByClickOnContent);
    }
}

function closeByClickOnContent(evt) {
    if(evt.clientX > 320) {
        close();
    }
}

function close() {
    container.classList.remove('container--locked');
    sidebar.classList.add('sidebar--position');
    setTimeout(() => {
        sidebar.classList.remove('sidebar--open');
    }, 100);

    closeBtn.removeEventListener('click', close);
    container.removeEventListener('click', closeByClickOnContent);
}


