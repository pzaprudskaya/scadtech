import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-partners-and-sertificates',
  styleUrls: ['./partners-and-sertificates.component.sass'],
  templateUrl: './partners-and-sertificates.component.html',
})
export class EditPartnersAndSertificatesComponent implements OnInit {
  partners = [
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/fb0/353_80_1/fb0e126458a6bf89e780d76285afa59c.png',
      name: 'Siemens',
      description: 'Ведущий поставщик продукции, услуг и комплексных решений для модернизации ключевых отраслей экономики и инфраструктуры.',
      file: ''
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/f76/353_80_1/f760f92296e827d5e084c5377b105665.png',
      name: 'B&R',
      description: 'Европейский производитель компонентов промышленной автоматизации.',
      file: ''
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/af5/353_80_1/af51be237f2578045bdf70258f8e602f.png',
      name: 'Schneider Electric',
      description: 'Ведущий разработчик и поставщик комплексных энергоэффективных решений для энергетики и инфраструктуры, промышленных предприятий, объектов гражданского и жилищного строительства, а также центров обработки данных.',
      file: ''
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/872/353_80_1/8721313752fce5bf935e610fe0a7e7fc.png',
      name: 'ABB',
      description: 'Мировой технологический лидер в областях электрооборудования, робототехники и механизмов движения, промышленной автоматизации и электрических сетей.',
      file: ''
    },
    {
      image: 'http://scadtech.ru/upload/iblock/81b/81b80d85ec1650aa96c898d9408be014.gif',
      name: 'Phoenix Contact',
      description: 'Производитель электротехнического оборудования для промышленных отраслей.',
      file: ''
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/c99/353_80_1/c99947aef8a07280bbde3de426c8d2f8.png',
      name: 'ООО "Прософт-Системы"',
      description: 'Компания занимается разработкой, поставкой и внедрением под ключ высокотехнологичных приборов и систем автоматизации для энергетической, нефтегазовой, металлургической и других отраслей промышленности.',
      file: ''
    },
    {
      image: 'http://scadtech.ru/upload/iblock/c54/c541cf3d5083b4e8b0efae4692d16ad2.png',
      name: 'Fujitsu',
      description: 'Поставщик инфраструктурных решений на рынке информационных и коммуникационных технологий.',
      file: ''
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/325/353_80_1/3254a617cf753ccf6d510b08e34f81a4.png',
      name: 'EATON',
      description: 'Производитель электротехнического и гидравлического оборудования, автокомплектующих, компонентов для авиационной промышленности.',
      file: ''
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/07d/353_80_1/07dbe6e3470e91bbe1c48c5ece73aef9.png',
      name: 'АО "Нефтеавтоматика"',
      description: 'Разработка и внедрение технологий в сфере промышленной автоматизации.',
      file: ''
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/867/353_80_1/867c77ae66a77f3a1a99cfd5cf0b7196.png',
      name: 'Hewlett-Packard',
      description: 'Поставщик аппаратного и программного обеспечения.',
      file: ''
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/6aa/353_80_1/6aacbcb9874bdd4738d289e501212039.gif',
      name: 'MARGEN S.p.A.',
      description: 'Производство электротехнического оборудования.',
      file: ''
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/00b/353_80_1/00b3e55806b38ff9b194275d877e20e9.png',
      name: 'Rittal',
      description: 'Компания разрабатывает и создает решения в области распределительных шкафов, электрораспределения, контроля микроклимата, IT-инфраструктуры.',
      file: ''
    },
    {
      image: 'http://scadtech.ru/upload/iblock/4c1/4c144cb84326dec029118605ad3bb347.png',
      name: 'ООО "Торговый Дом "Взлет"',
      description: 'Разработка и производство приборов учета расхода жидкостей, газа и тепловой энергии.<',
      file: ''
    },
    {
      image: 'http://scadtech.ru/upload/resize_cache/iblock/138/353_80_1/13878dfd08a202bf4059f1a6a3facecb.png',
      name: 'CISCO',
      description: 'Компания разрабатывает решения по направлениям: магистральная маршрутизация, коммутация и услуги; решения для совместной работы; виртуализация центров обработки данных и облачные вычисления; видеотехнологии; архитектуры для трансформации бизнеса.',
      file: ''
    },
  ];
  constructor() {}

  ngOnInit() {  }
  add() {
    const obj = {
      image: (document.getElementById('image') as HTMLInputElement).value,
      name: (document.getElementById('name') as HTMLInputElement).value,
      description: (document.getElementById('description') as HTMLInputElement).value,
      file: (document.getElementById('file') as HTMLInputElement).value,
    };
    this.partners.push(obj);
  }
  delete(leader) {
    this.partners.forEach((item, i) => {
      if (item.name === leader.name) {
        this.partners.splice(i, 1);
      }
    });
  }
}
