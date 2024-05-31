import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public isNavbar!: boolean;

  constructor( private route: Router){}
  ngOnInit(): void {
    this.toggleNavbar();
  }

  public toggleNavbar() {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.urlAfterRedirects;
        console.log('URL :',currentUrl);

        if (currentUrl === '/') {
          this.isNavbar = false;
        } else {
          this.isNavbar = true;
        }

      }
    });
  }
}
