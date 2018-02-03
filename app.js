document.querySelectorAll(".switch-box1, .switch-box2").forEach(el => {
    el.addEventListener('click', function() {

        let img = document.querySelector("img");
        let active = document.querySelector('.active');

        //condition for the switch indication
        if (active) {
            active.classList.remove('active')
        }
        this.classList.add('active');

        //condition for the bulb display 
        if (this.classList.contains("switch-box1")) {
            img.src = "images/bulboff.gif";
        } else {
            img.src = "images/bulbon.gif";
        }

    })
})