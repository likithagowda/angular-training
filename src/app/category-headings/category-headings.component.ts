import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-headings',
  templateUrl: './category-headings.component.html',
  styleUrls: ['./category-headings.component.css']
})
export class CategoryHeadingsComponent implements OnInit {
  @Input() category;

  constructor() { }

  ngOnInit(): void {
  }



}
