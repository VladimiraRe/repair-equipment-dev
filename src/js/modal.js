const headerModalBtns = document.querySelectorAll('.header__wrap:nth-child(2) .header__list:first-child .header__item:nth-child(-n + 2)');
const modals = document.querySelectorAll('.modal');
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');
const sidebarModalBtns = sidebar.querySelectorAll('.sidebar__icons .sidebar__icons-item:nth-child(-n + 2)');
const closeBtns = document.querySelectorAll('.modal .modal__close');

let htmlObj, closeBtn

let modalBtnsArray = Array.from(headerModalBtns);
sidebarModalBtns.forEach((i) => {
    modalBtnsArray.push(i);
});

checker();
window.addEventListener('resize', () => { checker(); })

function checker() {
    for (let i = 0; i < modalBtnsArray.length; i++) {
        function catchBtn(currentItem) {
            let isSidebarOpen = false;
            let item = currentItem;

            if (item >= modals.length) {
                isSidebarOpen = true;
                item = item - modals.length;
            }

            htmlObj = modals[item];
            closeBtn = closeBtns[item];

            if (htmlObj.classList.contains('modal--open') &&
            document.documentElement.clientWidth >= 768) {
            container.addEventListener('click', closeByClickOnContent);

                if (document.documentElement.clientWidth >= 1440) {
                    sidebar.classList.add('sidebar--locked');
                }
            }

            modalBtnsArray[currentItem].addEventListener('click', () => { openClose(isSidebarOpen) });
        }

        catchBtn(i);
    }
}

function openClose(isSidebarOpen) {
    if (isSidebarOpen) {
        closeSidebar();
    }

    openModal();
    htmlObj.addEventListener('transitionend', closeModal, {once: true});
}

function closeSidebar() {
    if (sidebar.classList.contains('sidebar--open')) {
        sidebar.classList.add('sidebar--position');
        setTimeout(() => {
            sidebar.classList.remove('sidebar--open');
        }, 100)
    }
}

function openModal() {
    if (document.documentElement.clientWidth >= 1440) {
        sidebar.classList.add('sidebar--locked');
    }

    container.classList.add('container--locked');
    htmlObj.classList.add('modal--open');
    setTimeout(() => {
        htmlObj.classList.remove('modal--position');
    }, 100)
}

function closeModal() {
    closeBtn.addEventListener('click', close);
    if (document.documentElement.clientWidth >= 768) {
        container.addEventListener('click', closeByClickOnContent);
    }
}

function closeByClickOnContent(evt) {
    if(evt.clientX < document.documentElement.clientWidth - 440) {
        close();
    }
}

function close() {
    container.classList.remove('container--locked');
    sidebar.classList.remove('sidebar--locked');
    htmlObj.classList.add('modal--position');
    setTimeout(() => {
        htmlObj.classList.remove('modal--open');
    }, 100)

    closeBtn.removeEventListener('click', close);
    container.removeEventListener('click', closeByClickOnContent);
}
