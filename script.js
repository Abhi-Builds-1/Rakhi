/* ==================================================
              RAKSHABANDHAN WEBSITE
================================================== */


/* ==================================================
                    SONGS
================================================== */

const songs = [

    document.getElementById("song1"),

    document.getElementById("song2"),

    document.getElementById("song3"),

    document.getElementById("song4"),

    document.getElementById("song5")

];



function stopAllSongs() {

    songs.forEach(function(song) {

        if (song) {

            song.pause();

            song.currentTime = 0;

        }

    });

}



function playSong(pageNumber) {

    stopAllSongs();


    const song =
        songs[pageNumber - 1];


    if (song) {

        song.volume = 0.65;


        song.play().catch(function() {

            console.log(
                "Music will start after a user tap."
            );

        });

    }

}



/* ==================================================
                    PAGE CHANGE
================================================== */

function goToPage(pageNumber) {


    document
        .querySelectorAll(".page")
        .forEach(function(page) {

            page.classList.remove("active");

        });


    const nextPage =
        document.getElementById(
            "page" + pageNumber
        );


    if (nextPage) {

        nextPage.classList.add("active");

    }


    playSong(pageNumber);


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



/* ==================================================
                    YES BUTTON
================================================== */

function yesAnswer() {

    goToPage(4);

}



/* ==================================================
                    NO BUTTON
================================================== */

const noBtn =
    document.getElementById("noBtn");


if (noBtn) {


    /* Desktop */

    noBtn.addEventListener(
        "mouseenter",
        moveNoButton
    );


    /* Phone */

    noBtn.addEventListener(
        "touchstart",
        moveNoButton
    );


    /* If she actually manages to click NO */

    noBtn.addEventListener(
        "click",
        function() {

            goToPage(3);

        }
    );

}



function moveNoButton() {


    const area =
        document.querySelector(
            ".answer-area"
        );


    if (!area) return;


    /*
       Keep the movement small
       so it works properly on phones.
    */


    const areaWidth =
        area.clientWidth;


    const areaHeight =
        area.clientHeight;


    const buttonWidth =
        noBtn.offsetWidth;


    const buttonHeight =
        noBtn.offsetHeight;


    const maxX =
        Math.max(
            10,
            areaWidth -
            buttonWidth -
            10
        );


    const maxY =
        Math.max(
            10,
            areaHeight -
            buttonHeight -
            10
        );


    /*
       Small movement range
       suitable for mobile screens.
    */

    const x =
        Math.random() *
        Math.min(maxX, 180);


    const y =
        Math.random() *
        Math.min(maxY, 70);


    noBtn.style.left =
        x + "px";


    noBtn.style.top =
        y + "px";

}



/* ==================================================
                    GIFT BOXES
================================================== */

function openGift(number) {


    const content =
        document.getElementById(
            "giftContent" + number
        );


    if (!content) return;


    content.classList.toggle("show");

}



/* ==================================================
          START PAGE 1 MUSIC AFTER FIRST TAP
================================================== */

document.addEventListener(
    "click",
    function() {


        const page1 =
            document.getElementById(
                "page1"
            );


        if (
            page1 &&
            page1.classList.contains("active")
        ) {


            const song =
                songs[0];


            if (
                song &&
                song.paused
            ) {

                song.volume = 0.65;

                song.play().catch(
                    function() {}
                );

            }

        }


    },
    { once: true }
);