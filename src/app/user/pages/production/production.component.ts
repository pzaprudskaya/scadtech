import { Component, OnInit } from '@angular/core';
import {FeedbackWindowComponent} from '../../components/feedback-window/feedback-window.component';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.sass']
})
export class ProductionComponent implements OnInit {
  headline = 'Продукция';
  closeResult: string;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }
  open() {
    this.modalService.open(FeedbackWindowComponent, {ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
