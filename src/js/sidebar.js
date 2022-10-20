const burger = document.querySelector('.header__burger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = sidebar.querySelector('.sidebar__wrap--row .icon:first-child');
const content = document.querySelector('.content');

var isOpen = false;
checker();

window.addEventListener('resize', () => { checker(); })

function checker() {
    console.log(isOpen)
    if ( 768 <= window.innerWidth < 1440) {
        is768 = true;
        openClose();
    }
    if (window.innerWidth < 320) {
        openClose();
    }
}

function openClose() {
    burger.addEventListener('click', () => {
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
                return closeSidebar();
            }
        })
        .then((response) => {
            isOpen = response;
        });
    });
}

function closeSidebar() {
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


