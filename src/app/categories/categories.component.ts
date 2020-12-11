import { Component, OnInit } from '@angular/core';
import {Category} from '../stockcontrol/models/category.model';
import {Router} from '@angular/router';
import {CategoryService} from '../stockcontrol/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  opened: boolean;
  categories: Category[];

  constructor(private categoryService: CategoryService, private router: Router) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.categoryService.getCategories().subscribe(category => {
      console.log(category);
      this.categories = Object.values(category);
      console.log(this.categories);
    });
  }

}
