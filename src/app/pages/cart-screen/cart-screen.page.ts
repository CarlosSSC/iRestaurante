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

      // Set image styles
      image.style.width = '115px';
      image.style.height = '97px';
      image.style.objectFit = 'cover';
      image.style.borderRadius = '20px';

      const textDiv = document.createElement('div');
      textDiv.classList.add('product-info');

      // set textDiv style
      textDiv.style.flexGrow = '1';
      textDiv.style.marginLeft = '10px';
      textDiv.style.display = 'inline-block';
      textDiv.style.paddingBottom = '20px';


      const itemName = document.createElement('p');
      itemName.textContent = product.name;

      // set itemName style
      itemName.style.fontWeight = 'bold';
      itemName.style.textTransform = 'Uppercase';
      itemName.style.margin = '0px';

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
