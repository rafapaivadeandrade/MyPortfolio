window.addEventListener('load',start,false);
var menuButton;
var menu;
var menuNav;
var menuBranding;
var navItems;
//Set Initial State 
var showMenu = false;

function start(){
    //Select Items.
     menuButton = document.querySelector('.menu-btn');
     menu = document.querySelector('.menu');
     menuNav = document.querySelector('.menu-nav');
     menuBranding = document.querySelector('.menu-branding');
     navItems = document.querySelectorAll('.nav-item');
     menuButton.addEventListener('click',toggleMenu);
}


function toggleMenu(){
    if(!showMenu){
        menuButton.classList.add('close');  
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item=>
            item.classList.add('show'));
        
        //Set menu state
        showMenu = true;
    }
    
    else{
        menuButton.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item=>
            item.classList.remove('show'));

        //Set menu state 
        showMenu = false;
    
}
}