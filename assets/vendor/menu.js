const open_menu = document.getElementById("open_menu");
const close_menu = document.getElementById("close_menu");
const menu_hamburger = document.getElementById("menu")


window.addEventListener('click', function(e) {
    
    if(open_menu.contains(e.target)) {
        menu_hamburger.style.display = "flex";

    } else if(close_menu.contains(e.target)){
        menu_hamburger.style.display = "none";
   
    } 

})
