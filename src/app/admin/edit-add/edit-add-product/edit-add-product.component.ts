import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() notify: EventEmitter<any> = new EventEmitter();

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
        Object.keys(this.f).forEach(key => this.f[key].setValue(product[key]));
      });
    }
  }

  addProduct() {
    this.productForm.markAllAsTouched();

    if (this.productForm.invalid) {
      return;
    }
    this.productService.addProduct(this.productForm.value).subscribe(() => {
      this.notify.emit({type: 'success', message: 'Запись добавлена!'});
    }, () => this.notify.emit( {type: 'error', message: 'Ошибка добавления!'} ) );
  }

  updateProduct() {
    this.productForm.markAllAsTouched();
    if (this.productForm.invalid) {
      return;
    }
    this.productService.updateProduct(this.route.snapshot.params.id, this.productForm.value).subscribe(() => {
      this.notify.emit({type: 'success', message: 'Запись обновлена!'});
    }, () => this.notify.emit( {type: 'error', message: 'Ошибка обновления!'} ) );
  }
}

