document.addEventListener('DOMContentLoaded', () =>{
    const nav_btn = document.querySelector('.navbar_button'),
          navbar = document.querySelector('.navbar'),
          tabContent = document.querySelectorAll('.tab_content'),
          tabNavParent = document.querySelector('.grid_main_item_2'),
          tabNav = tabNavParent.querySelectorAll('.tab_nav_item'),
          parentDescription = document.querySelector('.safety_container'),
          btnDescription = parentDescription.querySelectorAll('.btn_safety'),
          paragraphDescription = parentDescription.querySelectorAll('.safety_paragraph');

    //navbar

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


    //tabs

    hideTab();
    showTab();

    let counter = 1;
    
    const autoTab = setInterval(()=>{
        hideTab();
        showTab(counter);
        if(counter == tabContent.length - 1){
            counter = 0;
        } else {
            counter++;
        }
    }, 8000);
    

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
                    clearInterval(autoTab);         
                }
            })
        }
    })

    paragraphDescription.forEach(item =>{
        item.classList.add('hidden');
    })

    parentDescription.addEventListener('click', (e)=>{
        if(e.target && e.target.classList.contains('btn_safety')){
            console.log(123);
            
        }
    });
});

//safety