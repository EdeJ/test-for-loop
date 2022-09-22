import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
})
export class movieComponent implements OnInit {
  @Input() movie = '';
  @Output() onDelete = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  deleteMovie() {
    this.onDelete.emit();
  }
}
