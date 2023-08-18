import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-payment-screen',
  templateUrl: './payment-screen.page.html',
  styleUrls: ['./payment-screen.page.scss'],
})
export class PaymentScreenPage implements OnInit {
  @ViewChild('productList', { static: true }) productList!: ElementRef;

  products = [
    {
      name: 'Product 1',
      quantity: 1,
      price: '$10',
      imageUrl: 'assets/images/itemInfo.jpeg',
    },
    
  ];

  constructor() { }

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
      textDiv.style.paddingLeft = '75px';


      const itemName = document.createElement('p');
      itemName.textContent = product.name;

      // set itemName style
      itemName.style.fontWeight = 'bold';
      itemName.style.textTransform = 'Uppercase';
      itemName.style.margin = '0px';

      const itemQuantity = document.createElement('p');
      itemQuantity.textContent = `Quantity: ${product.quantity}`;

      const itemPrice = document.createElement('p');
      itemPrice.textContent = ` ${product.price}`;

      itemPrice.style.justifyContent = 'center';
      itemPrice.style.display = 'flex';

      textDiv.appendChild(itemName);
      textDiv.appendChild(itemQuantity);
      textDiv.appendChild(itemPrice);

      itemDiv.appendChild(image);
      itemDiv.appendChild(textDiv);

      productListElement.appendChild(itemDiv);
    });
  }
}
