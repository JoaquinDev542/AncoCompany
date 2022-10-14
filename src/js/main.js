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
        distance: '50px',
        duration: 1000,
        delay: 50
    })

    ScrollReveal().reveal('.header', {origin: 'top'});
    ScrollReveal().reveal('.herotitle' , {origin: 'left'});
    ScrollReveal().reveal('.heroContentContainer__btn');
    ScrollReveal().reveal('.wave');
    ScrollReveal().reveal('.aboutContentContainerparagraph--SR-first', {origin: 'left'});
    ScrollReveal().reveal('.aboutContentContainerparagraph--SR-second', {origin: 'left'});
    ScrollReveal().reveal('.aboutContentContainerparagraph--SR-third', {origin: 'left'});
    ScrollReveal().reveal('.aboutContentContainer__paragraph--SR-fourth', {origin: 'left'});
    ScrollReveal().reveal('.informationContentContainer--SR-first' , {delay: 200});
    ScrollReveal().reveal('.informationContentContainer--SR-second' , {delay: 400});
    ScrollReveal().reveal('.informationContentContainer--SR-third' , {delay: 600});
    ScrollReveal().reveal('.workProject--first' );
    ScrollReveal().reveal('.workProject--second');
    ScrollReveal().reveal('.workProject--third');
    ScrollReveal().reveal('.workProject--fourth');
    ScrollReveal().reveal('.workProject--fifth');
    ScrollReveal().reveal('.workProject--sixth');

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

    function myFunction(x) {
        if (x.matches) { // If media query matches
            menuCloseAll.classList.remove('active');
        } else {
            menuCloseAll.classList.add('active');
        }
      }

      var x = window.matchMedia("(max-width: 1024px)")
      myFunction(x) // Call listener function at run time
      x.addEventListener(myFunction) // Attach listener function on state changes

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
        
        for (let i = 0; i < heroContentContainerBtn.length; i++) {
            heroContentContainerBtn[i].addEventListener('mouseover', animateButton, false);
        }

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
