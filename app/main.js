import MarketsController from "./Controllers/MarketsController.js";


class App {
  marketsController = new MarketsController();
}

window["app"] = new App();
