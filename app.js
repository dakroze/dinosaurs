    // Create Dino Constructor
function Dino(species,weight,height,diet,where,when,fact){
  this.species = species;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;
}

let triceratopsFacts = ['First discovered in 1889 by Othniel Charles Marsh','The meaning of Triceratops is "three-horned face".','You pronounce their name "tri-SERa-tops".'];

let trexFacts = ['T. Rex were one of the biggest meat eaters.','Tyrannosaurus Rex means "Tyrant Lizard".','They could sprint up to 20 mph (32 kph).'];

let anklyosaurusFacts = ['The name Ankylosaurus means "fused lizard".','The Ankylosaurus had a massive tail club that it could use to generate a large amount of force',
'The top speed of an Ankylosaurus is estimated to be six miles per hour.'];

let brachiosaurusFacts = ['You pronounce their name "brack-ee-ow-sor-us"','The meaning of their name is "arm reptiles".','They weighed about 40 tons (40,000kg).'];

let stegosaurusFacts = ['You pronounce their name "steg-uh-sawr-us".','The meaning of Stegosaurus is "roofed lizard".','Stegosaurus had brains the size of ping pong balls.'];

let elasmosaurusFacts = ['You pronounce their name "ee-lazmo-saw-rus".','The meaning of its name is "Thin Plated Lizard".','They are slow swimmers.'];

let pteranodonFacts = ['Actually a flying reptile, the Pteranodon is not a dinosaur.','This animal had as much as a 20 foot wingspan.','You pronounce their name "tera-No-don".'];

let pigeonFact = "All birds are living dinosaurs.";

    // Create Dino Objects
let triceratops = new Dino('Triceratops',13000,114,'herbavor','North America','Late Cretaceous',triceratopsFacts)
let trex = new Dino('Tyrannosaurus Rex',11905,114,'carnivor','North America','Late Cretaceous',trexFacts)
let anklyosaurus = new Dino('Anklyosaurus',10500,55,'herbavor','North America','Late Cretaceous',anklyosaurusFacts)
let brachiosaurus = new Dino('Brachiosaurus',70000,372,'herbavor','North America','Late Jurasic',brachiosaurusFacts)
let stegosaurus = new Dino('Stegosaurus',11600,79,'herbavor','North America, Europe, Asia','Late Jurasic to Early Cretaceous',stegosaurusFacts)
let elasmosaurus = new Dino('Elasmosaurus',16000,59,'carnivor','North America','Late Cretaceous',elasmosaurusFacts)
let pteranodon = new Dino('Pteranodon',44,20,'carnivor','North America','Late Cretaceous',pteranodonFacts)
let pigeon = new Dino('Pigeon',0.5,9,'herbavor','World Wide','Holocene',pigeonFact)

   // Create Human Object (Constructor)

function Human(name,feet,inches,weight,diet) {
  this.species = 'human';
  this.name = name;
  this.feet = feet;
  this.inches = inches;
  this.weight = weight;
  this.diet = diet;
}

   // Use IIFE to get human data from form

let humanData = ( function() {
  return function() {
    let formIdArray = ['name','feet','inches','weight','diet'];
    let formData = [];
  // cycle through the form ids in the array, retreive the user input value and append to a new array.
    formIdArray.forEach((item) => {
      formData.push(document.getElementById(item).value)
    });
    return formData;
  }
})();




    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches.
    // This method compares weight between the human and dino object.
    // We need to add the function to the Dino Constructor prototype.
  Dino.prototype.compWeight = function(hooman){
    if (hooman.weight > this.weight) {
      return `You weigh more than the ${this.species.toLowerCase()} by ${hooman.weight - this.weight}lbs.`
    }
    else if (hooman.weight < this.weight) {
      return `You weigh less than the ${this.species.toLowerCase()} by ${this.weight - hooman.weight}lbs.`
    }
    else {
      return `You weigh the same as the ${this.species.toLowerCase}.`
    }
  }

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    // convertHeightUnit converts Height from inches into ft and inches.
function convertHeightUnit(inches){
    // 1 ft  = 12 inches
    let oFeet;
    let oInches;
    if (inches % 12 === 0) {
      oFeet = inches/12;
      oInches = 0;
    }
    else {
      let testA = inches/12;
      const decimalStr = parseInt(testA.toString().split('.')[0]);
      oFeet = (decimalStr*12)/12;
      oInches = inches - (decimalStr*12);
    }
    return [oFeet,oInches]
}
  // compHeight compares human object height to dinosaur height
Dino.prototype.compHeight = function (hooman){
    // convert dino object height from inches to ft and inches. Function returns an array.
    let dinoFtIn = convertHeightUnit(this.height)
    return `${hooman.name} is ${hooman.feet}ft ${hooman.inches}inches tall while the ${this.species.toLowerCase()} is ${dinoFtIn[0]}ft ${dinoFtIn[1]}inches tall.`
  }

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    // This function compares the human diet to the dino diet.
Dino.prototype.compDiet = function(hooman) {
  if(hooman.diet === this.diet){
    return `${hooman.name} has the same diet as the ${this.species.toLowerCase()}.`
  }
  else{
    return `${hooman.name} does not have the same diet as the ${this.species.toLowerCase()}.`
  }
}
    // Create a 3x 3 Grid
    // Create a makeGrid function that creates a 3x3 with the human and dino objects.
function makeGrid(myArray,humanObj) {
  return myArray.forEach((item) => {
    let div = document.createElement('div');
    div.className = 'grid-item';
    let h3 = document.createElement('h3');
    // Human object 'if' block
    if (item.species === 'human') {
      h3.append(item.name)
      div.appendChild(h3);
      let img = document.createElement('img');
      img.src = 'images/' + item.species.toLowerCase()+'.png';
      img.alt = 'This is a picture of a '+ item.species +'.';
      div.appendChild(img);
      grid.appendChild(div);
    }
    // Pigeon object has a static fact property
    else {
      h3.append(item.species)
      div.appendChild(h3);
      let img = document.createElement('img');
      img.src = 'images/' + item.species.toLowerCase()+'.png';
      img.alt = 'This is a picture of a '+ item.species +'.';
      div.appendChild(img);
      if (item.species === 'Pigeon') {
        let fact = item.fact;
        let p = document.createElement('p');
        p.append(fact);
        div.appendChild(p);
        grid.appendChild(div);
      }
      else {
    // push new facts into the dino fact array using the created methods.
        item.fact.push(item.compDiet(humanObj),item.compHeight(humanObj),item.compWeight(humanObj))
    // random number generator cycles through the fact array for all other dinos besides pigeon
        fact = item.fact[Math.floor(Math.random()*5)];
        let p = document.createElement('p');
        p.append(fact);
        div.appendChild(p);
    // Add tiles to DOM
        grid.appendChild(div);
      }
    }
  });
}

    // On button click, prepare and display infographic
let submitButton = document.getElementById('btn');
submitButton.addEventListener('click',function(){
  // Create human object from humanData array.
  let humanDataArray = humanData();
  let human = new Human(humanDataArray[0],humanDataArray[1],humanDataArray[2],humanDataArray[3],humanDataArray[4]);
  // Generate Tiles for each Dino in Array
  let compArray = [triceratops,trex,anklyosaurus,brachiosaurus,human,stegosaurus,pigeon,elasmosaurus,pteranodon];
  let grid = document.getElementById('grid');
  makeGrid(compArray,human);
  // Remove form from screen
  let hideForm = document.getElementById('dino-compare');
  hideForm.classList.add('hide-form')
});
