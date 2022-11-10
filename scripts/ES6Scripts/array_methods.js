let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
   ];
    /*    Write code that searches the courses array using the map() function to return to the item name 
     use forEach() to display the list of items */

// function cartInfo(arrayElement) {
//     return arrayElement.item + " " + arrayElement.price + " " + arrayElement.quantity;
// }

// function displayName(arrayElement) {
//     console.log(arrayElement);
// }

// let cartList = cart.map(cartInfo);

// cartList.forEach(displayName);

   /* Write code that determines the total cost of everything in the cart using
   reduce() */


   function getTotalCost (currentTotal, arrayElement) {
    return currentTotal + arrayElement.price;
   }

   let sum = cart.reduce(getTotalCost, 0) ;
   console.log (sum)