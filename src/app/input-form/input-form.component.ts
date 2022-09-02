import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  constructor() { }

  image = {
    name:'', 
    url:''
  };

  @Output() onButtonClick = new EventEmitter<string>();

  getImgNameAndUrl(imageName: HTMLInputElement, imageUrl: HTMLInputElement) {
    console.log(imageName.value);
    console.log(imageUrl.value);
  
    this.image.name = imageName.value;
    this.image.url = imageUrl.value;

    // Clear Input Form after button pressed
    imageName.value = '';
    imageUrl.value = '';

    this.onButtonClick.emit(this.image.name); 
  }

  ngOnInit(): void {
  }

}
