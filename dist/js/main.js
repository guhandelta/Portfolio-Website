//Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
//Since there are more than one element, querySelector() can't be used, so querySelectorAll() will be used here, which will-
//-grab all the elements and populate them in a nodeList
const navItems = document.querySelectorAll('.nav-item');

//Set initial state of the menu => the overlay => create a var to say if the menu/overlay is open or closed
let showMenu = false;//let is used here as showMenu would be directly re-assigned, certain times => which can't be done with-
//-const, as const is for constants

//Creating an event listener for the button
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {//Checking is the toggleMenu is false (i.e.) Menu is closed/not open

        menuBtn.classList.add('close');//The menu button gets hidden, when the menu button is clicked
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        //Nav links are to be handled different here, since querySelectorAll is used here it selects all the elements
        //So teh show class should be added to each item by looping over/through all the elements/items
        navItems.forEach(item => item.classList.add('show'));
        //reset menu state
        showMenu = true;

    } else {
        //If the  menu button is clicked, when the menu is open, the menu should be hiddend(i.e.)the classes should be removed

        menuBtn.classList.remove('close');//The menu button gets hidden, when the menu button is clicked
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        //reset menu state
        showMenu = false;
        // menuBtn.classList.add('show');//The menu button gets hidden, when the menu button is clicked
        // menu.classList.add('close');
        // menuNav.classList.add('close');
        // menuBranding.classList.add('close');
        // navItems.forEach(item => item.classList.add('close'));
        // //reset menu state
        // showMenu = false;

    }
}
