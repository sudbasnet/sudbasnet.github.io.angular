import { Component, OnInit, Input } from '@angular/core';
import { DIALOGS } from '../../dialogs';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  dialogs = DIALOGS;
  @Input() questions;

  ngOnInit() {
  }

}
