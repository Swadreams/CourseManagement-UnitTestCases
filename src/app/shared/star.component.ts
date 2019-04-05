import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating : number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<any> = new EventEmitter();

  ngOnChanges() {     
    this.starWidth = this.rating * 75 / 5;
  }
  
  starClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);    
  }

}
