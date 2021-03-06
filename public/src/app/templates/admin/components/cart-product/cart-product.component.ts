import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from 'src/app/interfaces/ICart.interface';
import { CartService } from 'src/app/services/cart/Cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {

  public listaCarrito : Observable<ICart[]>;
  constructor(private _cartService : CartService) { }

  ngOnInit() {
    this.getAllCategory();
  }

  public getAllCategory(){
   this.listaCarrito = this._cartService.getAllListCart();
  }
}
