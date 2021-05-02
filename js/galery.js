
// Select all of the thumbnails

// For some reason adding this to the script.js actually makes it stop working and I haven't figured out why yet

const theThumbnails = document.querySelectorAll('.thumb')
const bigImg = document.querySelector(`#bigimg`)

const makeClickable = function (whichOne) {

  const setThumb = function(event) {

    // Getting the data required to load up the big image
    let imgSrc = whichOne.getAttribute(`src`)

    // Update the big image's attributes
    bigImg.setAttribute(`src`, imgSrc)
  }

  whichOne.addEventListener(`click`, setThumb)
}

// For each of the thumbnails selected, run the makeClickable function
theThumbnails.forEach(makeClickable)


