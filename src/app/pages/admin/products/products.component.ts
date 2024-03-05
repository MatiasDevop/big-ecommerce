import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  isSidePanelVisible: boolean = true;

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

  openSidePanel(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
