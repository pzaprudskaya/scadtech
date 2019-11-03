import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from '../../models/news-page.model';
import {ProductsService} from '../../services/products.service';
import {IProduct} from '../../models/products.model';

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
  product: IProduct;

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
      this.productForm.controls.title.setValue('');
      this.productForm.controls.content.setValue('');
    } else {
      this.state = false;
      this.productService.getProduct(this.route.snapshot.params.id).subscribe((product: IProduct) => {
        this.product = product[0];
        this.productForm.controls.title.setValue(this.product.title);
        this.productForm.controls.content.setValue(this.product.content);
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
    this.product.title = this.productForm.value.title;
    this.product.content = this.productForm.value.content;
    this.productService.updateProduct(this.product).subscribe(() => console.log('Update!'));
  }
}

