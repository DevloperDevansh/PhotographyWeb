let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.navbar');

menubar.onclick = () => {
    // Toggle the icon class
    menubar.classList.toggle('fa-times');
    
    // Toggle the navbar visibility
    mynav.classList.toggle('active');

}

