import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  //templateUrl: './product-list-table.component.html',
  //templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   
  products:Product[];
  currentCategoryId: number;
  currentCategoryName: string;

  //inject our ProductService
  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  //simillar to @PostConstruct in Spring
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
    
  }

  listProducts(){

    //Check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    
    if(hasCategoryId){
      //get the "id" param string. convert to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
      //get the "name" param string
      this.currentCategoryName = this.route.snapshot.paramMap.get('name');
    }else{
      //not category id available.... default to category id 1
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }

    //now get the products for the given category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {this.products = data;}
    )
  }

}
