import _CartsService from "../Services/CartsService.js";
import _Store from "../store.js";
import _Items from "../Models/Items.js";
import CARTS_SERVICES from "../Services/CartsService.js";
function _draw() {
  let template = "";
  _Store.State.Cart.forEach((item) => {
    template += item.CartTemplate;
  });
  document.getElementById("cart").innerHTML = template;
}

export default class CartsController {
  constructor() {
    _draw();
  }

  addItem(id) {
    _CartsService.addItem(id);
    _draw();
  }
  removeItem(id) {
    _CartsService.removeItem(id);
    _draw();
  }
}
