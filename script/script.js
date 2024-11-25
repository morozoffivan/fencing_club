document.addEventListener('DOMContentLoaded', () =>{
    const nav_btn = document.querySelector('.navbar_button'),
          navbar = document.querySelector('.navbar'),
          tabContent = document.querySelectorAll('.tab_content'),
          tabNavParent = document.querySelector('.grid_main_item_2'),
          tabNav = tabNavParent.querySelectorAll('.tab_nav_item');


    function hideNav(selector){
        selector.classList.toggle('hidden');
        selector.classList.add('flex_column');
    }

    function adaptive(){
        window.innerWidth < 1000 ? navbar.classList.toggle('hidden') : nav_btn.classList.toggle('hidden') ;
    }

    adaptive();

    nav_btn.addEventListener('click', () =>{
        hideNav(navbar)
    });

    hideTab();
    showTab();

    function hideTab(){
        tabContent.forEach(item => {
            item.classList.add('hidden'),
            item.classList.remove('show');
        })

        tabNav.forEach(item => {
            item.classList.remove('active');
        })
    }

    function showTab(i = 0){
        tabContent[i].classList.add('show');
        tabContent[i].classList.remove('hidden');
        tabNav[i].classList.add('active')
    }
    
    tabNavParent.addEventListener('click', (e) =>{
        if(e.target && e.target.classList.contains('tab_nav_item')) {
            tabNav.forEach((item, i) =>{
                if(item == e.target) {
                    hideTab();  
                    showTab(i);         
                }
            })
        }
    })
});