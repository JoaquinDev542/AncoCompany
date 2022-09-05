// Loader
window.addEventListener('load',function () {  

    let main = document.querySelector('main')

    main.classList.add("hide");

    const myTimeout = setTimeout(myGreeting, 3000);

    function myGreeting() {
        document.getElementById("loader").classList.add("active");
        main.classList.remove("hide");

    }

})