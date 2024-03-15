import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-web-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class WebProductsComponent {

  productList: any[] = [];
  categoryList: any[] = [];

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
    this.productService.getProducts().subscribe((res: any) =>{
      this.productList = res.data;
    })
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
