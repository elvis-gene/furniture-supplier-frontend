import { Component, OnInit } from '@angular/core';
import {Product} from '../../stockcontrol/models/product.model';
import {ProductService} from '../../stockcontrol/services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../stockcontrol/models/category.model';
import {CategoryService} from '../../stockcontrol/services/category.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  category: Category;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.categoryService.getCategory(Number(this.route.snapshot.params.id)).subscribe(category => {
      this.category = category;
      console.log(category);
    });
  }

  deleteCategory() {
    this.categoryService.deleteCategory(Number(this.route.snapshot.params.id)).subscribe(data => {
      console.log(data);
    });

  }
}
