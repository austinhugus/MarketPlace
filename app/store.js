import Item from "./Models/Items.js";

let _state = {
  /** @type {Item[]} */
  Items: [
    new Item({
      name: "fruit",
      price: 3,
      imgUrl: "//placeholdit.it/100x100",
      description: "its okay",
    }),
  ],
  Cart: [
    new Item({
      name: "fruit",
      price: 3,
      imgUrl: "//placeholdit.it/100x100",
      description: "its okay",
    }),
  ],
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
