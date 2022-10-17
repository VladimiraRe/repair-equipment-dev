const areaToOpen = document.querySelectorAll('.readmore__area-to-open')
const btns = document.querySelectorAll('.readmore');
const readmoreTxt = document.querySelectorAll('.readmore__txt');


let isOpen = false;

for (let i = 0; i < btns.length; i++) {
    function buttonСlick(el) {
        btns[el].addEventListener('click', () => {
            if (isOpen) {
                isOpen = false;
                textChange('Показать все', el);
                return
            }
            isOpen = true;
            textChange('Скрыть часть', el);
        });
    }
    buttonСlick(i);
}

function smoothChange(textClass) {
    textClass.classList.add('readmore__txt--invisible');
    setTimeout(() => { textClass.classList.remove('readmore__txt--invisible'); }, 400);
}

function textChange(text, element) {
    smoothChange(readmoreTxt[element]);
    setTimeout(() => { areaToOpen[element].classList.toggle('section__overlay'); }, 350);
    btns[element].classList.toggle('readmore--open');
    setTimeout(() => { readmoreTxt[element].textContent = text; }, 350);
}