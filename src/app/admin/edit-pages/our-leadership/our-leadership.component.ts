import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-edit-our-leadership',
  styleUrls: ['./our-leadership.component.sass'],
  templateUrl: './our-leadership.component.html',
})
export class EditOurLeadershipComponent implements OnInit {
  leaderships = [
    {
      image: 'http://scadtech.ru/upload/iblock/cc0/cc08a823588bab71a292c1e553fb05c9.jpg',
      name: 'Азаров Дмитрий Владимирович',
      post: 'Президент Группы компаний "СКАД тех"\n' +
        'Председатель Совета директоров ГК "СКАД тех"'
    },
    {
      image: 'http://scadtech.ru/upload/iblock/747/74720f00644ecabba10f0ffe29c03796.jpg',
      name: 'Войтенко Игорь Владимирович',
      post: 'Генеральный директор АО "СКАД тех",\n' +
        'ООО "СКАД тех Инжиниринг", ООО "НПП "СКАД тех"\n' +
        'Член Совета директоров Группы компаний "СКАД тех"'
    },
    {
      image: 'http://scadtech.ru/upload/iblock/9cc/9cc647dfa791d0d130820067eae80512.jpg',
      name: 'Тафинцев Руслан Валерьевич',
      post: 'Коммерческий директор Группы компаний "СКАД тех"\n' +
        'Член Совета директоров Группы компаний "СКАД тех"'
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/954/828_657_1/9546bb5baa15b8de82db913b02f3a45d.jpg',
      name: 'Кушнерук Евгений Александрович',
      post: 'Директор Департамента АСУ АО "СКАД тех"\n' +
        'Член Совета директоров Группы компаний "СКАД тех"'
    },
    {
      image: 'http://scadtech.ru/upload/iblock/d07/d07418ed32823b9a191d8d7a72320ee3.jpg',
      name: 'Соловьева Ирина Александровна',
      post: 'Финансовый директор Группы компаний "СКАД тех"\n' +
        'Член Совета директоров Группы компаний "СКАД тех"',
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/4ca/828_657_1/4ca55375eeba13dd30fc2188e5c0ee4b.jpg',
      name: 'Харьковский Максим Александрович',
      post: 'Заместитель генерального директора АО "СКАД тех"/\n' +
        'Директор Юридического департамента\n' +
        'Член Совета директоров Группы компаний "СКАД тех"'
    },
    {
      image: 'http://scadtech.ru/upload/iblock/b27/b2742d6dd365fd93f33288ca7cb90a52.jpg',
      name: 'Кушнерук Сергей Александрович',
      post: 'иректор ОП АО "СКАД тех" г. Уфа\n' +
        'Член Совета директоров Группы компаний "СКАД тех"'
    },
    {
      image: 'http://scadtech.ru/upload/iblock/c0d/c0df8500cfdc29951729c5890122a787.jpg',
      name: 'Ключников Андрей Витальевич',
      post: 'Директор Департамента внутренней безопасности\n' +
        'АО "СКАД тех"\n' +
        'Член Совета директоров Группы компаний "СКАД тех"'
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/705/828_657_1/70582b7a380597210d8cd55f26d4c2bb.jpg',
      name: 'Панькова Наталья Сергеевна',
      post: 'Директор Департамента управления персоналом\n' +
        'ГК "СКАД тех"\n' +
        'Член Совета директоров Группы компаний "СКАД тех"'
    },
    {
      image: 'http://scadtech.ru/upload/iblock/9f3/9f31311b4b3fe41313826638e55722df.jpg',
      name: 'Зайцев Александр Владимирович',
      post: 'Директор ОП АО "СКАД тех" г. Тольятти\n' +
        'Директор Производственного Департамента\n' +
        'Член Совета директоров Группы компаний "СКАД тех"'
    },
    {
      image: 'http://scadtech.ru/upload/iblock/3c7/3c7c281bf8c256021e6624f57a59d42e.jpg',
      name: 'Ляпунов Александр Владимирович',
      post: 'Директор Департамента МТО АО "СКАД тех"\n' +
        'Член Совета директоров Группы компаний "СКАД тех"'
    },
  ];
  constructor() {}

  ngOnInit() {
  }
  add() {
    const obj = {
      image: (document.getElementById('image') as HTMLInputElement).value,
      name: (document.getElementById('name') as HTMLInputElement).value,
      post: (document.getElementById('post') as HTMLInputElement).value,
    };
    this.leaderships.push(obj);
  }
  delete(leader) {
    this.leaderships.forEach((item, i) => {
      if (item.name === leader.name) {
        this.leaderships.splice(i, 1);
      }
    });
  }
}
