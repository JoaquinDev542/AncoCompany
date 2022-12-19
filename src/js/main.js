// Loader
window.addEventListener('load',function () {

    setTimeout(() => {
        console.log("Ejecutar cada 1 seg")
      }, 1000);
    
    // Loader
    window.addEventListener("blur", () => {
        document.title = "AncoCompany® | Diseño y desarrollo Web";
    });

    // Cuando el enfoque del usuario vuelve a tu pestaña (sitio web) nuevamente
    window.addEventListener("focus", () => {
        document.title = "AncoCompany®";
    });

    // Loading 
    let main = document.querySelector('main')
    
    main.classList.add("hide");
    document.querySelector(".loaderContainer").classList.add("active");
    main.classList.remove("hide");

    // Scroll Reveal
    ScrollReveal({
        distance: '50px',
        duration: 1000
    })
 
    ScrollReveal().reveal('.header', {origin: 'top'});
    ScrollReveal().reveal('.herotitle', {origin: 'left'});
    ScrollReveal().reveal('.heroContentContainer__btn--SR', {delay: 500});
    ScrollReveal().reveal('.heroContentContainer__btn--ST', {origin: 'right'});
    ScrollReveal().reveal('.wave', {origin: 'bottom'});
    ScrollReveal().reveal('.aboutContentContainer__paragraph--SR-first', {origin: 'left'});
    ScrollReveal().reveal('.aboutContentContainer__paragraph--SR-second', {origin: 'left'});
    ScrollReveal().reveal('.aboutContentContainer__paragraph--SR-third', {origin: 'left'});
    ScrollReveal().reveal('.aboutContentContainer__paragraph--SR-fourth', {origin: 'left'});
    ScrollReveal().reveal('.informationContentContainer--SR-first',);
    ScrollReveal().reveal('.informationContentContainer--SR-second', {delay: 200});
    ScrollReveal().reveal('.informationContentContainer--SR-third' , {delay: 400});
    ScrollReveal().reveal('.workProject--first' );
    ScrollReveal().reveal('.workProject--second');
    ScrollReveal().reveal('.workProject--third');
    ScrollReveal().reveal('.workProject--fourth');
    ScrollReveal().reveal('.workProject--fifth');
    ScrollReveal().reveal('.workProject--sixth');
    ScrollReveal().reveal('.formContainer');
    ScrollReveal().reveal('.aside');

    // Arrow Section
    arrow = document.getElementById("arr")

    window.onscroll = function(){
        add_btn_scrolltop()
        //add btn on scroll
    }
    
    const add_btn_scrolltop = function(){
        // console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop >= 200){
            arrow.classList.add('active');
        } else {
            arrow.classList.remove('active'); 
        }    
    }

    // ProgressBar Section
    let progressBar__element = document.querySelector(".progressBar__element");

    function scrollProgressBar() {

        let scrollTop = document.documentElement.scrollTop; // valor de lo que scroleamos
        let scrollHeight = document.documentElement.scrollHeight; // height total de la pagina
        let clientHeight = document.documentElement.clientHeight; // valor que vemos en el momento

        let windowHeight = scrollHeight - clientHeight;
        let percentage = scrollTop / windowHeight * 100;

        progressBar__element.style.width = percentage + "%";
   }
   window.addEventListener('scroll' , scrollProgressBar);

    
   // Idioms Active
   let idiomsContainerDisplay = document.querySelector(".idiomsContainerDisplay");
   let idioms = document.querySelector(".idioms");


    idioms.addEventListener("click" , function ( ) {
        idiomsContainerDisplay.classList.toggle("active");
    })
  
    // BackgroundColor Submenu Section Change
    let submenu = document.querySelector(".submenu");
    let darkModeContainer__span = document.querySelector(".darkModeContainer__span");
    let idioms__titlePrincipal = document.querySelector(".idioms__title--principal");
    let idiomsContainerInitial__arrow = document.querySelector(".idiomsContainerInitial__arrow");
    let contactInformationSocialMedia__imgSubmenu = document.querySelector(".contactInformationSocialMedia__img--submenu");
    let contactInformationSocialMedia__imgSubmenuMobile = document.querySelector(".contactInformationSocialMedia__img--submenu-mobile");

    const functionChangeBgSubmenu = function () {
        
        if(document.documentElement.scrollTop >= 10) {
            submenu.classList.add("addColor");
            darkModeContainer__span.classList.add("addColor");
            idioms__titlePrincipal.classList.add("addColor");
            idiomsContainerInitial__arrow.classList.add("addColor");
            contactInformationSocialMedia__imgSubmenu.classList.add("addColor");
            contactInformationSocialMedia__imgSubmenuMobile.classList.add("addColor");

        } else {
            submenu.classList.remove("addColor");
            darkModeContainer__span.classList.remove("addColor");
            idioms__titlePrincipal.classList.remove("addColor");
            idiomsContainerInitial__arrow.classList.remove("addColor");
            contactInformationSocialMedia__imgSubmenu.classList.remove("addColor");
            contactInformationSocialMedia__imgSubmenuMobile.classList.remove("addColor");
        }
    }
    window.addEventListener("scroll" , functionChangeBgSubmenu); 


    // BackgroundColor Header Section Change
    let header = document.querySelector(".header");
    let navList__link_about = document.querySelector(".navList__link--about");
    let navList__link_steps = document.querySelector(".navList__link--steps");
    let navList__link_services = document.querySelector(".navList__link--services");
    let navList__link_work = document.querySelector(".navList__link--work");
    let navList__link_contact = document.querySelector(".navList__link--contact");
    let hamburger = document.querySelector(".hamburger");
    let header__logoTitle = document.querySelector(".header__logoTitle");

    const functionChangeBgHeader = function () {

        if(document.documentElement.scrollTop >= 10){
            header.classList.add("addColor");
            hamburger.classList.add("addColor");
            navList__link_about.classList.add("addColor");
            navList__link_steps.classList.add("addColor");
            navList__link_services.classList.add("addColor");
            navList__link_work.classList.add("addColor");
            navList__link_contact.classList.add("addColor");
            header__logoTitle.classList.add("addColor");

        } else {
            header.classList.remove("addColor");
            hamburger.classList.remove("addColor");
            navList__link_about.classList.remove("addColor");
            navList__link_steps.classList.remove("addColor");
            navList__link_services.classList.remove("addColor");
            navList__link_work.classList.remove("addColor");
            navList__link_contact.classList.remove("addColor");
            header__logoTitle.classList.remove("addColor");

        }  
        
    }
    window.addEventListener("scroll" , functionChangeBgHeader); 

    let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    const setColorScheme = e => {

        if (e.matches) {

            //Switch Light Mode
            let darkMode__input = document.querySelector(".darkMode__input");
            let darkMode__inputMenu = document.querySelector(".darkMode__input--menu");
            let darkModeContainer__span = document.querySelector(".darkModeContainer__span");
            darkModeContainer__span.innerHTML = "Modo Oscuro";
            
            darkMode__input.addEventListener('click', function () {
    
            document.documentElement.classList.toggle("white-mode");
            
            }) 

            darkMode__inputMenu.addEventListener('click', function () {
    
                document.documentElement.classList.toggle("white-mode");
                
            }) 

        } else {

            //Switch Dark Mode
            let darkMode__input = document.querySelector(".darkMode__input");
            let darkMode__inputMenu = document.querySelector(".darkMode__input--menu");
            let darkModeContainer__span = document.querySelector(".darkModeContainer__span");
            darkModeContainer__span.innerHTML = "Modo Claro";

            darkMode__input.addEventListener('click', function () {
    
            document.documentElement.classList.toggle("dark-mode");
            
            })

            darkMode__inputMenu.addEventListener('click', function () {
    
                document.documentElement.classList.toggle("dark-mode");
                
            })
        
        }
      }

      setColorScheme(colorSchemeQueryList);
      colorSchemeQueryList.addEventListener('change', setColorScheme);

      let darkMode__input = document.querySelector(".darkMode__input");

      darkMode__input.addEventListener('click', function () {
  
          let darkModeContainer__span = document.querySelector(".darkModeContainer__span");
  
          console.log(darkModeContainer__span.innerHTML);
  
          if (darkModeContainer__span.innerHTML == "Modo Oscuro") {
            darkModeContainer__span.innerHTML = "Modo Claro"
          } else {
            darkModeContainer__span.innerHTML = "Modo Oscuro";
          }
  
      })


    // Menu Reponsive
    let menuopen = document.querySelector(".hamburger")
    let menuclose = document.querySelector(".menuClose")
    let menuCloseAll = document.querySelector(".menuCloseAll");
    let header__logo = document.querySelector(".header__logo");
    let nav = document.querySelector(".nav");
    let heroContent = document.querySelector(".heroContent");
    let menuCloseContainerRightHeader__link = document.querySelector(".menuCloseContainerRightHeader__link");
    let close = document.querySelector(".close");
    let menuCloseContainerRightList__item__aboutUs = document.querySelector(".menuCloseContainerRightList__item--aboutUs");
    let menuCloseContainerRightList__item__steps = document.querySelector(".menuCloseContainerRightList__item--steps");
    let menuCloseContainerRightList__item__services = document.querySelector(".menuCloseContainerRightList__item--services");
    let menuCloseContainerRightList__item__work = document.querySelector(".menuCloseContainerRightList__item--work");
    let menuCloseContainerRightList__item__contact = document.querySelector(".menuCloseContainerRightList__item--contact");
    let menuCloseContainerRightFooter__darkMode = document.querySelector(".menuCloseContainerRightFooter__darkMode");
    let menuCloseContainerRightFooter = document.querySelector(".menuCloseContainerRightFooter" , "::after");
    let menuCloseContainerRightHeader = document.querySelector(".menuCloseContainerRightHeader" , "::after");

    menuopen.addEventListener('click', function () {
        menuclose.classList.toggle('active');
        progressBar__element.style.setProperty("display" , "none");
        menuCloseAll.classList.toggle('active');
        submenu.classList.add('active');
        header.classList.add('active');
        header__logo.classList.add("active");
        nav.classList.add("active");
        hamburger.classList.add("active");
        heroContent.classList.add("active");
        menuCloseContainerRightHeader__link.classList.add("active");
        close.classList.add("active");
        menuCloseContainerRightList__item__aboutUs.classList.add("active");
        menuCloseContainerRightList__item__steps.classList.add("active");
        menuCloseContainerRightList__item__services.classList.add("active");
        menuCloseContainerRightList__item__work.classList.add("active");
        menuCloseContainerRightList__item__contact.classList.add("active");
        menuCloseContainerRightFooter__darkMode.classList.add("active");
        menuCloseContainerRightFooter.classList.add("active");
        menuCloseContainerRightHeader.classList.add("active");
        header__logoTitle.classList.add("active");

    })

    close.addEventListener("click" , function () {
        setTimeout(() => {
            menuclose.classList.remove("active");
            heroContent.classList.remove("active");
            hamburger.classList.remove("active");
            nav.classList.remove("active");
            header__logo.classList.remove("active");
            header__logoTitle.classList.remove("active");
            menuCloseAll.classList.remove('active');
            progressBar__element.style.setProperty("display" , "block");
            submenu.classList.remove('active');
            header.classList.remove('active');
        }, 2250);
        menuCloseContainerRightHeader__link.classList.remove("active");
        close.classList.remove("active");
        menuCloseContainerRightList__item__aboutUs.classList.remove("active");
        menuCloseContainerRightList__item__steps.classList.remove("active");
        menuCloseContainerRightList__item__services.classList.remove("active");
        menuCloseContainerRightList__item__work.classList.remove("active");
        menuCloseContainerRightList__item__contact.classList.remove("active");
        menuCloseContainerRightFooter__darkMode.classList.remove("active");
        menuCloseContainerRightFooter.classList.remove("active");
        menuCloseContainerRightHeader.classList.remove("active");

    })

    // Menu Responsive Links
    let menuCloseContainerRightList__link_aboutUs = document.querySelector(".menuCloseContainerRightList__link--aboutUs");
    let menuCloseContainerRightList__link_steps = document.querySelector(".menuCloseContainerRightList__link--steps");
    let menuCloseContainerRightList__link_services = document.querySelector(".menuCloseContainerRightList__link--services");
    let menuCloseContainerRightList__link_work = document.querySelector(".menuCloseContainerRightList__link--work");
    let menuCloseContainerRightList__link_contact = document.querySelector(".menuCloseContainerRightList__link--contact");

    menuCloseContainerRightList__link_aboutUs.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');
        submenu.classList.remove('active');
        header.classList.remove('active');
        header__logo.classList.remove("active");
        nav.classList.remove("active");
        heroContent.classList.remove("active");
        header__logoTitle.classList.remove("active");
    })

    menuCloseContainerRightList__link_steps.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');
        submenu.classList.remove('active');
        header.classList.remove('active');
        header__logo.classList.remove("active");
        nav.classList.remove("active");
        heroContent.classList.remove("active");
        header__logoTitle.classList.remove("active");
    })

    menuCloseContainerRightList__link_services.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');
        submenu.classList.remove('active');
        header.classList.remove('active');
        header__logo.classList.remove("active");
        nav.classList.remove("active");
        heroContent.classList.remove("active");
        header__logoTitle.classList.remove("active");
    })

    menuCloseContainerRightList__link_work.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');
        submenu.classList.remove('active');
        header.classList.remove('active');
        header__logo.classList.remove("active");
        nav.classList.remove("active");
        heroContent.classList.remove("active");
        header__logoTitle.classList.remove("active");
    })

    menuCloseContainerRightList__link_contact.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');
        submenu.classList.remove('active');
        header.classList.remove('active');
        header__logo.classList.remove("active");
        nav.classList.remove("active");
        heroContent.classList.remove("active");
        header__logoTitle.classList.remove("active");
    })


    // Menu Img hover 
    // let menuCloseContainerLeft__img = document.querySelector(".menuCloseContainerLeft__img");

    // menuCloseContainerRightList__link_aboutUs.addEventListener("mouseover" , function() {
    //     menuCloseContainerLeft__img.classList.add("active");    
    // })
    

    // Btn Section Animation Javascript
    let animateButton = function(e) {

        e.preventDefault;
        //reset animation
        e.target.classList.remove('animate');
        
        e.target.classList.add('animate');
        setTimeout(function(){
          e.target.classList.remove('animate');
        },700);
        };
        
        let heroContentContainerBtn = document.getElementsByClassName("heroContentContainer__btn");
        let heroContentContainer__btnColor = document.getElementsByClassName("heroContentContainer__btn--color");
        
        for (let i = 0; i < heroContentContainerBtn.length; i++) {
            heroContentContainerBtn[i].addEventListener('mouseover', animateButton, false);
        }

        for (let i = 0; i < heroContentContainer__btnColor.length; i++) {
            heroContentContainer__btnColor[i].addEventListener('mouseover', animateButton, false);
        }


    // Btn Form Section
    let formBtn = document.querySelector(".formBtn");

    formBtn.addEventListener("click" , ()=> {
        formBtn.textContent = "Thanks for your message";
    });

    // Show Paragraph Aside Section Get Discount
    let aside__title = document.querySelector(".aside__title");
    let asideBtn = document.querySelector(".aside__btn");
    let aside__paragraphOpacity = this.document.querySelector(".aside__paragraph--opacity");

    asideBtn.addEventListener("click" , ()=> {
        aside__paragraphOpacity.classList.add("active");
        asideBtn.classList.add("hidden");
        aside__title.classList.add("active");
    });

})

