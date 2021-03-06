import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/ICategoria.interface';
import { IProduct } from 'src/app/interfaces/IProduct.interface';
import { CartService } from 'src/app/services/cart/Cart.service';
import { ProductService } from 'src/app/services/product/Product.service';
import { AuthService } from 'src/app/utils/auth/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input("Element") public Element : IProduct = <IProduct>{};
  @Input("isCategory") public isCategory :boolean = true;
  public profile : number = this._authUtil.getRole();
  constructor(private _cartService : CartService , private _router:Router , private _authUtil : AuthService) { }

  public addProduct(product:IProduct){
    if( this._cartService.addProduct(product , this._authUtil.infoUser() ) ){
      this._router.navigate(['/admin/cart']);
    }
  }

  ngOnInit() {
  }

}
