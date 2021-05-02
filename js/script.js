          // script time!

          //project requirements: 

// Product Data ---ok//

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
      rating: 2.5,
      colours: [ `Silver`,  `White`, `Blue`] ,
      }, {
      id: 03,
      name: `Lamy Z24 Converter`,
      ins: `$20.90`,
      description: `Century 37760oe converter with purchase.`,
      rating: 3.5,
      colours: [`Black` ],
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
      colours: [ `Red`],
      }, {
      id: 08,
      name: `Parker Fountain Pen`,
      ins: `$25.90`,
      description: `Parker Jotter Fountain Pen - Bond Street Black CT. Comes with: 1 cartridge.`,
      rating: 4.4,
      colours: [ `Silver`],
      }, {
      id: 09,
      name: `Faber-Castell School Fountain Pen`,
      ins: `$20.00`,
      description: `A perfect starter pen, with an ergonomic triangular rubberised grip.`,
      rating: 3.0,
      colours: [ `Red`, `White`, `Blue` ],
      }, {
      id: 10,
      name: `Lamy Al-Star Fountain Pen`,
      ins: `$49.50`,
      description:  `It's a pen in every veteran writer's collection and its price makes it a top choice for new writers.`,
      rating: 4.6,
      colours: [ `Silver`, `White`, `Black` ],
      }
];



//------------//
//Product Array (based on student array exercise)

const productTable = document.querySelector(`#productsTable`)

const setproductToTable = function(theArray) {

  // Clear out information that already exists
  productTable.innerHTML = ``;

  // For each of the product in our "database"
  theArray.forEach((product) => {

    // Create a list item (<li>) that is not yet added to the document
    const listItem = document.createElement(`li`)

    // Modify this new element, just like we would any other DOM element
    listItem.classList.add(`product`)
    
    // -----------//


      //Rating (to add to template)---ok//
      // there is probably a easier way to do this but ¯\_(ツ)_/¯

      // idea, each number add one star html string of text, 1 = "one star" 1 - 5 = 4 = "empty star"?? or string is += for set value??  (idk how 0.5 stars would work on this tho)

      let addStars = ``
      let ratingStarss = ``
      if ( `${product.rating}` >= 1 && `${product.rating}` < 1.5 ) {
        ratingStarss = `<span class="material-icons-round">star</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span>`
        addStars += ratingStarss;
      }

      else if ( `${product.rating}` >= 1.5 && `${product.rating}` < 2 ) {
        ratingStarss = `<span class="material-icons-round">star</span><span class="material-icons-round">star_half</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span>`
        addStars += ratingStarss;
      }

      else if ( `${product.rating}` >= 2 && `${product.rating}` < 2.5) {
        ratingStarss = `<span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span>`;
        addStars += ratingStarss;
      }

      else if ( `${product.rating}` >= 2.5 && `${product.rating}` < 3) {
        ratingStarss = `<span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star_half</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span>`;
        addStars += ratingStarss;
      }

      else if ( `${product.rating}` >= 3 && `${product.rating}` < 3.5) {
        ratingStarss = `<span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span>`
        addStars += ratingStarss;
      }
      else if ( `${product.rating}` >= 3.5 && `${product.rating}` < 4) {
        ratingStarss = `<span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star_half</span><span class="material-icons-round">star_border</span>`
        addStars += ratingStarss;
      }
      
        else if (`${product.rating}` >= 4 && `${product.rating}` < 4.5) {
        ratingStarss = `<span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star_border</span>`
        addStars += ratingStarss;
      }

      else if (`${product.rating}` >= 4.5 && `${product.rating}` < 5) {
        ratingStarss = `<span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star_half</span>`
        addStars += ratingStarss;
      }

        else {
        ratingStarss = `<span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span>`
        addStars += ratingStarss;
      }


// -----------//
      //Colours (to add to template)---ok//

      // array of colors each have one a string of text

      let addColour = product.colours
      let colourOption = ``
      let colorsss = ``
      for (let i = 0; i < addColour.length;i++) {
        colorsss = `<li><label><input type="radio" name="colour"> ${addColour[i]}</label></li>`

        colourOption += colorsss
      }

// -------------------------
// Product Template to HTML ---ok//

    listItem.innerHTML = `
    <header>
      <a href="product.html"><img src="img/product0${product.id}.jpg" alt="Product Image: ${product.name}"></a>
      <h3>${product.name}</h3>
      <data value="${product.ins}"><ins>${product.ins}</ins></data>
      <p>${product.description}</p>  
      
        <dl>
        <dt>Rating</dt>
        <dd>${product.rating} ${addStars} </dd>
      </dl>
      <a href="product.html">see more</a>
    </header>
    <form>
      <fieldset>  
        <legend>Colours</legend>
        <ul> 
       ${colourOption}
        </ul>
      </fieldset>
      
    </form>
    <footer>
      <button type="button"><img src="img/cart.svg" alt="Shopping Cart" width="24"> Add to Cart</button>
      <button type="button"><img src="img/favorite.svg" alt="Favorites" width="24"></button>
    </footer>  
    `

    // Add the new <li> element to the document
    productTable.appendChild(listItem)
    
  });

}
setproductToTable(productsAr);




//Filter ---ok//

// Select the range slider (filter)
const filterRating = document.querySelector(`#ratingFilter`)

//my attempt (wasnt needed because there is a eventListener on the entire list)
//---theRange = document.querySelector(`input[name="rating"]:checked`).value

// Every time any input on filterRating value changes...
filterRating.addEventListener(`input`, function(event) {

  // What was clicked is
const theRange = event.target

  // filter() 
const filteredProducts = productsAr.filter(function(product) {
    if (product.rating >= Number(theRange.value)) {
      return true
    } else {
      return false
}
})

  // Build the Page with filtered array
 setproductToTable(filteredProducts)
})


//Sorting?

//selecting the sorting field
const sortingFilter = document.querySelector(`#sort`)


sortingFilter.addEventListener(`input`, function(event) {

  //what option
  const theSort = event.target
  console.log(theSort.value)

//ARGH IDK HOW TO DO THIS
 //sort()
// const filteredProducts = productsAr.sort( function({
 // if (theSort.value == 'price-high') {
//    (function(a, b){return b.ins - a.ins});
 // }
 // else if (theSort.value == 'price-low') {
//    (function(a, b){return a.ins - b.ins});
//} 
//  else {
//    filteredProducts = productsAr
//  }
// }))

//console.log(filteredProducts)

})



//Menu Toggle ---ok//
    
  function menuToggle() {
      document.getElementById("menu").classList.toggle("show");
    }

