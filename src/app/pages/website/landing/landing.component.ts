import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterOutlet ,FooterComponent, FormsModule, CommonModule, RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {


  productList: any[] = [];
  categoryList: any[] = [];
  cartList: any[] = [];
  loggedInObj: any = {};


  constructor(private productService: ProductService,
    private router: Router){

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
    this.getCartByCustomer();
  }
  
  navigateToProducts(id: number){
    this.router.navigate(['/products', id]);
  }

  getCartByCustomer(){
    this.productService.getCartDataByCustId(705).subscribe((res: any) => {
      this.cartList = res.data;
    })
  }

  getAllProducts(){
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

  
}
