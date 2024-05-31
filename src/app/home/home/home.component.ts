import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('scroller', { static: true }) scroller!: ElementRef;
  @ViewChild('scroller', { static: true }) catogory!: ElementRef;
  @ViewChild('scroller', { static: true }) topSelling!: ElementRef;
  public isMobile:boolean=false;
  public mockData=[{
    prodName:'TSS Orginals: Beach vibes',
    catogory:'Tshirts',
    price:999,
    image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1684567449_6796443.jpg?format=webp&w=300&dpr=2.0'
  },{
    prodName:'Superman: The Man of steel',
    catogory:'Tshirts',
    price:640,
    image:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1685076567_2757578.jpg?format=webp&w=300&dpr=2.0"
  },{
    prodName:'Batman: The super villan',
    catogory:'oversized',
    price:599,
    image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1689146727_9176028.jpg?format=webp&w=300&dpr=2.0'
  },{
    prodName:'Truck Art: Deadpool',
    catogory:'oversized',
    price:599,
    image:'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1682163774_8687418.jpg?format=webp&w=300&dpr=2.0'
  }]
  constructor(){}

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem('isMobile')!)==true){
      this.isMobile=true;
    }
  }
  public scrollLeft() {
    this.scroller.nativeElement.scrollBy({ left: -400, behavior: 'smooth' });
  }

  public scrollRight() {
    this.scroller.nativeElement.scrollBy({ left: 400, behavior: 'smooth' });
  }
  public scroll(){

  }
}
