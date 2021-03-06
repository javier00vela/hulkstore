import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/IProduct.interface';
import { ProductService } from 'src/app/services/product/Product.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit {

  public productDto :IProduct = <IProduct> {}; 
  constructor(private _productService : ProductService , private _actRouter : ActivatedRoute , private _router : Router) { }

  ngOnInit() {
    this.getAllProductsByCategory();
  }

  public getAllProductsByCategory(){
    this._actRouter.params.subscribe((params)=>{
      const idProduct = params.id;   
      if(idProduct === undefined || idProduct === null){
        this._router.navigate(['/admin/category']);
      }

        this._productService.getProductById(idProduct).subscribe((res)=>{
          this.productDto = res;
        });  
      
    })
  }
}
