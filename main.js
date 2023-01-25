// Variables

const body = document.querySelector('.main-body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");
nav_link = body.querySelector("details");
my_drop = document.querySelector('.img-container')
img_content = document.querySelector('.img-content')
loader = document.querySelector('#preloader')


// preloader animation

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.display = 'none'
  }, 1000);
})

// Sidebar & body toggle

toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
body.classList.toggle("bodytoggle")

})

// Header profile dropdown

my_drop.addEventListener('click', (event) => {
  img_content.classList.toggle("view")
  
  event.stopImmediatePropagation();

  body.addEventListener('click', () => {
    img_content.classList.remove('view')
  })

})


// DARK MODE & LIGHT MODE TOGGLE

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
  modeText.innerText = "Light mode";

}else{
  modeText.innerText = "Dark mode";
  
}
});

63.00


// dropdown toggle auto close off

$('.item').on('click', function(event){
  event.stopPropagation();
});

$('.third-links').on('click', function(event){
  event.stopPropagation();
});

// ---------------------------



// Auto Closing Nested menu


jQuery(document).ready(function($){
  $('summary').on('click', function(){
    var targetBox = $(this).attr('target-box'); // Find the target box
    
    $('.box').not(targetBox).hide(300); // Hide all other boxes
    
    $(targetBox).toggle(300); // Toggle the current state of this one
  });
   
  $('.box').hide(200)

});



// icon rotate on Sidebar links

jQuery(document).ready
$(".item-container").click(function(){

    $(this).children('.third-icon').toggleClass("rotate") ; 
 })

