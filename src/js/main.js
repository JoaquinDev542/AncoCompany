// Loader
window.addEventListener('load',function () {  

    // Loading 
    let main = document.querySelector('main')

    main.classList.add("hide");

    const myTimeout = setTimeout(myGreeting, 2000);

    function myGreeting() {
        document.querySelector(".loaderContainer").classList.add("active");
        main.classList.remove("hide");
    }

    // Menu Reponsive
    let menuopen = document.querySelector(".menuOpen")
    let menuclose = document.querySelector(".menuClose")
    let menuCloseX = document.querySelector(".menuCloseX");
    let menuCloseAll = document.querySelector(".menuCloseAll");

    menuopen.addEventListener('click', function () {

        menuclose.classList.add('active');
        menuopen.classList.add('active');
        menuCloseAll.classList.add('active');

    })

    menuCloseX.addEventListener('click', function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');

    })

    // Menu Responsive Links
    let workLink = document.querySelector("#workLink");
    let aboutLink = document.querySelector("#aboutLink");
    let contactLink = document.querySelector("#contactLink");

    workLink.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');

    })

    aboutLink.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');
        
    })

    contactLink.addEventListener('click' , function () {

        menuclose.classList.remove('active');
        menuopen.classList.remove("active");
        menuCloseAll.classList.remove('active');
        
    })

})

