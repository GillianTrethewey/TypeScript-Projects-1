import products from "./products";

const productName: string = "fanny pack";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
const shippingAddress: string = "575 Broadway, New York City, New York";

//const product = products.filter(product => product.name === productName)[0];

const product = products.find((product) => product.name === productName);

console.log(product);

if (product) {
  if (product.preOrder === "true") {
    console.log("We will send you a message when your product is on its way.");
  }

  if (Number(product.price) > 25) {
    shipping = 0;
    console.log("This item has free shipping.");
  } else {
    shipping = 5;
  }

  if(shippingAddress.match("New York")) {
    taxPercent = 0.1;
  } else {
    taxPercent = 0.05;
  }

  taxTotal = Number(product.price) * taxPercent;
  total = Number(product.price) + taxTotal + shipping;


  console.log(`
  Order Item: ${productName} 
  Shipped to: ${shippingAddress}
  Price: $${product.price} 
  Taxes: $${taxTotal} 
  Shipping cost: $${shipping}  
  Total: $${total}`);
}



