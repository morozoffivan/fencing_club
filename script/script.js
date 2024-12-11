document.addEventListener('DOMContentLoaded', () =>{
    const navBtn = document.querySelector('.navbar_button'),
          navbar = document.querySelector('.navbar'),
          tabContent = document.querySelectorAll('.tab_content'),
          tabNavParent = document.querySelector('.grid_main_item_2'),
          tabNav = tabNavParent.querySelectorAll('.tab_nav_item'),
          parentDescription = document.querySelector('.safety_container'),
          btnDescription = parentDescription.querySelectorAll('.btn_safety'),
          paragraphDescription = parentDescription.querySelectorAll('.safety_paragraph'),
          imgGallery = document.querySelectorAll('.flex_item_gallery'),
          imgNext = document.querySelector('.prev'),
          imgPrev = document.querySelector('.next');

    //navbar

    function hideNav(selector){
        selector.classList.toggle('hidden');
        selector.classList.add('flex_column');
    }

    function adaptive(){
        window.innerWidth < 1000 ? navbar.classList.toggle('hidden') : navBtn.classList.toggle('hidden') ;
    }

    adaptive();

    navBtn.addEventListener('click', () =>{
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

    //safety

    paragraphDescription.forEach(item =>{
        item.classList.add('hidden');
    })

    parentDescription.addEventListener('click', (e)=>{
        if(e.target && e.target.classList.contains('btn_safety')){
            btnDescription.forEach((item,i) =>{
                if(e.target == item) {
                    paragraphDescription[i].classList.toggle('hidden');
                }
            })
            
        }
    });
    //gallery

    let index = 1;
    
    imgGallery.forEach(item => {
        item.classList.add('hidden');
    });

    imgGallery[0].classList.add('show');
    imgGallery[0].classList.remove('hidden');

    function showImg(i){
        if(i > imgGallery.length){
            index = 1;
        }
        if(i < 1){
            index = imgGallery.length;
        }

        imgGallery.forEach(item => {
            item.classList.add('hidden');
        });
        imgGallery.forEach(item => {
            item.classList.remove('show');
        });
        
        imgGallery[index - 1].classList.remove('hidden');
        imgGallery[index - 1].classList.add('show');

    };

    function slider(i) {
        showImg(index += i)
    };

    imgNext.addEventListener('click', () =>{
        slider(1);
    });

    imgPrev.addEventListener('click', () =>{
        slider(-1);
    });


    //modal

    const btnModal = document.querySelectorAll('.modal-btn'),
          modal = document.querySelector('.modal'),
          modalClose = document.querySelector('.modal__close');

    btnModal.forEach(item =>{
        item.addEventListener('click', ()=>{
            modal.classList.toggle('hidden');
        })
    })

    modalClose.addEventListener('click', ()=>{
        modal.classList.toggle('hidden');

        
    })

});




