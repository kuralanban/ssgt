import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isMobile: boolean = false;

  constructor(private route:Router) {
    this.checkScreenSize();
   }

    public checkScreenSize() {
    this.isMobile = window.innerWidth < 1054; // Adjust the threshold as needed
    console.log(this.isMobile);

  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }
  public routeToSearch(){
    this.route.navigate(['navOptions/search'])
  }
}
