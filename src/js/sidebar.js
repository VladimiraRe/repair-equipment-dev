const burger = document.querySelector('.header__burger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = sidebar.querySelector('.sidebar__wrap--row .icon:first-child');
const content = document.querySelector('.content');

var isOpen = false;
checker();

window.addEventListener('resize', () => { checker(); })

function checker() {
    if (window.innerWidth >= 320 && window.innerWidth < 768) {
        burger.addEventListener('click', openClose, false);
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        burger.addEventListener('click', openClose, true);
    }
    if (window.innerWidth >= 1440) {
        burger.removeEventListener('click', openClose, true);
        burger.removeEventListener('click', openClose, false);
    }
}

function openClose(is768) {
    new Promise(resolve => {
        sidebar.classList.toggle('sidebar--presence');
        content.classList.toggle('content--locked');
        setTimeout(() => {
            sidebar.classList.toggle('sidebar--position');
        }, 100);

        burger.setAttribute('disabled', true);

        resolve(true);
    })
    .then((response) => {
        isOpen = response;
        if (isOpen) {
            return closeSidebar(is768);
        }
    })
    .then((response) => {
        isOpen = response;
    });
}

function closeSidebar(is768) {
    return new Promise(resolve => {
        closeBtn.addEventListener('click', close);
        document.addEventListener('keydown', closeByEsc);
        if (is768) {
            content.addEventListener('click', closeByClickOnContent);
        }
        resolve(false);
    });
}

function closeByEsc(evt) {
    if (evt.key === 'Escape') {
        close();
    }
}

function closeByClickOnContent(evt) {
    if(evt.clientX > 320) {
        close();
    }
}

function close() {
    sidebar.classList.toggle('sidebar--position');
    content.classList.toggle('content--locked');
    setTimeout(() => {
        sidebar.classList.toggle('sidebar--presence');
    }, 100)

    burger.removeAttribute('disabled');

    closeBtn.removeEventListener('click', close);
    document.removeEventListener('keydown', closeByEsc);
    content.removeEventListener('click', closeByClickOnContent);
}


