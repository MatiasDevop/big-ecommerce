import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  isSidePanelVisible: boolean = false;

  productObj: any = {
    "ProductId": 0,
    "ProductSku": "",
    "ProductName": "",
    "ProductPrice": 0,
    "ProductShortName": "",
    "ProductDescription": "",
    "CreatedDate": new Date(),
    "DeliveryTimeSpan": "",
    "CategoryId": 0,
    "ProductImageUrl": ""
  }

  categoryList: any [] = [];
  productList: any [] = [];

  constructor(private productService: ProductService) {
    
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe((res: any) => {
      this.productList = res.data;
    })
  }
  
  getAllCategory(){
    this.productService.getCategory().subscribe((res: any) =>{
        this.categoryList = res.data;
    })
  }
  
  onSave(){
    this.productService.saveProduct(this.productObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert("PRoduct Created....");
        this.getProducts()
      }else{
        alert(res.message)
      }
    })
  }

  onEdit(item: any){
    this.productObj = item;
    this.openSidePanel();
  }

  openSidePanel(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
