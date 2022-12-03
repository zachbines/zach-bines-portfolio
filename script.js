const scrollDownButton = document.querySelector('#scroll-down');

scrollDownButton.addEventListener('click', () => {
  const aboutSection = document.querySelector('#about').offsetTop;
  
  scroll({
    top: aboutSection,
    behavior: "smooth"
  });

})

const scrollUpButton = document.querySelector('#scroll-up');
scrollUpButton.addEventListener('click', () => {
  const top = document.querySelector('#top').offsetTop;

  scroll({
    top: top,
    behavior: "smooth"
  });
  
})

const hamburgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.link-list');
const body = document.querySelector('body');
function burgerDropDown() {
  if (!this.classList.contains('active')) {

    [this, nav].forEach((elem) => {
      elem.classList.add('active');
    })
    setTimeout(() => { nav.classList.add('blur')}, "100");
    body.classList.add('noscroll');

  } else {

    [this, nav].forEach((elem) => {
       setTimeout(() => { elem.classList.remove('active') }, "100");
    })
    nav.classList.remove('blur');
    body.classList.remove('noscroll');
  }
}

hamburgerMenu.addEventListener('click', burgerDropDown);



const navLinks = document.querySelectorAll('.link-list .nav-link');


function checkForMobile() {
  let win = window.innerWidth;
  if (win <= 575) {
    navLinks.forEach((link) => {
      link.addEventListener('click', revertNav);
    })
  } 
}

function revertNav() {
  [hamburgerMenu, nav].forEach((elem) => {
    setTimeout(() => {
      elem.classList.remove('active');  
    }, "500")

  })
  nav.classList.remove('blur');
  body.classList.remove('noscroll');
}

window.onresize = checkForMobile;
window.onload = checkForMobile;