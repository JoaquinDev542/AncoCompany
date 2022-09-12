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
    let menuCloseAll = document.querySelector(".menuCloseAll");
    let list = document.querySelector(".list");
    let menuToggle = document.querySelector(".menu-toggle");


    menuopen.addEventListener('click', function () {

        menuclose.classList.toggle('active');
        menuopen.classList.toggle('active');
        menuCloseAll.classList.toggle('active');
        list.classList.toggle('active');
        menuToggle.classList.toggle('open');
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

})

