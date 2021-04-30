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
      rating: 1,
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
];


//Product Array

    // Select the element (a <ul> in this case) that will hold all of the student records
    
    // console.log(productsTable);
    // const productsTable = document.querySelector(`#productsTable`);

    // const producttoAddArray = function(tarry) {
    //   productsTable.innerHTML = ``;
    //   tarry.forEach((products) => {
        // console.log(productsAr.id)
      //   const productItem = document.createElement(`li`);
      // productItem.classList.add(`product`)

      //   productItem.innerHTML = `<p>hsjdfhjsdf</p>`;

      //   productsTable.appendChild(productItem);

      //   console.log(productItem);
      
      
      // Modify this new element, just like we would any other DOM element

    //   });

    // }

const studentTable = document.querySelector(`#productsTable`)

const setStudentToTable = function(theArray) {

  // Clear out information that already exists
  studentTable.innerHTML = ``;

  // For each of the students in our "database"
  theArray.forEach((product) => {

    // Create a list item (<li>) that is not yet added to the document
    const listItem = document.createElement(`li`)

    // Modify this new element, just like we would any other DOM element
    listItem.classList.add(`product`)
    
    // ------------------------------------
 //Rating

 let ramestarme = ``
 let ratingStarss = ``
 if ( `${product.rating}` >= 1 && `${product.rating}` < 2 ) {
  ratingStarss = `<span class="material-icons-round">star</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span>`
  ramestarme += ratingStarss;
}


 else if ( `${product.rating}` >= 2 && `${product.rating}` < 3) {
  ratingStarss = `<span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span>`;
  ramestarme += ratingStarss;
}
 else if ( `${product.rating}` >= 3 && `${product.rating}` < 4) {
  ratingStarss = `<span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star_border</span><span class="material-icons-round">star_border</span>`
  ramestarme += ratingStarss;
}
  else if (`${product.rating}` >= 4 && `${product.rating}` < 5) {
  ratingStarss = `<span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star_border</span>`
  ramestarme += ratingStarss;
}
  else {
  ratingStarss = `<span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span><span class="material-icons-round">star</span>`
  ramestarme += ratingStarss;
}


// ---------------------------------------

//Colours

// array of colors each have one a string of text

let colorme = product.colours
let colorOption = ``
let colorsss = ``
for (let i = 0; i < colorme.length;i++) {
  colorsss = `<li><label><input type="radio" name="colour"> ${colorme[i]}</label></li>`

  colorOption += colorsss
}
console.log(colorOption);
// forEach((color) => {
//   colourOptions += `<li><label><input type="radio" name="colour"> ${color}</label></li>`
// });

// console.log(colourOptions);

//<li><label><input type="radio" name="colour" value="k"> Black</label></li>


// -------------------------


    listItem.innerHTML = `
    <header>
      <a href="product.html"><img src="img/product0${product.id}.jpg" alt="Product Image: ${product.name}"></a>
      <h3>${product.name}</h3>
      <data value="${product.ins}"><ins>${product.ins}</ins></data>
      <p>${product.description}</p>  
      
        <dl>
        <dt>Rating</dt>
        <dd>${product.rating} ${ramestarme} </dd>
      </dl>
      <a href="product.html">see more</a>
    </header>
    <form>
      <fieldset>  
        <legend>Colours</legend>
        <ul> 
       ${colorOption}
        </ul>
      </fieldset>
      
    </form>
    <footer>
      <button type="button"><img src="img/cart.svg" alt="Shopping Cart" width="24"> Add to Cart</button>
      <button type="button"><img src="img/favorite.svg" alt="Favorites" width="24"></button>
    </footer>  
    `

    // Add the new <li> element to the document
    studentTable.appendChild(listItem)
    
  });

}
setStudentToTable(productsAr);




//Filter

//Sorting

//Menu Toggle
  //top menu toggle, insertion of 'hidden' on css for that object, on smallest viewport

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function menuToggle() {
    document.getElementById("menu").classList.toggle("show");
  }

