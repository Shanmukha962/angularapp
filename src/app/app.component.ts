import { Component } from '@angular/core';
import {ProductService} from './products/product.service';

@Component({
  selector: 'app-root',
  template:
  `<div>
    <h1>{{pageTitle}}
     </h1>
    <app-products></app-products>
  </div>`,
  providers: [ProductService]
})
export class AppComponent {
  pageTitle = 'Product Management';
}
