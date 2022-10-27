// Loader
window.addEventListener('load',function () {
    
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
    let progressBar = document.querySelector(".progressBar");

    function scrollProgressBar() {

        let scrollTop = document.documentElement.scrollTop; // valor de lo que scroleamos
        let scrollHeight = document.documentElement.scrollHeight; // height total de la pagina
        let clientHeight = document.documentElement.clientHeight; // valor que vemos en el momento

        let windowHeight = scrollHeight - clientHeight;
        let percentage = scrollTop / windowHeight * 100;

        progressBar.style.width = percentage + "%";
   }
   window.addEventListener('scroll' , scrollProgressBar);


    //White & Dark Mode
    let darkMode__input = document.querySelector(".darkMode__input");
     darkMode__input.addEventListener('click', function () {
 
        document.documentElement.classList.toggle("white-mode");
         
    }) 

    // Menu Reponsive
    let menuopen = document.querySelector(".menuOpen")
    let menuclose = document.querySelector(".menuClose")
    let menuCloseAll = document.querySelector(".menuCloseAll");
    let list = document.querySelector(".list");
    let darkMode = document.querySelector(".darkMode");
    let languages = document.querySelector(".languages");
    let menuToggle = document.querySelector(".menu-toggle");
    let menuLinkFirst = document.querySelector(".list__link--first");
    let menuLinkSecond = document.querySelector(".list__link--second");
    let menuLinkThird = document.querySelector(".list__link--third");


    menuopen.addEventListener('click', function () {

        menuclose.classList.toggle('active');
        menuopen.classList.toggle('active');
        menuCloseAll.classList.toggle('active');
        list.classList.toggle('active');
        darkMode.classList.toggle('active');
        languages.classList.toggle('active');
        menuToggle.classList.toggle('open');
        menuLinkFirst.classList.toggle('active');
        menuLinkSecond.classList.toggle('active');
        menuLinkThird.classList.toggle('active');

    })

    // Menu Responsive Links
    let workLink = document.querySelector("#workLink");
    let aboutLink = document.querySelector("#aboutLink");
    let contactLink = document.querySelector("#contactLink");

    workLink.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');
        list.classList.remove('active');
        darkMode.classList.remove('active');
        languages.classList.remove('active');
        menuToggle.classList.remove('open');

    })

    aboutLink.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');
        list.classList.remove('active');
        darkMode.classList.remove('active');
        languages.classList.remove('active');
        menuToggle.classList.remove('open');

    })

    contactLink.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');
        list.classList.remove('active');
        darkMode.classList.remove('active');
        languages.classList.remove('active');
        menuToggle.classList.remove('open');

    })

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

