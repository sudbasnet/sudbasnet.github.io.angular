import { Component } from '@angular/core';
import { PageSelectService } from './page-select.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PageSelectService],
})
export class AppComponent {
  title = 'sudbasnet';
  currentPage = 'home';

  constructor(private pageSelectService: PageSelectService) {
    pageSelectService.pageUpdated.subscribe((page: string) => {
      this.currentPage = page;
    })
  }
  ngOnInit() {
  }
}
