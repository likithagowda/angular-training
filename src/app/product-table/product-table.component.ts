import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit, OnChanges{
  @Input() products;
  public categories = [];
  public productList = {};

  constructor() { }

  ngOnInit(): void {
   this.findNumberOfCategories();
  }

  findNumberOfCategories() {
    this.categories = [];
    let lastCategory = null;
    this.products.forEach((product) => {
      if(product.category !== lastCategory) {
        this.categories.push(product.category);
        lastCategory = product.category
      }
    });
    this.groupProducts();
  }

  groupProducts() {
    for(let i=0; i<this.categories.length; i++) {
      let temp = [];
      this.products.forEach((product) => {
        if(product.category === this.categories[i]) {
          temp.push(product);
        }
      });
      this.productList[this.categories[i]] = temp;
      console.log(this.productList);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.findNumberOfCategories();
  }

}
