import {Component, Input, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating;
  starWidth;
  @Output() ratingClicked = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * (86 / 5);
  }

  onClick() {
    this.ratingClicked.emit(`This rating ${this.rating} is clicked`);
  }
}
