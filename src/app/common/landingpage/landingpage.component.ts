import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  public isMobile: boolean = false;

  constructor() {
    this.checkScreenSize();
  }

  ngOnInit(): void {}

  public checkScreenSize() {
    this.isMobile = window.innerWidth < 1054; // Adjust the threshold as needed
    localStorage.setItem('isMobile','true');
    console.log(this.isMobile);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }
}
