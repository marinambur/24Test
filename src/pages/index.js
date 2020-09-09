import '../pages/index.css';

const page = document.querySelector('.page')//нaходим класс page
const contents = Array.from(document.querySelectorAll(".content__container"));
const lineLeft = Array.from(document.querySelectorAll(".line_left"));
const lines = Array.from(document.querySelectorAll(".line"));
const contentBox = Array.from(document.querySelectorAll(".content__box"));
const titles = Array.from(document.querySelectorAll(".title"));
const subtitles = Array.from(document.querySelectorAll(".subtitle"));
const pic = Array.from(document.querySelectorAll(".content__pic"));
const fridge = document.querySelector(".lead__fridge");
const leadTitle = document.querySelector(".lead__title");
const logo = document.querySelector(".header__logo");
if (document.documentElement.clientWidth < 1100) {
    page.classList.add('small-pc');
}

if (document.documentElement.clientWidth < 992) {
    page.classList.add('tablet');
}


if (document.documentElement.clientWidth < 768) {
    page.classList.add('mobile');
    fridge.classList.add('lead__fridge_mobile');
    leadTitle.classList.add('lead__title_mobile');
    logo.classList.add('header__logo_mobile');
    contents.forEach((content) => {
        content.classList.add('content__container_mobile')
    });
    lineLeft.forEach((line) => {
        line.classList.add('line__left-mobile')
    });
    lines.forEach((line) => {
        line.classList.add('line_mobile')
    });
    contentBox.forEach((box) => {
        box.classList.add('content__box_mobile')
    });
    titles.forEach((title) => {
        title.classList.add('title_mobile')
    });
    subtitles.forEach((subtitle) => {
        subtitle.classList.add('subtitle_mobile')
    });
    pic.forEach((pic) => {
        pic.classList.add('content__pic_mobile')
    });
}
console.log(document.documentElement.clientWidth);

/*slider__box {
    width: 300px;*/