//this section is for the search bar in the headerbar for mobile view
const searchIcon1 = document.querySelector('#searchicon1');
const srchIcon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');

searchIcon1.addEventListener('click', function() {
    search1.style.display = 'flex';
    searchIcon1.style.display = 'none';
});
//this section is for the search bar in the headerbar for desktop view
const searchIcon2 = document.querySelector('#searchicon2');
const srchIcon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');


searchIcon2.addEventListener('click', function() {
    search2.style.display = 'flex';
    searchIcon2.style.display = 'none';
});
const home = document.querySelector('.home');
home.addEventListener('click', function() {
    search2.style.display = 'none';
    searchIcon2.style.display = 'block';
});
// const menu = document.querySelector('.menu');
// menu.addEventListener('click', function() {
//     search2.style.display = 'none';
//     searchIcon2.style.display = 'block';
// });


//this section is for the list and close button in the headerbar for mobile view
const bar = document.querySelector('.fa-bars');
const close = document.querySelector('#hdcross');
const headerBar = document.querySelector('.headerbar');
const rotation = document.querySelector('.rotation');
const mainSlide3 = document.querySelector('.main-slide3');


bar.addEventListener('click', function() {
    setTimeout(() =>{
    close.style.display = 'block';
    rotation.style.display = 'none';
    }, 200);
    headerBar.style.right = '0%';
    mainSlide3.style.paddingTop = '150px';
    
});
close.addEventListener('click', function() {
    headerBar.style.right = '-100%';
    setTimeout(() =>{
        close.style.display = 'none';
        mainSlide3.style.paddingTop = '0px';
    }, 200);
    search1.style.display = 'none';
    searchIcon1.style.display = 'block';
    rotation.style.display = 'block';
    


});
