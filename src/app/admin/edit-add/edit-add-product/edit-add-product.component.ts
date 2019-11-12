import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from '../../../shared/models/news-page.model';
import {IProduct} from '../../../shared/models/products.model';
import {ProductsService} from '../../../shared/services/products.service';

@Component({
  styleUrls: ['./edit-add-product.component.sass'],
  templateUrl: './edit-add-product.component.html',
})
export class EditAddProductComponent implements OnInit {

  productModel = {
    title: [null, [Validators.required]],
    content: ['<p>This is the initial content of the editor</p>', [Validators.required]],
  };
  state: boolean;
  events: IEvent[];
  productForm = this.fb.group(this.productModel);

  get f() {
    return this.productForm.controls as {
      [K in keyof (this[ 'productModel' ])]: AbstractControl;
    };
  }

  constructor( private fb: FormBuilder,
               private productService: ProductsService,
               private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.events = [];
    if (this.route.snapshot.params.id === 'add') {
      this.state = true;
      this.productForm.reset();
    } else {
      this.state = false;
      this.productService.getProduct(this.route.snapshot.params.id).subscribe((product: IProduct) => {
        this.productForm.reset(product[0]);
      });
    }
  }

  addProduct() {
    this.productForm.markAllAsTouched();

    if (this.productForm.invalid) {
      return;
    }
    this.productService.addProduct(this.productForm.value).subscribe((addProduct) => {
      this.events.push(addProduct);
    });
  }

  updateProduct() {
    this.productForm.markAllAsTouched();
    if (this.productForm.invalid) {
      return;
    }
    this.productService.updateProduct(this.route.snapshot.params.id, this.productForm.value).subscribe(() => console.log('Update!'));
  }
}

