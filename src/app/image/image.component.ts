import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  // recieve object from parrent
  @Input() image!: any; 

  // send string to parrent
  @Output() onRatingClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  formatDate(d:Date): string {
    const datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
    return datestring;
  }

  // Emit 'inc' or 'dec' to parrent
  updateRating(updateRating: string): void {
    this.onRatingClick.emit(updateRating);
  }

}
