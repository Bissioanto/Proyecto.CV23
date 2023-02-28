// MENU LATERAL
var menu_visible = false
let menu = document.getElementById("nav");
function mostrarOcultarmenu(){
if(menu_visible==false){ //si esta oculto
    menu.style.display = "block";
    menu_visible = true
}
else{
    menu.style.display = "none";
    menu_visible = false
}
}