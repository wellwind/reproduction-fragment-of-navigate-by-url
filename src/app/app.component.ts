import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {

  }

  // it's working
  navigate(): void {
    this.router.navigate(['target'], { fragment: 'test' });
  }

  // doesn't work
  navigateByUrl(): void {
    this.router.navigateByUrl('target', { fragment: 'test' });
  }
}
