// Loader
window.addEventListener('load',function () {

    // Loading 
    let main = document.querySelector('main')

    main.classList.add("hide");

    const myTimeout = setTimeout(myGreeting, 1000);

    function myGreeting() {

        document.querySelector(".loaderContainer").classList.add("active");
        main.classList.remove("hide");
    
    } 

    // Menu Reponsive
    let menuopen = document.querySelector(".menuOpen")
    let menuclose = document.querySelector(".menuClose")
    let menuCloseAll = document.querySelector(".menuCloseAll");
    let list = document.querySelector(".list");
    let menuToggle = document.querySelector(".menu-toggle");
    let menuLinkFirst = document.querySelector(".list__link--first");
    let menuLinkSecond = document.querySelector(".list__link--second");
    let menuLinkThird = document.querySelector(".list__link--third");


    menuopen.addEventListener('click', function () {

        menuclose.classList.toggle('active');
        menuopen.classList.toggle('active');
        menuCloseAll.classList.toggle('active');
        list.classList.toggle('active');
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
        menuToggle.classList.remove('open');

    })

    aboutLink.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');
        list.classList.remove('active');
        menuToggle.classList.remove('open');

    })

    contactLink.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');
        list.classList.remove('active');
        menuToggle.classList.remove('open');

    })

    // Quotes Section

    let quotesContainerArrowsLeft = document.getElementById("quotesContainerArrowsLeft");
    let quotesContainerArrowsRight = document.getElementById("quotesContainerArrowsRight");
    let quotesContainerBoxFirst = document.querySelector(".quotesContainerBox--first");
    let quotesContainerBoxSecond = document.querySelector(".quotesContainerBox--second");
    let quotesContainerBoxThird = document.querySelector(".quotesContainerBox--third");
    let quotesContainerBoxFourth = document.querySelector(".quotesContainerBox--fourth");
    let quotesContainerBoxFifth = document.querySelector(".quotesContainerBox--fifth");

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
            // console.log(getComputedStyle(quotesContainerBoxFirst).getPropertyValue("display"));

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

