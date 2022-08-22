document.addEventListener("DOMContentLoaded", function(){

  // Меню бургер

let headerMenu = document.querySelector('.header-menu');
let menuBurger = document.querySelector('.menu-burger');
const pageWidth = document.documentElement.scrollWidth;

menuBurger.addEventListener('click', function(event){
  event.preventDefault();
  headerMenu.classList.toggle('open');
  
})

});
