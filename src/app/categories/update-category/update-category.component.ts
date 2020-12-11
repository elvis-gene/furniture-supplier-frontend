import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Category} from '../../stockcontrol/models/category.model';
import {CategoryService} from '../../stockcontrol/services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  oldCategory: Category;

  constructor(private categoryService: CategoryService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getCategory();
  }

  updateCategory(form: NgForm){
    console.log('on submit: ', form.value);
    this.categoryService.updateCategory(this.oldCategory).subscribe(data => {
        console.log(data);
      }
    );
  }

  getCategory(){
    // this.product = this.productService.getProduct(id);
    this.categoryService.getCategory(Number(this.route.snapshot.params.id)).subscribe(category => {
      this.oldCategory = category;
      console.log('Product to update: ' + category);
    });
  }

  cancel() {
    this.router.navigate(['staff/stock/categories']).then(r => {
      console.log((r));
    });
  }
}
