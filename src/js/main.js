// Loader
window.addEventListener('load',function () {  

    let main = document.querySelector('main')

    main.classList.add("hide");

    const myTimeout = setTimeout(myGreeting, 2000);

    function myGreeting() {
        document.querySelector(".loaderContainer").classList.add("active");
        main.classList.remove("hide");

    }

})