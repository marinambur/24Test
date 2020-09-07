const page = document.querySelector('.page')//нходим класс page

if (document.documentElement.clientWidth < 1100) {
    page.classList.add('small-pc');
}

if (document.documentElement.clientWidth < 992) {
    page.classList.add('tablet');
}

if (document.documentElement.clientWidth < 768) {
    page.classList.add('mobile');
}
console.log(document.documentElement.clientWidth);