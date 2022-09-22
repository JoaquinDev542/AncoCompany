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

    // Scroll Reveal
    ScrollReveal({
        distance: '100px',
        duration: 1500,
        delay: 100
    })
    
    ScrollReveal().reveal('.fs-title');
    ScrollReveal().reveal('.heroContentContainer__btn');
    ScrollReveal().reveal('.scrollZone');
    ScrollReveal().reveal('.aboutGeneralContent__title', {origin: 'left'});
    ScrollReveal().reveal('.aboutContent__paragraph--SR-first' , {delay: '500'});
    ScrollReveal().reveal('.aboutContent__paragraph--SR-second');
    ScrollReveal().reveal('.aboutContent__paragraph--SR-third' , {delay: '1000'});
    ScrollReveal().reveal('.aboutContent__paragraph--SR-fourth');
    ScrollReveal().reveal('.informationContentFirst__paragraph--SR-first');
    ScrollReveal().reveal('.informationContentContainer--SR-first');
    ScrollReveal().reveal('.informationContentContainer--SR-second');
    ScrollReveal().reveal('.informationContentContainer--SR-third');
    ScrollReveal().reveal('.workLink', {origin: 'left'});
    ScrollReveal().reveal('.workProject--first' );
    ScrollReveal().reveal('.workProject--second');
    ScrollReveal().reveal('.workProject--third');
    ScrollReveal().reveal('.workProject--fourth');
    ScrollReveal().reveal('.workProject--fifth');
    ScrollReveal().reveal('.workProject--sixth');
    ScrollReveal().reveal('.quotesContainerTitles', {origin: 'left'});
    ScrollReveal().reveal('.quotesContainerBoxs');
    ScrollReveal().reveal('.quotesContainerArrows');
    ScrollReveal().reveal('.contact');

    // Menu Reponsive
    let menuopen = document.querySelector(".menuOpen")
    let menuclose = document.querySelector(".menuClose")
    let menuCloseAll = document.querySelector(".menuCloseAll");
    let list = document.querySelector(".list");
    let darkMode = document.querySelector(".darkMode");

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
        menuToggle.classList.remove('open');

    })

    aboutLink.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');
        list.classList.remove('active');
        darkMode.classList.remove('active');
        menuToggle.classList.remove('open');

    })

    contactLink.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');
        list.classList.remove('active');
        darkMode.classList.remove('active');
        menuToggle.classList.remove('open');

    })

    // Quotes Section

    let quotesContainerArrowsLeft = document.querySelector(".quotesContainerArrowsLeft");
    let quotesContainerArrowsRight = document.querySelector(".quotesContainerArrowsRight");
    let quotesContainerBoxFirst = document.querySelector(".quotesContainerBox--first");
    let quotesContainerBoxSecond = document.querySelector(".quotesContainerBox--second");
    let quotesContainerBoxThird = document.querySelector(".quotesContainerBox--third");
    let quotesContainerBoxFourth = document.querySelector(".quotesContainerBox--fourth");
    let quotesContainerBoxFifth = document.querySelector(".quotesContainerBox--fifth");

    setInterval(QuoteTransitionFirst, 5000);

    function QuoteTransitionFirst() {

        if ((getComputedStyle(quotesContainerBoxFirst).getPropertyValue("display")) == "block"){

            quotesContainerBoxFirst.style.display = "none";
            quotesContainerBoxSecond.style.display = "block";
 
        } else if (getComputedStyle(quotesContainerBoxSecond).getPropertyValue("display") == "block"){

            quotesContainerBoxSecond.style.display = "none";
            quotesContainerBoxThird.style.display = "block";

        } else if (getComputedStyle(quotesContainerBoxThird).getPropertyValue("display") == "block"){
    
            quotesContainerBoxThird.style.display = "none";
            quotesContainerBoxFourth.style.display = "block";

        } else if (getComputedStyle(quotesContainerBoxFourth).getPropertyValue("display") == "block"){
    
            quotesContainerBoxFourth.style.display = "none";
            quotesContainerBoxFifth.style.display = "block";

        } else if (getComputedStyle(quotesContainerBoxFifth).getPropertyValue("display") == "block"){

            quotesContainerBoxFifth.style.display = "none";
            quotesContainerBoxFirst.style.display = "block";

        }

    } 

    quotesContainerArrowsLeft.addEventListener('click', function () {  

        if ((getComputedStyle(quotesContainerBoxFirst).getPropertyValue("display")) == "block"){

            quotesContainerBoxFifth.style.display = "block";
            quotesContainerBoxFirst.style.display = "none";

        } else if (getComputedStyle(quotesContainerBoxFifth).getPropertyValue("display") == "block"){

            quotesContainerBoxFifth.style.display = "none";
            quotesContainerBoxFourth.style.display = "block";

        } else if (getComputedStyle(quotesContainerBoxFourth).getPropertyValue("display") == "block"){

            quotesContainerBoxFourth.style.display = "none";
            quotesContainerBoxThird.style.display = "block";

        } else if (getComputedStyle(quotesContainerBoxThird).getPropertyValue("display") == "block"){

            quotesContainerBoxThird.style.display = "none";
            quotesContainerBoxSecond.style.display = "block";

        } else if (getComputedStyle(quotesContainerBoxSecond).getPropertyValue("display") == "block"){

            quotesContainerBoxSecond.style.display = "none";
            quotesContainerBoxFirst.style.display = "block";

        }
    })

    quotesContainerArrowsRight.addEventListener('click', function () {  
        
        if ((getComputedStyle(quotesContainerBoxFirst).getPropertyValue("display")) == "block"){

            quotesContainerBoxFirst.style.display = "none";
            quotesContainerBoxSecond.style.display = "block";

        } else if (getComputedStyle(quotesContainerBoxSecond).getPropertyValue("display") == "block"){

            quotesContainerBoxSecond.style.display = "none";
            quotesContainerBoxThird.style.display = "block";

        } else if (getComputedStyle(quotesContainerBoxThird).getPropertyValue("display") == "block"){
    
            quotesContainerBoxThird.style.display = "none";
            quotesContainerBoxFourth.style.display = "block";

        } else if (getComputedStyle(quotesContainerBoxFourth).getPropertyValue("display") == "block"){
    
            quotesContainerBoxFourth.style.display = "none";
            quotesContainerBoxFifth.style.display = "block";

        } else if (getComputedStyle(quotesContainerBoxFifth).getPropertyValue("display") == "block"){

            quotesContainerBoxFifth.style.display = "none";
            quotesContainerBoxFirst.style.display = "block";

        }

    })
})
