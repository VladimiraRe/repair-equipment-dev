const areaToOpen = document.querySelectorAll('.readmore__area-to-open')
const btns = document.querySelectorAll('.readmore');
const readmoreTxt = document.querySelectorAll('.readmore__txt');


let isOpen = false;

for (let i = 0; i < btns.length; i++) {
    function buttonСlick(el) {
        btns[el].addEventListener('click', () => {
            if (isOpen) {
                isOpen = false;
                if (el === 0) {
                    textChange('Читать далее', el);
                    return
                }
                textChange('Показать все', el);
                return
            }
            isOpen = true;
            textChange('Скрыть часть', el);
        });
    }
    buttonСlick(i);
}

function textChange(text, element) {
    areaToOpen[element].classList.toggle('section__overlay');
    btns[element].classList.toggle('readmore--open');
    readmoreTxt[element].textContent = text;
}