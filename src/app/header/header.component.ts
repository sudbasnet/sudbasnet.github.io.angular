import { Component, OnInit, Input } from '@angular/core';
import { PageSelectService } from '../page-select.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() currentPage;
  constructor(private pageSelectService: PageSelectService) { }

  ngOnInit(): void {
  }

  onSelectPage(page: string) {
    this.pageSelectService.pageUpdated.emit(page);
  }

}
