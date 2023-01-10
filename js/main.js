document.addEventListener("DOMContentLoaded", function(){

  // Меню бургер

let headerMenu = document.querySelector('.header-menu');
let menuBurger = document.querySelector('.menu-burger');
const pageWidth = document.documentElement.scrollWidth;

menuBurger.addEventListener('click', function(e){
  e.preventDefault();
  headerMenu.classList.toggle('open');
})


// Переключение языков

let langBox = document.querySelector('.header-top-lang')
let langItems = document.querySelectorAll('.header-top-lang__item')
console.log(langItems)

langBox.addEventListener('click', function(e) {
  e.preventDefault();
  let selected = e.target

  if (!selected.classList.contains('header-top-lang__item')) return

  let activeLang = selected
  langItems.forEach(item => item.classList.remove('active'))
  activeLang.classList.add('active')
})

});
