// Loader
window.addEventListener('load',function () {

    
    // Loading 
    let main = document.querySelector('main')
    
    main.classList.add("hide");
    
    // setTimeout(myGreeting, 2000);
    
    // function myGreeting() {
        
        document.querySelector(".loaderContainer").classList.add("active");
        main.classList.remove("hide");
        
    // } 

    // Arrow Section
    arrow = document.getElementById("arr")

    window.onscroll = function(){
        add_btn_scrolltop()
        //add btn on scroll
    }

    const add_btn_scrolltop = function(){
        console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop >= 200){
            arrow.classList.add('active');
        } else {
            arrow.classList.remove('active'); 
        }    
    }

    // Scroll Reveal
    ScrollReveal({
        distance: '100px',
        duration: 1500,
        delay: 100
    })
    
    ScrollReveal().reveal('.header', {origin: 'top'});
    ScrollReveal().reveal('.herotitle' , {origin: 'left'});
    ScrollReveal().reveal('.heroContentContainer__btn');
    ScrollReveal().reveal('.wave');
    ScrollReveal().reveal('.aboutContentContainer__paragraph--SR-first', {origin: 'left'});
    ScrollReveal().reveal('.aboutContentContainer__paragraph--SR-second', {origin: 'left'});
    ScrollReveal().reveal('.aboutContentContainer__paragraph--SR-third', {origin: 'left'});
    ScrollReveal().reveal('.aboutContentContainer__paragraph--SR-fourth', {origin: 'left'});
    ScrollReveal().reveal('.informationContentContainer--SR-first' , {delay: 200});
    ScrollReveal().reveal('.informationContentContainer--SR-second' , {delay: 400});
    ScrollReveal().reveal('.informationContentContainer--SR-third' , {delay: 600});
    ScrollReveal().reveal('.workProject--first' , {delay: 200});
    ScrollReveal().reveal('.workProject--second', {delay: 400});
    ScrollReveal().reveal('.workProject--third', {delay: 600});
    ScrollReveal().reveal('.workProject--fourth', {delay: 200});
    ScrollReveal().reveal('.workProject--fifth', {delay: 400});
    ScrollReveal().reveal('.workProject--sixth', {delay: 600});

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

    // Quotes Section

    // let quotesContainerArrowsLeft = document.querySelector(".quotesContainerArrowsLeft");
    // let quotesContainerArrowsRight = document.querySelector(".quotesContainerArrowsRight");
    // let quotesContainerBoxFirst = document.querySelector(".quotesContainerBox--first");
    // let quotesContainerBoxSecond = document.querySelector(".quotesContainerBox--second");
    // let quotesContainerBoxThird = document.querySelector(".quotesContainerBox--third");
    // let quotesContainerBoxFourth = document.querySelector(".quotesContainerBox--fourth");
    // let quotesContainerBoxFifth = document.querySelector(".quotesContainerBox--fifth");

    // setInterval(QuoteTransitionFirst, 5000);

    // function QuoteTransitionFirst() {

    //     if ((getComputedStyle(quotesContainerBoxFirst).getPropertyValue("display")) == "block"){

    //         quotesContainerBoxFirst.style.display = "none";
    //         quotesContainerBoxSecond.style.display = "block";
 
    //     } else if (getComputedStyle(quotesContainerBoxSecond).getPropertyValue("display") == "block"){

    //         quotesContainerBoxSecond.style.display = "none";
    //         quotesContainerBoxThird.style.display = "block";

    //     } else if (getComputedStyle(quotesContainerBoxThird).getPropertyValue("display") == "block"){
    
    //         quotesContainerBoxThird.style.display = "none";
    //         quotesContainerBoxFourth.style.display = "block";

    //     } else if (getComputedStyle(quotesContainerBoxFourth).getPropertyValue("display") == "block"){
    
    //         quotesContainerBoxFourth.style.display = "none";
    //         quotesContainerBoxFifth.style.display = "block";

    //     } else if (getComputedStyle(quotesContainerBoxFifth).getPropertyValue("display") == "block"){

    //         quotesContainerBoxFifth.style.display = "none";
    //         quotesContainerBoxFirst.style.display = "block";

    //     }

    // } 

    // quotesContainerArrowsLeft.addEventListener('click', function () {  

    //     if ((getComputedStyle(quotesContainerBoxFirst).getPropertyValue("display")) == "block"){

    //         quotesContainerBoxFifth.style.display = "block";
    //         quotesContainerBoxFirst.style.display = "none";

    //     } else if (getComputedStyle(quotesContainerBoxFifth).getPropertyValue("display") == "block"){

    //         quotesContainerBoxFifth.style.display = "none";
    //         quotesContainerBoxFourth.style.display = "block";

    //     } else if (getComputedStyle(quotesContainerBoxFourth).getPropertyValue("display") == "block"){

    //         quotesContainerBoxFourth.style.display = "none";
    //         quotesContainerBoxThird.style.display = "block";

    //     } else if (getComputedStyle(quotesContainerBoxThird).getPropertyValue("display") == "block"){

    //         quotesContainerBoxThird.style.display = "none";
    //         quotesContainerBoxSecond.style.display = "block";

    //     } else if (getComputedStyle(quotesContainerBoxSecond).getPropertyValue("display") == "block"){

    //         quotesContainerBoxSecond.style.display = "none";
    //         quotesContainerBoxFirst.style.display = "block";

    //     }
    // })

    // quotesContainerArrowsRight.addEventListener('click', function () {  
        
    //     if ((getComputedStyle(quotesContainerBoxFirst).getPropertyValue("display")) == "block"){

    //         quotesContainerBoxFirst.style.display = "none";
    //         quotesContainerBoxSecond.style.display = "block";

    //     } else if (getComputedStyle(quotesContainerBoxSecond).getPropertyValue("display") == "block"){

    //         quotesContainerBoxSecond.style.display = "none";
    //         quotesContainerBoxThird.style.display = "block";

    //     } else if (getComputedStyle(quotesContainerBoxThird).getPropertyValue("display") == "block"){
    
    //         quotesContainerBoxThird.style.display = "none";
    //         quotesContainerBoxFourth.style.display = "block";

    //     } else if (getComputedStyle(quotesContainerBoxFourth).getPropertyValue("display") == "block"){
    
    //         quotesContainerBoxFourth.style.display = "none";
    //         quotesContainerBoxFifth.style.display = "block";

    //     } else if (getComputedStyle(quotesContainerBoxFifth).getPropertyValue("display") == "block"){

    //         quotesContainerBoxFifth.style.display = "none";
    //         quotesContainerBoxFirst.style.display = "block";

    //     }

    // })


    
    // let body = document.body;
    // console.log (dark);

    // darkMode.addEventListener('click', function () {

    //     let dark = window.matchMedia("(prefers-color-scheme: dark)");

    //     console.log (dark);

    //     if(dark.matches) {
    //         body.setAttribute('data-theme', 'red');
    //     } else {
    //         alert('cambio a dark');
    //     }
    // })
    
})
