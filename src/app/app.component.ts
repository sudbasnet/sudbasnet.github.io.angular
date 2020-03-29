import { Component } from '@angular/core';
import { DIALOGS } from './dialogs';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DialogService]
})
export class AppComponent {
  title = 'sudbasnet';
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
    console.log(DIALOGS);
  }

  onTabSelect(tab: string) {
    if (tab === 'about') {
      this.currentTab = 'about';
    } else {
      this.currentTab = 'default';
    }
  }

}
