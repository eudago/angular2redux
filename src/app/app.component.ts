import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import {Observable} from 'rxjs/Rx'
import { CounterActions } from './actions/counter-actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @select() counter$: Observable<number>;

  constructor(private counterActions: CounterActions) {

  }

  increment(){
    this.counterActions.increment()
  }
}
