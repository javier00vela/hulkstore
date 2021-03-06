import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/IProduct.interface';
import { ProductService } from 'src/app/services/product/Product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {

  public listaProductos : Observable<IProduct[]>;
  constructor(private _productService : ProductService , private _router : ActivatedRoute) { }

  ngOnInit() {
    this.getAllProductsByCategory();
  }

  public getAllProductsByCategory(){
    this._router.params.subscribe((params)=>{
       const category = params.category;
      this.listaProductos = this._productService.getProductsByIdCategory(category);
    })
  }

}
