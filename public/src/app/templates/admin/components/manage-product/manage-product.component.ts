import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/IProduct.interface';
import { ProductService } from 'src/app/services/product/Product.service';
import { FileService } from 'src/app/utils/file/file.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss']
})
export class ManageProductComponent implements OnInit {

  public product : Observable<IProduct>;
  public productDto :IProduct = <IProduct> {
    photo : "assets/photo.png"
  }; 
  public isUpdated : boolean = false;
  constructor(private _productService : ProductService , private _router : ActivatedRoute) { }

  ngOnInit() {
    this.getAllProductsByCategory();
  }

  public loadImageProduct(format){
    FileService.getBase64(format.files[0] , (base64)=>{
      this.productDto.photo = base64;
    });
  }

  public sendData(){
    this._productService.manageRequestProduct(this.productDto , this.isUpdated );
  }

  public getAllProductsByCategory(){
    this._router.params.subscribe((params)=>{
      const idProduct = params.id;   
      if(idProduct === undefined || idProduct === null){
        this.isUpdated = false;
      }else{
        this._productService.getProductById(idProduct).subscribe((res)=>{
          this.productDto = res;
        });
        this.isUpdated = true;
      }
    })
  }

}
