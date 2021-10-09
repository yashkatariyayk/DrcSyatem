import { Component } from '@angular/core';

import { QuizComponent } from './quiz/quiz.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  JSONDatas = [
    { username: "admnin", password: "admin@123" }
  ]
  ngOnInit() {
    localStorage.setItem("datas", JSON.stringify(this.JSONDatas));

    let data = JSON.parse(localStorage.getItem("datas"));
  }
}
