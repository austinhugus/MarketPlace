import { generateId } from "../Utils.js";

export default class Item {
  constructor(data) {
    this.id = generateId();
    this.name = data.name;
    this.price = data.price;
    this.description = data.description;
    this.imgUrl = data.imgUrl;
  }

  get Template() {
    return ` <div class="card col-3" >
        <img src="${this.imgUrl}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <p class="card-text">${this.price}</p>
        <p>${this.description}</p>
        <a class="btn btn-outline-primary" onclick="app.cartsController.addItem('${this.id}')">
        </a>
        </div>
        </div>`;
  }
  get CartTemplate() {
    return `<ul><li><img src="${this.imgUrl}></li><li>${name}</li><li>${this.price}</li></ul>`;
  }
}
