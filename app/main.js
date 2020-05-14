import MarketsController from "./Controllers/MarketsController.js";
import CartsController from "./Controllers/CartsController.js";

class App {
  marketsController = new MarketsController();
  cartsController = new CartsController();
}

window["app"] = new App();
