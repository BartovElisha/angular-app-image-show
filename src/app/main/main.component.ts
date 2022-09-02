import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  getImgNameAndUrl(event: any) {
    console.log(`object from Form element:${event.imgName}, ${event.imgUrl}`);

  }
}
