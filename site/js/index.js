window.addEventListener("load", indexStart);


// billedekarusell
const images = document.querySelectorAll('.hero-section img');

// startindeks
let currentIndex = 0;

function indexStart(){
    changeImage();
    gemTekstGalleri();

    document.querySelector(".keeper-img").addEventListener("mouseover", mouseoverKeeper);

    document.querySelector(".drop-video").addEventListener("mouseover", mouseoverDrop);

    document.querySelector(".a-short-talk-3d-loop").addEventListener("mouseover", mouseoverAShortTalk3d);

    document.querySelector(".a-short-talk-interview").addEventListener("mouseover", mouseoverAShortTalkVideo);







    document.querySelector(".keeper-img").addEventListener("mouseout", mouseOutGalleri);

    document.querySelector(".drop-video").addEventListener("mouseout", mouseOutGalleri);

    document.querySelector(".a-short-talk-3d-loop").addEventListener("mouseout", mouseOutGalleri);

    document.querySelector(".a-short-talk-interview").addEventListener("mouseout", mouseOutGalleri);
}




function mouseOutGalleri(){
    console.log("gemmer tekst i galleri")

    document.querySelector(".keeper-overlay-text").classList.add("hide");

    document.querySelector(".drop-overlay-text").classList.add("hide");

    document.querySelector(".a-short-talk-3d-overlay-text").classList.add("hide");

    document.querySelector(".a-short-talk-interview-overlay-text").classList.add("hide");
}




function mouseoverKeeper(){
    console.log("keeper tekst vises")

    document.querySelector(".keeper-overlay-text").classList.remove("hide");
}


function mouseoverDrop(){
    console.log("drop tekst vises")

    document.querySelector(".drop-overlay-text").classList.remove("hide");
}


function mouseoverAShortTalk3d(){
    console.log("a short talk 3d tekst vises")

    document.querySelector(".a-short-talk-3d-overlay-text").classList.remove("hide");
}


function mouseoverAShortTalkVideo(){
    console.log("a short talk 3d tekst vises")

    document.querySelector(".a-short-talk-interview-overlay-text").classList.remove("hide");
}






function gemTekstGalleri(){
    console.log("gemmer tekst i gelleri");

    document.querySelector(".keeper-overlay-text").classList.add("hide");

    document.querySelector(".drop-overlay-text").classList.add("hide");

    document.querySelector(".a-short-talk-3d-overlay-text").classList.add("hide");

    document.querySelector(".a-short-talk-interview-overlay-text").classList.add("hide");
}

















// funktion til at skifte billede
function changeImage() {
  images[currentIndex].classList.remove('active');

  // opdater indekset
  currentIndex = (currentIndex + 1) % images.length;

  // Tilføj "active"-klassen til det næste billede
  images[currentIndex].classList.add('active');
}

setInterval(changeImage, 1000);
