import {Component, OnInit} from '@angular/core';
import {FeedbackService} from '../../services/feedback.service';
import {IAllFeedbacks, IFeedback} from '../../models/feedback.model';
import {Router} from '@angular/router';
import {__importDefault} from "tslib";


@Component({
  selector: 'app-feedback-view',
  styleUrls: ['./feedback-view.component.sass'],
  templateUrl: './feedback-view.component.html',
})
export class FeedbackViewComponent implements OnInit {
  pageSizeFeedbacks = 4;
  countFeedbacks;
  page = 1;
  feedbacks: IFeedback[];

  constructor(private feedbackService: FeedbackService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.feedbacks = [];
    this.feedbackService.getFeedbacks(this.pageSizeFeedbacks, this.pageSizeFeedbacks * (this.page - 1)).subscribe((feedbacks: IAllFeedbacks) => {
      this.countFeedbacks = feedbacks.count;
      this.feedbacks = feedbacks.data;
    });
  }

  openFeedback(feedback: IFeedback) {
    feedback.unread = true;
    this.feedbackService.updateFeedback(feedback).subscribe(() => console.log('Update'));
    this.router.navigate(['/feedback', feedback._id]);
  }

  deleteFeedback(feedback) {
    this.feedbacks.forEach((item, i) => {
      if (item.name === feedback.name) {
        this.feedbacks.splice(i, 1);
      }
    });
    this.feedbackService.deleteFeedback(feedback).subscribe(() => console.log('Delete!'));
  }

  changePage(page) {
    this.feedbackService.getFeedbacks(this.pageSizeFeedbacks, this.pageSizeFeedbacks * (page - 1)).subscribe((feedbacks: IAllFeedbacks) => {
      this.feedbacks = feedbacks.data;
    });
  }
}
