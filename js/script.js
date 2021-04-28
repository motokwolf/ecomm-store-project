// script time!

//project requirements 

//Product array

//Filter

//Sorting

//Menu Toggle
  //top menu toggle, insertion of 'hidden' on css for that object, on smallest viewport

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function menuToggle() {
    document.getElementById("menu").classList.toggle("show");
  }

//Gallery (on product page)

const theThumbs = document.querySelectorAll('.thumb')
const bigImg = document.querySelector(`#bigimg`)

const makeClickable = function (whichOne) {

  const setThumb = function(event) {

    // Getting the data required to load up the big image
    let imgSrc = whichOne.getAttribute(`src`)
    let imgAlt = whichOne.getAttribute(`alt`)

    // Update the big image's attributes
    bigImg.setAttribute(`src`, imgSrc)
    bigImg.setAttribute(`alt`, imgAlt)
  }

  whichOne.addEventListener(`click`, setThumb)
}

// For each of the thumbnails selected, run the makeClickable function
theThumbs.forEach(makeClickable)