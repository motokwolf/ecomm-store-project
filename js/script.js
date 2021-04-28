          // script time!

          //project requirements 

// Product Data

const productsAr = [
  {
      id: 01,
      name: `Pilot Fountain Pen Kakuno`,
      ins: `$68.50`,
      description: `Sailor Japanese Pen Company takes pride in the professionally skilled craftsman who ensure each nib is perfect.`,
      rating: 5.0,
      colours: [ `Black`, `White` ],
      }, {
      id: 02,
      name: `Pilot Metropolitan`,
      ins: `$30.00`,
      description: `Includes one proprietary Pilot squeeze converter for use with bottled ink, and one proprietary ink cartridge.`,
      rating: 4.4,
      colours: [ `Silver`,  `White`, `Blue`] ,
      }, {
      id: 03,
      name: `Lamy Z24 Converter`,
      ins: `$20.90`,
      description: `Century 37760oe converter with purchase.`,
      rating: 4.2,
      colours: `Black`,
      }, {
      id: 04,
      name: `Noodler's Ahab Flex Fountain Pen`,
      ins: `$39.00`,
      description: `This pen is a great way to get into the world of flex pens - writes like a fine nib with minimal pressure.`,
      rating: 5.0,
      colours: [ `Gold`, `Black`] ,
      }, {
      id: 05,
      name: `Pilot Metropolitan - Plain`,
      ins: `$30.00`,
      description: `The Pilot Metropolitan is a great starter pen. With its sleek metal body, easy snap cap, and smooth nib it's a perfect everyday writer.`,
      rating: 4.9,
      colours: [ `Red`, `White`, `Blue` ],
      }, {
      id: 06,
      name: `Lamy Al-Star Fountain Pen`,
      ins: `$21.00`,
      description: `With one of the smoothest nibs in its price range, it has the additional bonus of easily interchangeable nibs.`,
      rating: 4.2,
      colours: [ `Gold`, `Silver` ],
      }, {
      id: 07,
      name: `Kaweco Classic Sport Fountain Pen`,
      ins: `$33.50`,
      description: `Aptly named their "classic" fountain pen, the Sport has been an icon of the Kaweco brand for more than 80 years.`,
      rating: 4.5,
      colours: `Red`,
      }, {
      id: 08,
      name: `Parker Fountain Pen`,
      ins: `$25.90`,
      description: `Parker Jotter Fountain Pen - Bond Street Black CT. Comes with: 1 cartridge.`,
      rating: 4.4,
      colours: `Silver`,
      }, {
      id: 09,
      name: `Faber-Castell School Fountain Pen`,
      ins: `$20.00`,
      description: `A perfect starter pen, with an ergonomic triangular rubberised grip.`,
      rating: 4.0,
      colours: [ `Red`, `White`, `Blue` ],
      }, {
      id: 10,
      name: `Lamy Al-Star Fountain Pen`,
      ins: `$49.50`,
      description:  `It's a pen in every veteran writer's collection and its price makes it a top choice for new writers.`,
      rating: 4.6,
      colours: [ `Silver`, `White`, `Black` ],
      }
]

productsAr.forEach(function(anImg, index) {
  console.log(arr)
}
)


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

