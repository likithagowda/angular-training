import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { FilterPipe } from '../shared/pipes/filter.pipe';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit, OnChanges {
  @Input() products;
  @Output() filteredResult: EventEmitter<any> = new EventEmitter<any>();
  public searchKeyword;
  constructor(private filterPipe: FilterPipe) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.filterProducts(this.products, this.searchKeyword);
  }

  filterProducts(products, searchKeyword) {
    const result = this.filterPipe.transform(products, searchKeyword);
    this.filteredResult.emit(result);
  }

  removeNotInStock(checkbox) {
    if (checkbox.checked) {
      const instockedproduct = this.products.filter(item => {
        return item.stocked;
      });
      this.filterProducts(instockedproduct, this.searchKeyword);
    }
    else {
      this.filterProducts(this.products, this.searchKeyword);
    }
  }

}
