import Store from "../store.js";
import Items from "../Models/Items.js";
// Store.State.Cart.items.push();

class CartsService {
  addItem(id) {
    let item = Store.State.Items.find((i) => i.id == id);
    Store.State.Cart.push(item);
  }
  removeItem(id) {
    // console.log(id);
    // console.log(Store.State.Cart.items.findIndex(id));
    // Store.State.Cart.items.findIndex(id);
  }
}

const CARTS_SERVICES = new CartsService();

export default CARTS_SERVICES;
