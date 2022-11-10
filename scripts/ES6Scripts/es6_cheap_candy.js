let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];


// Which candies costs less than $4.00?

// let candie4 = products.filter(p => p.price < 4);

// for (let i = 0; i < candie4.length; i++) {
//     console.log(candie4[i].product);

// }

// Which candies has "M&M" its name?

// let candieMM =
//  products.find((arrayValue) => arrayValue.product == "M&Ms");

//     if (candieMM != undefined) {
//         console.log (candieMM.product + " has M&MS in its name ");
//     }
//     else {
//      console.log("Does not have M&Ms");
//  }


        let product1 = "Product";
        let productin ="M&Ms";

  let candieMMS = products.filter(p => p.product == "M&Ms");
   for (let i = 0; i < candieMMS.length; i++) {
        console.log(candieMMS[i].product);
    }
       if (products.product.includes(M&Ms)) == "MMS"){ 

 }
 



// Do we carry "Swedish Fish"?


// let swedishProduct = products.filter(p => p.product == "Swedish Fish");

// for (let i = 0; i <swedishProduct.length; i++) {
//     console.log(swedishProduct[i].product);
// }