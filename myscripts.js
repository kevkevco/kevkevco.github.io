window.addEventListener('DOMContentLoaded', (event) => {


    var enter = document.querySelector("#enter");
    enter.style.opacity = ".8";
    enter.style.transition = "opacity 15s ease-in-out";
    enter.style.transform = "scale(1.1) translate(0%, -25%)";
    enter.style.transitiondelay = "5s";

});

function openhome() {

            var navbar = document.querySelector("#navbar");
            navbar.style.transform = "scale(1.1) translate(0%, +5%)";
            navbar.style.transition = "6.5s ease-in-out";
            navbar.style.opacity = 1;


            var logo = document.querySelector("#logo");
            logo.style.opacity = 1;
            logo.style.transform = "scale(1.1) translate(0%, -15%)";
            logo.style.transition = "6s ease-in-out";

            var enter = document.querySelector("#enter");
            enter.style.opacity = "0";
            enter.style.transition = "1.5s ease-in-out";

            return playmusic();
        }

function playmusic() {
            var caret = document.querySelector("#caret");
            caret.style.transition = "5s ease-in-out";
            caret.style.transitionduration = "5s";

            var music = document.querySelector("#music");
            if (music.paused) {
                caret.style.transform = "rotate(-.25turn)";
                return music.play();
            }
            else {
                caret.style.transform = "rotate(0turn)";
                return music.pause();
            }
        }