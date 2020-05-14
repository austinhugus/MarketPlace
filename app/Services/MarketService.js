import store from "../store.js";
import Item from "../Models/Items.js";

//Public
class MarketService {
  addItem(rawItem) {
    let item = new Item(rawItem);
    console.log("market service  is good:)");
    store.State.Items.push(item);
    console.log("stored the item is good:)");
  }
}

const SERVICE = new MarketService();
export default SERVICE;
