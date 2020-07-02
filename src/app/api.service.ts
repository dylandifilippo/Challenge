import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Joke } from './chuck.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  chuckNorris = 'https://api.chucknorris.io/jokes/random';
  randomNumber = 'http://localhost:3001/api/number';

  constructor(private http: HttpClient) { }

  getJoke() {
    return this.http.get(this.chuckNorris);
  }

  getRandomNumber() {
    return this.http.get(this.randomNumber);
  }
}
