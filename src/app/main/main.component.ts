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
    url:''
  };

  ngOnInit(): void {
  }

  getImgNameAndUrl(event: {imgName: string, imgUrl: string}) {
  // getImgNameAndUrl(event: any) {
    console.log(`object from Form element:${event.imgName}, ${event.imgUrl}`);

    this.image.name = event.imgName;
    this.image.url = event.imgUrl;
  }
}
