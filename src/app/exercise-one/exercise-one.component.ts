import { Component, OnInit } from '@angular/core';
// import { Joke } from '../chuck.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css']
})
export class ExerciseOneComponent implements OnInit {
  jokes: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getJoke()
      .subscribe(data => this.jokes.push(data));
  }

  refresh() {
    window.location.reload();
  }

}
