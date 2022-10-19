 /** code by webdevtrick ( https://webdevtrick.com ) **/
let checkbox = document.querySelector('.container_toggle');

 console.log(checkbox);

        checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans()
                document.documentElement.setAttribute('data-theme', 'dartheme')
            } else {
                trans()
                document.documentElement.setAttribute('data-theme', 'lighttheme')
            }
        })

        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition');
            }, 1000)
        }