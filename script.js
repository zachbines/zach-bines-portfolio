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
