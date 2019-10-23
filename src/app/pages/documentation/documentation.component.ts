import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.sass']
})
export class DocumentationComponent implements OnInit {
  headline = 'Разрешительная документация';
  documents = [
    {
      title: "Выписка из реестра членов саморегулируемой организации",
      number: "№0000278 (СРО-С-039-18092009)",
      date: "25/12/2017",
      descriptionIssuedBy: 'Саморегулируемая организация Ассоциация строительных компаний "Межрегиональный строительный комплекс"',
      descriptionTypesOfJobs: "Строительство",
      link: "/upload/iblock/276/27698bc4f5d0cb5ff299acb5f06256ab.pdf",
      validity: ""
    },
    {
      title: "Выписка из реестра членов саморегулируемой организации",
      number: "№54332 (СРО-П-037-26102009)",
      date: "22/12/2017",
      descriptionIssuedBy: 'Союз саморегулируемая организация "Объединение инженеров проектировщиков"',
      descriptionTypesOfJobs: "Проектирование",
      link: "/upload/iblock/c5b/c5b46adca389498e3b009f0f2a2a9840.pdf",
      validity: ""
    },
    {
      title: "Сертификат соответствия системы менеджмента безопасности труда и охраны здоровья ГОСТ P 54934-2012/OHSAS 18001:2007(ISO 18001:2007)",
      number: "№FSK.RU.0002.F0005180",
      date: "26/06/2017",
      descriptionIssuedBy: 'ООО "ЕВРАЗИЙСКИЙ СОЮЗ СЕРТИФИКАЦИИ"',
      descriptionTypesOfJobs: "",
      link: "/upload/iblock/f41/f41c15cfb560216eb1ac70522c1257b2.pdf",
      validity: "06/2020"
    },
    {
      title: "Сертификат соответствия системы экологического менеджмента ГОСТ Р ИСО 14001-2007 (ISO 14001:2004)",
      number: "№FSK.RU.0002.F0002208",
      date: "18/05/2016",
      descriptionIssuedBy: 'ООО "ЕВРАЗИЙСКИЙ СОЮЗ СЕРТИФИКАЦИИ"',
      descriptionTypesOfJobs: "",
      link: "/upload/iblock/51d/51d836968b5a8cc7412af69e1dd2d745.pdf",
      validity: "05/2019"
    },
    {
      title: "Сертификат соответствия системы менеджмента качества ГОСТ ISO 9001-2011 (ISO 9001:2008)",
      number: "№FSK.RU.0002.F0002207",
      date: "18/05/2016",
      descriptionIssuedBy: 'ООО "ЕВРАЗИЙСКИЙ СОЮЗ СЕРТИФИКАЦИИ"',
      descriptionTypesOfJobs: "",
      link: "/upload/iblock/93e/93e27a66567f1f99750963f5c5dc6ab2.pdf",
      validity: "05/2019"
    },
    {
      title: "Сертификат соответствия системы энергетического менеджмента ГОСТ P ISO 50001-2012 (ISO 50001-2001)",
      number: "№FSK.RU.0002.F0002232",
      date: "18/05/2016",
      descriptionIssuedBy: 'ООО "ЕВРАЗИЙСКИЙ СОЮЗ СЕРТИФИКАЦИИ"',
      descriptionTypesOfJobs: "",
      link: "/upload/iblock/bfe/bfe14b438455e50783357bc69422534b.pdf",
      validity: "05/2019"
    },
    {
      title: "Лицензия на осуществление деятельности по монтажу, техническому обслуживанию и ремонту средств обеспечения пожарной безопасности зданий и сооружений ",
      number: "№77-Б/02608",
      date: "17/08/2015",
      descriptionIssuedBy: "Министерство РФ по делам гражданской обороны, чрезвычайным ситуациям и ликвидации последствий " +
        "стихийных бедствий",
      descriptionTypesOfJobs: "",
      link: "/upload/iblock/079/07919b4f9139343f49b6ba32cce7f909.pdf",
      validity: ""
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
