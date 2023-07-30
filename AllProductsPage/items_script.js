/* 
Idea for shopping cart.
When a button is pressed you find which button was pressed and then add the corresponding information to the shopping cart page.
ex: If hawaiian shirt 2 button is pressed then you run a function that finds which button was pressed and add corresponding information.
*/

function addToCart(item)
{
    setItemName(item);
}

function setItemName(product)
{
    document.getElementById("islandTimeCartLabel").innerHTML = product;
}