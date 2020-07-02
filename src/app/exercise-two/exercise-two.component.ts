import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css']
})
export class ExerciseTwoComponent implements OnInit {

  numberInput: number = 10;
  randomNumber: any = [];
  attempts: number = 0;
  counter: number = 0;
  secretNumber: number = 0;
  failed: string = "";
  success: string = "";

  newGame = () => {
    const maxTries = 20;
    // const secretNumber = this.numberInput
    const secretNumber = Math.floor(Math.random() * 50000) + 1;
    let counter = 0;
    let attempts = 0;

    while (attempts !== secretNumber) {
      attempts = Math.floor(Math.random() * 50000) + 1;
      counter += 1;
      let fail = "The CPU failed to find in less than 20 tries"
      let success = 'Yaaaaaay the CPU did it!'
      if (counter > maxTries) {
        return fail
      }

      if (attempts === secretNumber) {
        return success
      }

      this.attempts = attempts;
      this.counter = counter;
      this.failed = fail;
      this.success = success;
      this.secretNumber = secretNumber;

      console.log(attempts);
      console.log(counter);
      console.log(secretNumber);
    }
  };

  constructor(updates: SwUpdate, private apiService: ApiService) {
    updates.available.subscribe(event => {

      updates.activateUpdate().then(() => document.location.reload());

    })
  }

  ngOnInit() {
    this.apiService.getRandomNumber()
      // .subscribe(data => console.log(data));
      .subscribe(data => this.randomNumber.push(data))
  }

}
