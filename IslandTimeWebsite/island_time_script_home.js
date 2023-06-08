
//This variable is used in the nextShirt and previousShirt functions.
var shirtNumber = 1;

//Allows you to flip through the shirts using the down arrow.
function previousShirt() {
  
   shirtNumber = shirtNumber - 1;
  
   //This variable allows us to change the name of the shirt to match the picture of the shirt, we set this variable depending on the number that the variable shirtNumber holds.
   var shirtName = document.getElementById("shirtName");

  //We only have 5 shirts.
  //So, if shirtNumber gets below 1, reset it to 5.
  if (shirtNumber < 1) {
    shirtNumber = 5;
  }
  
  //Check what the shirtNumber is, then
  //Set the image accordingly.

  //Shirt 1 is seen when shirtNumber is 1
  if (shirtNumber == 1) {
    setShirtImage("assetsForHome/Shirts/Shirt1.jpeg");
    shirtName.innerText = "Shirt 1";
  }

  //Shirt 2 is seen when shirtNumber is 2
  if (shirtNumber == 2) {
    setShirtImage("assetsForHome/Shirts/Shirt2.jpeg");    
    shirtName.innerText = "Shirt 2";
  }

  //Shirt 3 is seen when shirtNumber is 3
  if (shirtNumber == 3) {
    setShirtImage("assetsForHome/Shirts/Shirt3.jpeg");
    shirtName.innerText = "Shirt 3";
  }

  //Shirt 4 is seen when shirtNumber is 4
  if (shirtNumber == 4) {
    setShirtImage("assetsForHome/Shirts/Shirt4.jpeg");
    shirtName.innerText = "Shirt 4";
  }

  //Shirt 5 is seen when shirtNumber is 5
  if (shirtNumber == 5) {
    setShirtImage("assetsForHome/Shirts/Shirt5.jpeg");
    shirtName.innerText = "Shirt 5";
  }
}
  
//Allows you to flip through the shirts using the up arrow
function nextShirt() {
  
   shirtNumber = shirtNumber + 1;
   var shirtName = document.getElementById("shirtName");

  //We only have 5 shirts.
  //So, if shirtNumber gets above 5, reset it to 1.
  if (shirtNumber > 5) {
    shirtNumber = 1;
  }
  
  //Check what the shirtNumber is, then
  //Set the image accordingly

  //Shirt 1 is seen when shirtNumber is 1
  if (shirtNumber == 1) {
    setShirtImage("assetsForHome/Shirts/Shirt1.jpeg");
    shirtName.innerText = "Shirt 1";
  }

  //Shirt 2 is seen when shirtNumber is 2
  if (shirtNumber == 2) {
    setShirtImage("assetsForHome/Shirts/Shirt2.jpeg");    
    shirtName.innerText = "Shirt 2";
  }

  //Shirt 3 is seen when shirtNumber is 3
  if (shirtNumber == 3) {
    setShirtImage("assetsForHome/Shirts/Shirt3.jpeg");
    shirtName.innerText = "Shirt 3";
  }

  //Shirt 4 is seen when shirtNumber is 4
  if (shirtNumber == 4) {
    setShirtImage("assetsForHome/Shirts/Shirt4.jpeg");
    shirtName.innerText = "Shirt 4";
  }

  //Shirt 5 is seen when shirtNumber is 5
  if (shirtNumber == 5) {
    setShirtImage("assetsForHome/Shirts/Shirt5.jpeg");
    shirtName.innerText = "Shirt 5";
  }
}

  //This function is used in the nextShirt and previousShirt functions to change the image of the featured shirt
  function setShirtImage(image) {
  document.getElementById("slideShirt").src = image; 
  }


//Now we will create the functions nextShorts, previousShorts, and setShortImage. 
//These functions are very similar to our nextShirt, previousShirt, and setShirtImage.
//The functionality is almost the same so comments won't be needed.
 
var shortNumber = 1;

function previousShort() {
   shortNumber = shortNumber - 1;
   var shortName = document.getElementById("shortName");

  if (shortNumber < 1) {
    shortNumber = 5;
  }
  
  if (shortNumber == 1) {
    setShortImage("assetsForHome/Shorts/short1.jpeg");
    shortName.innerText = "Short 1";
  }

  if (shortNumber == 2) {
    setShortImage("assetsForHome/Shorts/short2.jpeg");    
    shortName.innerText = "Short 2";
  }

  if (shortNumber == 3) {
    setShortImage("assetsForHome/Shorts/short3.jpeg");
    shortName.innerText = "Short 3";
  }

  if (shortNumber == 4) {
    setShortImage("assetsForHome/Shorts/short4.jpeg");
    shortName.innerText = "Short 4";
  }

  if (shortNumber == 5) {
    setShortImage("assetsForHome/Shorts/short5.jpeg");
    shortName.innerText = "Short 5";
  }
}


function nextShort() {
   shortNumber = shortNumber + 1;
   var shortName = document.getElementById("shortName");

  if (shortNumber > 5) {
    shortNumber = 1;
  }
  
  if (shortNumber == 1) {
    setShortImage("assetsForHome/Shorts/short1");
    shortName.innerText = "Short 1";
  }

  if (shortNumber == 2) {
    setShortImage("assetsForHome/Shorts/short2.jpeg");    
    shortName.innerText = "Short 2";
  }

  if (shortNumber == 3) {
    setShortImage("assetsForHome/Shorts/short3.jpeg");
    shortName.innerText = "Short 3";
  }

  if (shortNumber == 4) {
    setShortImage("assetsForHome/Shorts/short4.jpeg");
    shortName.innerText = "Short 4";
  }

  if (shortNumber == 5) {
    setShortImage("assetsForHome/Shorts/short5.jpeg");
    shortName.innerText = "Short 5";
  }
}

function setShortImage(image) {
  document.getElementById("slideShort").src = image; 
  }

//Now that we are done with the shorts functions, lets move on
//to the island time accesory fucntions. Just like the short functions,
//these will be very similar to the shirt functions(nextShirt, previousShirt, setShirtImage).

var accessoryNumber = 1;

function previousAccessory() {
  
  accessoryNumber = accessoryNumber - 1;
   
  var accessoryName = document.getElementById("accessoryName");

  if (accessoryNumber < 1) {
    accessoryNumber = 5;
  }
  
  if (accessoryNumber == 1) {
    setAccessoryImage("assetsForHome/Accessories/accessory1.jpeg");
    accessoryName.innerText = "Accessory 1";
  }

  if (accessoryNumber == 2) {
    setAccessoryImage("assetsForHome/Accessories/accessory2.jpeg");    
    accessoryName.innerText = "Accessory 2";
  }

  if (accessoryNumber == 3) {
    setAccessoryImage("assetsForHome/Accessories/accessory3.jpeg");
    accessoryName.innerText = "Accessory 3";
  }

  if (accessoryNumber == 4) {
    setAccessoryImage("assetsForHome/Accessories/accessory4.jpeg");
    accessoryName.innerText = "Accessory 4";
  }

  if (accessoryNumber == 5) {
    setAccessoryImage("assetsForHome/Accessories/accessory5.jpeg");
    accessoryName.innerText = "Accessory 5";
  }
}
  
function nextAccessory() {
  
   accessoryNumber = accessoryNumber + 1;
   var accessoryName = document.getElementById("accessoryName");

  if (accessoryNumber > 5) {
    accessoryNumber = 1;
  }
  
  if (accessoryNumber == 1) {
    setAccessoryImage("assetsForHome/Accessories/accessory1.jpeg");
    accessoryName.innerText = "Accessory 1";
  }

  if (accessoryNumber == 2) {
    setAccessoryImage("assetsForHome/Accessories/accessory2.jpeg");    
    accessoryName.innerText = "Accessory 2";
  }

  if (accessoryNumber == 3) {
    setAccessoryImage("assetsForHome/Accessories/accessory3.jpeg");
    accessoryName.innerText = "Accessory 3";
  }

  if (accessoryNumber == 4) {
    setAccessoryImage("assetsForHome/Accessories/accessory4.jpeg");
    accessoryName.innerText = "Accessory 4";
  }

  if (accessoryNumber == 5) {
    setAccessoryImage("assetsForHome/Accessories/accessory5.jpeg");
    accessoryName.innerText = "Accessory 5";
  }
}

  function setAccessoryImage(image) {
  document.getElementById("slideAccessory").src = image; 
  }

// Now that we finshed the slides for accessories, we will now repeat the above functions 
//for tables. The only differnce is there will be 2 images instead of 5.

var tableNumber = 1;

function previousTable() {
   tableNumber = tableNumber - 1;
   var tableName = document.getElementById("tableName");

  if (tableNumber < 1) {
    tableNumber = 2;
  }
  
  if (tableNumber == 1) {
    setTableImage("assetsForHome/Tables/pong_table_IT.jpeg");
    tableName.innerText = "Table 1";
  }

  if (tableNumber == 2) {
    setTableImage("assetsForHome/Tables/die_table_IT.jpeg");    
    tableName.innerText = "Table 2";
  }

}


function nextTable() {
   tableNumber = tableNumber + 1;
   var tableName = document.getElementById("tableName");

  if (tableNumber > 2) {
    tableNumber = 1;
  }
  
  if (tableNumber == 1) {
    setTableImage("assetsForHome/Tables/pong_table_IT.jpeg");
    tableName.innerText = "Table 1";
  }

  if (tableNumber == 2) {
    setTableImage("assetsForHome/Tables/die_table_IT.jpeg");    
    tableName.innerText = "Table 2";
  }
}

function setTableImage(image) {
  document.getElementById("slideTable").src = image; 
  }

//The same functions will be repeated for the "other" items. There will be 6 "other" items.

var otherNumber = 1;

function previousOther() {
  
  otherNumber = otherNumber - 1;
   
  var otherName = document.getElementById("otherName");

  if (otherNumber < 1) {
    otherNumber = 6;
  }
  
  if (otherNumber == 1) {
    setOtherImage("assetsForHome/others/other1.jpeg");
    otherName.innerText = "Other 1";
  }

  if (otherNumber == 2) {
    setOtherImage("assetsForHome/others/other2.jpeg");    
    otherName.innerText = "Other 2";
  }

  if (otherNumber == 3) {
    setOtherImage("assetsForHome/others/other3.jpeg");
    otherName.innerText = "Other 3";
  }

  if (otherNumber == 4) {
    setOtherImage("assetsForHome/others/other4.jpeg");
    otherName.innerText = "Other 4";
  }

  if (otherNumber == 5) {
    setOtherImage("assetsForHome/others/other5.jpeg");
    otherName.innerText = "Other 5";
  }
  if(otherNumber == 6) {
    setOtherImage("assetsForHome/others/other6.jpg");
    otherName.innerText = "Other 6";
  }
}
  
function nextOther() {
  
  otherNumber = otherNumber + 1;
   
  var otherName = document.getElementById("otherName");

  if (otherNumber > 6) {
    otherNumber = 1;
  }
  
  if (otherNumber == 1) {
    setOtherImage("assetsForHome/others/other1.jpeg");
    otherName.innerText = "Other 1";
  }

  if (otherNumber == 2) {
    setOtherImage("assetsForHome/others/other2.jpeg");    
    otherName.innerText = "Other 2";
  }

  if (otherNumber == 3) {
    setOtherImage("assetsForHome/others/other3.jpeg");
    otherName.innerText = "Other 3";
  }

  if (otherNumber == 4) {
    setOtherImage("assetsForHome/others/other4.jpeg");
    otherName.innerText = "Other 4";
  }

  if (otherNumber == 5) {
    setOtherImage("assetsForHome/others/other5.jpeg");
    otherName.innerText = "Other 5";
  }
  if(otherNumber == 6) {
    setOtherImage("assetsForHome/others/other6.jpg");
    otherName.innerText = "Other 6";
  }
}

  function setOtherImage(image) {
  document.getElementById("slideOther").src = image; 
  }



/*
// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});
*/