import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogService } from '../../../dialog.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question;
  questionText: string;
  questionId: number;
  goTo: string;

  constructor(private dialogService: DialogService) {
  }

  ngOnInit() {
    this.questionText = "\u2217\t" + this.question['question'];
    this.questionId = this.question['id'];
    this.goTo = this.question['goto'];
  }

  onQuestionSelected() {
    this.dialogService.questionUpdated.emit(this.goTo);
  }

}
