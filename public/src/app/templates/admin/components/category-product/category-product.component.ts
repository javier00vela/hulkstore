import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/interfaces/ICategoria.interface';
import { IResponse } from 'src/app/interfaces/response.interface';
import { CategoryService } from 'src/app/services/category/Category.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss']
})
export class CategoryProductComponent implements OnInit {
  public listaCategorias : Observable<ICategory[]>;
  constructor(private _categoryService : CategoryService) { }

  ngOnInit() {
    this.getAllCategory();
  }

  public getAllCategory(){
   this.listaCategorias = this._categoryService.getAllCategory();
   console.log(this.listaCategorias);
   
  }

}
