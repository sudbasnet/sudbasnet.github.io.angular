import { Component, OnInit, Input } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-select-tab',
  templateUrl: './select-tab.component.html',
  styleUrls: ['./select-tab.component.css']
})
export class SelectTabComponent implements OnInit {
  @Input() currentTab;
  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  onTabSelect(tab: string) {
    this.dialogService.tabSelected.emit(tab);
  }
}
