import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  image = {
    name:'', 
    url:'',
    createdAt: new Date(),
    rating: 0
  };

  ngOnInit(): void {
  }

  getImgNameAndUrl(event: {imgName: string, imgUrl: string}) {
  // getImgNameAndUrl(event: any) {
    console.log(`object from Form element:${event.imgName}, ${event.imgUrl}`);

    this.image.name = event.imgName;
    this.image.url = event.imgUrl;
    this.image.createdAt = new Date();
    this.image.rating = 0;
  }

  updateRating(event: string): void {
    if(event === 'inc') {
      if(this.image.rating++ >= 10) {
        this.image.rating = 10;
      }
    } 
    else if(event === 'dec') {
      if(this.image.rating-- <= 0) {
        this.image.rating = 0;
      }
    }
    console.log(`Rating: ${this.image.rating}`);
  }
}
