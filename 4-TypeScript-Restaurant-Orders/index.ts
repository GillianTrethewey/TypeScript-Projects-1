import { restaurants, Restaurant } from "./restaurants";
import { orders, Order, PriceBracket } from "./orders";

/// Add your getMaxPrice() function below:
function getMaxPrice(value: PriceBracket): number {
  switch(value) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
    default:
      return 0;
  }
}
/// Add your getOrders() function below:
function getOrders(price: PriceBracket, orders: Order[][]) {
  let filteredOrders: Order[][] = []; // will be an array of objects, right now empty
  //const testResult = orders[0].filter(obj => obj.price <= getMaxPrice(price));
  orders.forEach(order => {
    const result = order.filter(obj => obj.price <= getMaxPrice(price));
  filteredOrders.push(result);
  })
  return filteredOrders;
}


/// Add your printOrders() function below:
function printOrders(restaurants: Restaurant[], filteredOrders: Order[][]) {
  restaurants.forEach((restaurant, index) => {
    if (filteredOrders[index].length > 0) {
      console.log(restaurant.name);
      filteredOrders[index].forEach(order => {
        console.log(`- ${order.name}: $${order.price}`);
      })
    }
  });
}

/// Main
const eligibleOrders = getOrders(PriceBracket.Medium, orders);
printOrders(restaurants, eligibleOrders);

