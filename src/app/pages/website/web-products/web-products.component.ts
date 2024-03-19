import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import { WidgetErrorComponent } from '../../../shared/widget/widget-error/widget-error.component';
import { Observable, map } from 'rxjs';


@Component({
  selector: 'app-web-products',
  standalone: true,
  imports: [CommonModule, RouterLink, MatFormFieldModule, MatInputModule, WidgetErrorComponent],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class WebProductsComponent {

  products$!: Observable<any[]>;

  productList: any[] = [];
  categoryList: any[] = [];
  error: Error | null = null;

  constructor(private productService: ProductService,
    private router: Router){
      
  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  addToCart(productId: number){
      const addTocartObj = {
        "CartId": 0,
        "CustId": 705,
        "ProductId": productId,
        "Quantity": 1,
        "AddedDate": new Date()
      }
      this.productService.addToCart(addTocartObj).subscribe((res: any) =>{
        if (res.result) {
          alert("Product added to cart");
          this.productService.cartUpdated$?.next(true);
        }
        else{
          alert(res.message)
        }
      })
  }
  getAllProducts(){
    //unreliable method;
    //({} as any).someMethod();
    
    // this.products$ = this.productService.getProducts().pipe(
    //   map(res => {
    //     console.log(res[0].data)
    //     this.productList = res[0].data;
    //     return res.map(data => data.data);
    //   })
    // );
    
  }
  getAllCategory() {
    this.productService.getCategory().subscribe((res: any) => {
      // Get top-level categories (parentCategoryId = 0)
      this.categoryList = res.data.filter((list: any) => list.parentCategoryId === 0);
    });
  }
  navigateToProducts(id: number){
    this.router.navigate(['/products', id]);
  }
}
