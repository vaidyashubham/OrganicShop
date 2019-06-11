import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  public categories = [
    { name: 'Bread'},
    { name: 'Dairy'},
    { name: 'Fruits'},
    { name: 'Seasonings and Spices'},
    { name: 'Vegetables'},
  ]
  public products = [
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
      "category" : "vegetables",
      "imageURL" : "https://upload.wikimedia.org/wikipedia/commons/7/7f/Lettuce_Mini_Heads_%287331119710%29.jpg",
      "price" : 1,
      "title" : "Lettuce"
    },
    {
      "category" : "vegetables",
      "imageURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cauliflowers_-_20051021.jpg/1280px-Cauliflowers_-_20051021.jpg",
      "price" : 1.75,
      "title" : "Cauliflower"
    },
    {
      "category" : "fruits",
      "imageURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bananas.jpg/1024px-Bananas.jpg",
      "price" : 1.25,
      "title" : "Banana"
    },
    {
      "category" : "fruits",
      "imageURL" : "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
      "price" : 1.7,
      "title" : "Orange"
    },
    {
      "category" : "fruits",
      "imageURL" : "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
      "price" : 2,
      "title" : "Apple"
    },
    {
      "category" : "fruits",
      "imageURL" : "https://upload.wikimedia.org/wikipedia/commons/3/36/Kyoho-grape.jpg",
      "price" : 2,
      "title" : "Grape"
    },
    {
      "category" : "fruits",
      "imageURL" : "https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg",
      "price" : 2,
      "title" : "Peach"
    },
    {
      "category" : "seasonings",
      "imageURL" : "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cinnamon-other.jpg",
      "price" : 0.5,
      "title" : "Cinnamon Sticks"
    },
    {
      "category" : "seasonings",
      "imageURL" : "https://upload.wikimedia.org/wikipedia/commons/4/48/Saffron_Crop.JPG",
      "price" : 3,
      "title" : "Saffron"
    },
    {
      "category" : "seasonings",
      "imageURL" : "http://maxpixel.freegreatpicture.com/static/photo/1x/Seasoning-Powder-Curry-Spice-Ingredient-Turmeric-2344157.jpg",
      "price" : 0.75,
      "title" : "Ground Turmeric"
    },
    {
      "category" : "seasonings",
      "imageURL" : "http://maxpixel.freegreatpicture.com/static/photo/1x/Ingredient-Herb-Seasoning-Seeds-Food-Coriander-390015.jpg",
      "price" : 0.5,
      "title" : "Coriander Seeds"
    },
    {
      "category" : "bread",
      "imageURL" : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Fabrication_du_lavash_%C3%A0_Noravank_%286%29.jpg/1280px-Fabrication_du_lavash_%C3%A0_Noravank_%286%29.jpg",
      "price" : 1.25,
      "title" : "Lavash Bread"
    },
    {
      "category" : "bread",
      "imageURL" : "https://upload.wikimedia.org/wikipedia/commons/1/1d/Bagel-Plain-Alt.jpg",
      "price" : 1,
      "title" : "Bagel Bread"
    },
    {
      "category" : "fruits",
      "imageURL" : "https://upload.wikimedia.org/wikipedia/commons/e/e1/Strawberries.jpg",
      "price" : 1.95,
      "title" : "Strawberry"
    },
    {
      "category" : "bread",
      "imageURL" : "https://static.pexels.com/photos/416607/pexels-photo-416607.jpeg",
      "price" : 1.25,
      "title" : "Baguette Bread"
    },
    {
      "category" : "fruits",
      "imageURL" : "https://4.imimg.com/data4/WB/RO/MY-1246545/image2-500x500.jpg",
      "price" : 2.5,
      "title" : "Watermelon"
    }  
]
addToCart(product) {
  
}
// public filteredProducts: any[];
// category:string;
// filter() {
//     this.filteredProducts = (this.category) ?
//       this.products.filter(p => p.category === this.category) :
//       this.products;
//   }
}
