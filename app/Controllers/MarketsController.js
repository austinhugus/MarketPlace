import MarketsService from "../Services/MarketService.js";
import _store from "../store.js";

function _draw() {
  let template = "";
  _store.State.Items.forEach((i) => (template += i.Template));
  document.getElementById("items").innerHTML = template;
  console.log("draw from controller");
}

//Public
export default class MarketsController {
  constructor() {
    console.log("im constructing things ");

    _draw();
  }

  addItem(event) {
    event.preventDefault();
    let formData = event.target;
    let rawItem = {
      name: formData.name.value,
      price: formData.price.value,
      imgUrl: formData.imgUrl.value,
      description: formData.description.value,
    };
    console.log("market controller is good:)");
    MarketsService.addItem(rawItem);
    _draw();
  }
}
