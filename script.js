
//change background color
let content=document.querySelector('.content');
let img=document.querySelector('.main-img');

function changeColor(color){
content.style.backgroundColor=color;
}

//change image
function changeImg(imgSrc){
img.src=imgSrc;
}

// open menu in small screen
const menuBtn = document.querySelector('.menu');
const navUl = document.querySelector('header nav ul');


menuBtn.addEventListener('click', () => {
    // تبديل كلاس active لإظهار وإخفاء القائمة
    navUl.classList.toggle('active');
    
    // تبديل كلاس open لتبديل الأشكال بين البار والـ X
    menuBtn.classList.toggle('open');
});