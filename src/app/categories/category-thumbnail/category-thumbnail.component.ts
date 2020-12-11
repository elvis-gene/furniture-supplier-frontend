import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../stockcontrol/models/category.model';

@Component({
  selector: 'app-category-thumbnail',
  templateUrl: './category-thumbnail.component.html',
  styleUrls: ['./category-thumbnail.component.css']
})
export class CategoryThumbnailComponent implements OnInit {
  @Input() category: Category;

  constructor() { }

  ngOnInit(): void {
  }

}
