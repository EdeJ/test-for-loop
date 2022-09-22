import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  movies = ['the game', 'big fish', 'titanic', 'The Wizard of Oz'];

  deleteMovieFromParent(i: number) {
    this.movies.splice(i, 1);
  }
}
