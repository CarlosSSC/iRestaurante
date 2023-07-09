import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cart-screen',
  templateUrl: './cart-screen.page.html',
  styleUrls: ['./cart-screen.page.scss'],
})
export class CartScreenPage implements OnInit {
  @ViewChild('productList', { static: true }) productList!: ElementRef;

  products = [
    {
      name: 'Product 1',
      quantity: 1,
      price: '$10',
      imageUrl: 'assets/images/itemInfo.jpeg',
    },
    {
      name: 'Product 2',
      quantity: 2,
      price: '$20',
      imageUrl: 'assets/images/itemInfo.jpeg',
    },
    {
      name: 'Product 3',
      quantity: 3,
      price: '$30',
      imageUrl: 'assets/images/itemInfo.jpeg',
    },
  ];

  constructor() {}

  ngOnInit() {
    this.generateProductElements();
  }

  generateProductElements() {
    const productListElement = this.productList.nativeElement;

    this.products.forEach((product) => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('product-item');

      const image = document.createElement('img');
      image.classList.add('item-image');
      image.src = product.imageUrl;
      image.alt = product.name;

      const textDiv = document.createElement('div');
      textDiv.classList.add('product-info');

      const itemName = document.createElement('p');
      itemName.textContent = product.name;

      const itemQuantity = document.createElement('p');
      itemQuantity.textContent = `Quantity: ${product.quantity}`;

      const itemPrice = document.createElement('p');
      itemPrice.textContent = `Price: ${product.price}`;

      textDiv.appendChild(itemName);
      textDiv.appendChild(itemQuantity);
      textDiv.appendChild(itemPrice);

      itemDiv.appendChild(image);
      itemDiv.appendChild(textDiv);

      productListElement.appendChild(itemDiv);
    });
  }
}
