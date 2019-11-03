import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {IAllProducts} from '../../models/products.model';
import {ProductionService} from '../../services/production.service';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {IAbout} from '../../models/about-company-page.model';

@Component({
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.sass']
})
export class EditProductionComponent implements OnInit {
  products;
  pageSize = 8;
  page = 1;
  countProducts;

  productionModel = {
    title: [null, [Validators.required]],
    content: ['<p>This is the initial content of the editor</p>', [Validators.required]],
  };
  production = this.fb.group(this.productionModel);
  about;
  get f() {
    return this.production.controls as {
      [K in keyof (this[ 'productionModel' ])]: AbstractControl;
    };
  }
  constructor(private fb: FormBuilder,
              private productsService: ProductsService,
              private productionService: ProductionService) {
  }

  ngOnInit() {
    this.products = [];
    this.productionService.getAbout().subscribe((about: IAbout[]) => {
      [this.about] = about;
      this.production.controls.title.setValue(this.about.title);
      this.production.controls.content.setValue(this.about.content);
    });
    this.productsService.getProducts(this.pageSize, this.pageSize * (this.page - 1)).subscribe((products: IAllProducts) => {
      this.countProducts = products.count;
      this.products = products.data;
    });
  }

  deleteItem(event) {
    this.products.forEach((item, i) => {
      if (item._id === event._id) {
        this.products.splice(i, 1);
      }
    });
    this.productsService.deleteProduct(event).subscribe(() => console.log('Delete!'));
  }

  changePage(page) {
    this.productsService.getProducts(this.pageSize, this.pageSize * (page - 1)).subscribe((products: IAllProducts) => {
      this.products = products.data;
    });
  }

  saveInformation() {
    this.about.title = this.production.value.title;
    this.about.content = this.production.value.content;
    this.productionService.updateAbout(this.about).subscribe(() => console.log('Update'));
  }
}
