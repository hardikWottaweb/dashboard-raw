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

// refresh toastify

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
      background: 'rgb(243,82,90)',
      background: 'linear-gradient(90deg, rgba(243,82,90,1) 55%, rgba(242,207,207,1) 100%)'},
    onClick: function(){} // Callback after click
  }).showToast();
})


// search toastify

$('.search').on('click', function(){
  Toastify({
    text: "Searching :)",
    duration: 2000,
    destination: "",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: 'linear-gradient(90deg, rgb(139, 207, 202) 9%, rgba(0,172,146,1) 100%)'},
    onClick: function(){} // Callback after click
  }).showToast();
})

// Download toastify

$('.download').on('click', function(){
  Toastify({
    text: "Downloading :)",
    duration: 2000,
    destination: "",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: 'linear-gradient(90deg, rgb(155, 199, 235) 9%, rgba(34,143,229,1) 100%'},
    onClick: function(){} // Callback after click
  }).showToast();
})


// Send toastify

$('.send').on('click', function(){
  Toastify({
    text: "Sending :)",
    duration: 2000,
    destination: "",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: 'linear-gradient(90deg, rgba(161,190,230,1) 9%, rgb(203, 112, 245) 100%)'},
    onClick: function(){} // Callback after click
  }).showToast();
})



// toastify ends here

// All CDRs Table toggle

document.querySelector('.toggle-btn').addEventListener('click', () => {
  document.querySelector('.drop-container-body').classList.toggle('open')

  if(document.querySelector('.drop-container-body').classList.contains('open')){
    document.querySelector('.toggle-btn').innerHTML = '-'
    document.querySelector('.toggle-btn').style.transition = '0.3s ease'
  } else{
    document.querySelector('.toggle-btn').innerHTML = '+'
    document.querySelector('.toggle-btn').style.transition = '0.3s ease'
  }
})




// Date range picker

