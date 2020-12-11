import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Category} from '../../stockcontrol/models/category.model';
import {CategoryService} from '../../stockcontrol/services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  name: FormControl;
  description: FormControl;
  category: Category;
  newCategoryForm: FormGroup;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.description = new FormControl('', Validators.required);

    Validators.maxLength(500);

    this.newCategoryForm = new FormGroup({
      name: this.name,
      description: this.description,
    });
  }

  createCategory(formValues) {
    this.category = new Category();

    this.category.categoryName = formValues.name;
    this.category.description = formValues.description;

    this.categoryService.createCategory(this.category)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  cancel() {
    this.router.navigate(['staff/stock/categories']).then(r => {
      console.log(r);
    });
  }

}
