import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { CategoryHeadingsComponent } from './category-headings/category-headings.component';
import { ProductsComponent } from './products/products.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ProductTableComponent,
    CategoryHeadingsComponent,
    ProductsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
