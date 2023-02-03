// Variables
const body = document.querySelector('.main-body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");
nav_link = body.querySelector("details");

// Header Dropdown Variables
my_drop = document.querySelector('.img-container')
img_content = document.querySelector('.img-content')

set_drop = document.querySelector('.settings-container')
set_content = document.querySelector('.settings-content')

// Preloader Variable
loader = document.querySelector('#preloader')

// CRUD link variables
crud_link = document.querySelector('.crud-link')
crud_content = document.querySelector('.crud-content')

refresh = document.querySelectorAll('.refresh')


// Crud Links

document.querySelector('.crud-link').addEventListener('click', () => {
  document.querySelector('.crud-content').classList.toggle('crudopen')
})





// preloader animation

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.style.display = 'none'
  }, 1000);
})

// Sidebar & body toggle

toggle.addEventListener("click" , (e) =>{
sidebar.classList.toggle("close");
// body.classList.toggle("bodytoggle")

})

// Header profile dropdown

my_drop.addEventListener('click', (event) => {
  img_content.classList.toggle("view")

  event.stopImmediatePropagation();

  body.addEventListener('click', () => {
    img_content.classList.remove('view')
  })

})

// Header Settings dropdown


// Tooltips

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
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

// jQuery(document).ready
// $(".item-container").click(function(){


//     $(this).children('.third-icon').toggleClass("rotate") ; 
//  })



//  icon rotate off on toggle


jQuery(document).ready(function($){
  $('summary').on('click', function(){

    var targeticon = $(this).attr('target-icon'); // Find the target icon 
    
    $(targeticon).toggleClass('rotate')
     // rotate all other icons

     $('.third-icon').not(targeticon).removeClass('rotate')

  });
   
});


// Toastify 

$('.refresh').on('click', function(){
  Toastify({
    text: "Refreshing :)",
    duration: 2000,
    destination: "",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(90deg, rgba(255,188,150,1) 10%, rgba(255,130,150,1) 100%)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
})