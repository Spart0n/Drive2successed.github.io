//right and lefft menus 

Document.addEventListener('DOMContentLoaded', function() {
    // nav menu
    const menus = document.querySelectorAll('.side_menu');
    M.Sidenav.init(menus, {edge: 'left'});
    //add recipe form
    const forms = document.querySelectorAll('.side_form');
    M.Sidenav.init(forms, {edge: 'right'});
});
    
   