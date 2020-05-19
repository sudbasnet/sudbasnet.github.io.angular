import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sudbasnet';
  currentPage: string;

  constructor(private router: Router) {
    router.events.subscribe(val => {
      this.currentPage = router.url.substring(1);
    })

  }

  ngOnInit() {
  }
}
