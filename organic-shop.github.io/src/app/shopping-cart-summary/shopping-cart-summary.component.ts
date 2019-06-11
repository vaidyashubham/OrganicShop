import { Component } from '@angular/core';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent {
  public shoppingCartItem = [
    {
      "category" : "vegetables",
      "imageURL" : "http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg",
      "price" : 2.5,
      "title" : "Spinach"
    },
    {
      "category" : "bread",
      "imageURL" : "https://static.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg",
      "price" : 3,
      "title" : "Freshly Baked Bread"
    },
    {
      "category" : "fruits",
      "imageURL" : "https://www.organicfacts.net/wp-content/uploads/avocadofruit.jpg",
      "price" : 1.75,
      "title" : "Avacado"
    },
    {
      "category" : "vegetables",
      "imageURL" : "https://static.pexels.com/photos/8390/food-wood-tomatoes.jpg",
      "price" : 2.5,
      "title" : "Tomato"
    },
    {
      "category" : "fruits",
      "imageURL" : "https://4.imimg.com/data4/WB/RO/MY-1246545/image2-500x500.jpg",
      "price" : 2.5,
      "title" : "Watermelon"
    }
  ]
  totalPrice() {
    let sum = 0;
    for(let productId of this.shoppingCartItem) {
      sum += productId.price; 
    }
    return sum;
  } 
}
