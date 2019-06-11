import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  public categories = [
    { name: 'Bread'},
    { name: 'Dairy'},
    { name: 'Fruits'},
    { name: 'Seasonings and Spices'},
    { name: 'Vegetables'},
  ]
  
 save(product) {
   product.push(product);
   console.log(product);
 }
}
