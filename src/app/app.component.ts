import { Component } from '@angular/core';
import { PageSelectService } from './page-select.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PageSelectService],
})
export class AppComponent {
  title = 'sudbasnet';
  currentPage: string;

  constructor(private router: Router) {
    // pageSelectService.pageUpdated.subscribe((page: string) => {
    //   this.currentPage = page;
    router.events.subscribe(val => {
      this.currentPage = router.url;
    })

  }

  ngOnInit() {
  }
}
