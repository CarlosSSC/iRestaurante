import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'; // Update the path to the ProductsService

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.page.html',
  styleUrls: ['./main-screen.page.scss'],
})
export class MainScreenPage implements OnInit {
  buttons: any[] = []; // Array to store product data

  selectedButtonIndex: number | null = null;

  constructor(private productService: ProductsService) {} // Inject the ProductsService

  ngOnInit() {
    // Call the function to fetch products when the component is initialized
    this.fetchProducts();
  }

  fetchProducts() {
    // Call the getAllProducts function of the ProductsService to fetch product data
    this.productService.getAllProducts().subscribe(
      (products) => {
        console.log(products); // Log the products data in the browser console
        // Assuming the API returns an array of products in the 'data' property
        this.buttons = products;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  selectButton(index: number) {
    if (this.selectedButtonIndex === index) {
      this.selectedButtonIndex = null; // Dehighlight the button if it's already selected
    } else {
      this.selectedButtonIndex = index; // Highlight the button if it's not selected
    }
  }
}
