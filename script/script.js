document.addEventListener('DOMContentLoaded', () =>{
    const nav_btn = document.querySelector('.navbar_button'),
          navbar = document.querySelector('.navbar');

    function hide(selector){
        selector.classList.toggle('hidden');
        selector.classList.add('flex_column');
    }

    function adaptive(){
        window.innerWidth < 1000 ? navbar.classList.toggle('hidden') : nav_btn.classList.toggle('hidden') ;
    }

    adaptive();

    nav_btn.addEventListener('click', () =>{
        hide(navbar)
    })
});