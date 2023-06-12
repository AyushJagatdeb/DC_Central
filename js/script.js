
// Toggle menu and navbar
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times'); // Toggle the fa-times class
    navbar.classList.toggle('active'); // "   " active class
}

window.onscroll = () =>{
    menu.classList.remove('fa-times'); // Remove the 'fa-times' class
    navbar.classList.remove('active'); // Remove the 'active' class
}


// Slideshow functionality
let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active'); // Remove the 'active' class from the current slide
    index = (index + 1) % slides.length; // Calculate the index of the next slide
    slides[index].classList.add('active'); // Add the 'active' class to the next slide
}

function prev(){
    slides[index].classList.remove('active'); // Remove the 'active' class from the current slide
    index = (index - 1  + slides.length) % slides.length; // Calculate the index of the previous slide
    slides[index].classList.add('active'); // Add the 'active' class to the previous slide
}


// Update big image based on thumbnail click
document.querySelectorAll('.featured-image-1').forEach(image_1  =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src; // Update the source of the big image
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2  =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src; // Update the source of the big image
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3  =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src; // Update the source of the big image
    });
});


window.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, window.innerHeight * 0.23); // Adjust the scroll position as needed
  });
  


