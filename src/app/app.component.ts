import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log('Method not implemented.');
  }
  counter: number = 0;
  increase(count: number=1) {
    this.counter += count;
  }
  // getCounter() {
  //   return this.counter;
  // }

  get Counter () {
    return (
      this.counter.toString() + (this.counter < 5 ? "cok az " : "cok fazla")
    )
  }
}
