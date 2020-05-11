import { Component, OnInit } from '@angular/core';
import { DIALOGS } from './dialogs';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css'],
  host: { 'class': 'main' },
  providers: [DialogService]
})
export class MainHomeComponent implements OnInit {
  currentDialogKey = 'Start';
  dialog;
  currentTab: string = 'default';

  constructor(private dialogService: DialogService) {
    this.dialogService.questionUpdated.subscribe(
      (goto: string) => {
        this.currentDialogKey = goto;
        this.dialog = DIALOGS[this.currentDialogKey];
      }
    );
    this.dialogService.tabSelected.subscribe(
      (tab: string) => { this.currentTab = tab; }
    );
  }

  ngOnInit() {
    this.dialog = DIALOGS[this.currentDialogKey];
    // console.log(DIALOGS);
  }

  onTabSelect(tab: string) {
    if (tab === 'about') {
      this.currentTab = 'about';
    } else {
      this.currentTab = 'default';
    }
  }
}
