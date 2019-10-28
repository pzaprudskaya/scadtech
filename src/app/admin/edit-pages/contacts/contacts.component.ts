import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-contacts',
  styleUrls: ['./contacts.component.sass'],
  templateUrl: './contacts.component.html',
})
export class EditContactsComponent implements OnInit {
  contacts = [
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/cc9/556_263_1/cc9adc876132c6ac5deaedfc1308cac6.jpg',
      name: 'Главный офис в Москве',
      number: '+7 495 374 80-32',
      secondNumber: '',
      address: '129110, Москва, Олимпийский проспект, д. 16, стр. 5' ,
      fax: '+7 495 646 8538',
      email: 'info@scad.su'
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/7a4/556_263_1/7a48d5e5f216bf834968a326ba821f3d.jpg',
      name: 'Офис в Тольятти',
      number: '+7 8482 65-03-24',
      secondNumber: ' +7 8482 65-03-27',
      address: '445004, Тольятти, ул. Базовая, д. 28 ' ,
      fax: '',
      email: 'info@scad.su'
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/069/556_263_1/069666c032ba6a6a427da49cb634e349.jpg',
      name: 'Офис в Нижнем Новгороде',
      number: '+7 831 262-18-34, доб. 5400',
      secondNumber: '',
      address: '603006, Нижний Новгород, ул. Ковалихинская, д. 8, БЦ «Центр Международной торговли», оф. № 612,613,619' ,
      fax: '',
      email: 'info@scad.su'
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/99b/556_263_1/99b7edb9f915fd66de50c63dfec9eb25.jpg',
      name: 'Офис в Уфе',
      number: '+7 347 291-26-90, доб. 200',
      secondNumber: '',
      address: '450022, Республика Башкортостан, Уфа, ул.&nbsp;Менделеева, д. 134/7' ,
      fax: '',
      email: 'info@scad.su'
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/e0f/556_263_1/e0fb0d0d4df901668245747d447b6f7d.jpg',
      name: 'Офис в Томске',
      number: '+7 3822 90-45-25',
      secondNumber: '',
      address: '634041, Томск, Кирова проспект, д. 51а, стр. 5, оф. 528–530' ,
      fax: '',
      email: 'info@scad.su'
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/171/556_263_1/171366fbb86474b9256997314ef6596a.jpg',
      name: 'Офис в Тюмени',
      number: '+7 495 374 80-32, доб. 5901, 5902',
      secondNumber: '',
      address: '625003, г. Тюмень, ул. Советская, д.3 ' ,
      fax: '',
      email: 'info@scad.su'
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/52e/556_263_1/52e28224de7b10b1fc6e5c6678e7790f.jpg',
      name: 'Офис в Самаре',
      number: '+7 846 379-21-84',
      secondNumber: '',
      address: '443086, 443086, Самарская, г.Самара, ул.Скляренко, д. 26' ,
      fax: '',
      email: 'info@scad.su'
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/6c8/556_263_1/6c8dc973e88249f9cbe7f60412150cd6.jpg',
      name: 'Офис в Хабаровске',
      number: ' +7 495 374 80-32, доб. 5100',
      secondNumber: '',
      address: '680000, Хабаровск, ул. Калинина, 8' ,
      fax: '',
      email: 'info@scad.su'
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/8a5/556_263_1/8a52f1554c85752006961daf5ef0788f.jpg',
      name: 'ООО «ТехноКом»',
      number: '+7 8422 55-44-67',
      secondNumber: '',
      address: 'Ульяновск, ул. Краснопролетарская, д.34' ,
      fax: '',
      email: 'info@scad.su'
    },
    {
      image: 'http://scadtech.ru/upload/iblock/a9e/a9ee0a3c46b7758202a144b54b2beb2a.jpg',
      name: 'Единый сервисный центр',
      number: '+7 499 288-82-51',
      secondNumber: '',
      address: '' ,
      fax: '',
      email: 'service@scad.su'
    }
  ];
  constructor() {}

  ngOnInit() {}
  add() {
    const obj = {
      image: (document.getElementById('image') as HTMLInputElement).value,
      name: (document.getElementById('name') as HTMLInputElement).value,
      number: (document.getElementById('number') as HTMLInputElement).value,
      secondNumber: (document.getElementById('secondNumber') as HTMLInputElement).value,
      address: (document.getElementById('address') as HTMLInputElement).value,
      fax: (document.getElementById('fax') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value
    };
    this.contacts.push(obj);
  }
  delete(value) {
    this.contacts.forEach((item, i) => {
      if (item.name === value.name) {
        this.contacts.splice(i, 1);
      }
    });
  }
}
