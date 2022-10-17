"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
/// Add your getMaxPrice() function below:
function getMaxPrice(value) {
  switch (value) {
    case orders_1.PriceBracket.Low:
      return 10.0;
    case orders_1.PriceBracket.Medium:
      return 20.0;
    case orders_1.PriceBracket.High:
      return 30.0;
    default:
      return 0;
  }
}
/// Add your getOrders() function below:
function getOrders(price, orders) {
  let filteredOrders = []; // will be an array of objects, right now empty
  //const testResult = orders[0].filter(obj => obj.price <= getMaxPrice(price));
  orders.forEach((order) => {
    const result = order.filter((obj) => obj.price <= getMaxPrice(price));
    filteredOrders.push(result);
  });
  return filteredOrders;
}
/// Add your printOrders() function below:
function printOrders(restaurants, filteredOrders) {
  restaurants.forEach((restaurant, index) => {
    if (filteredOrders[index].length > 0) {
      console.log(restaurant.name);
      filteredOrders[index].forEach((order) => {
        console.log(`- ${order.name}: $${order.price}`);
      });
    }
  });
}
/// Main
const eligibleOrders = getOrders(orders_1.PriceBracket.Medium, orders_1.orders);
printOrders(restaurants_1.restaurants, eligibleOrders);
