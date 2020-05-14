import store from "../store.js";
import Item from "../Models/Items.js";


//Public
class MarketService {
    addItem(rawItem) {
        let item = new Item(rawItem)

        store.State.Items.push(item)
    }
}

const SERVICE = new MarketService();
export default SERVICE;
