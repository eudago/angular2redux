import { Component } from '@angular/core';
import { select } from 'ng2-redux';
import { CounterActions } from './actions/counter-actions';
import { CurseActions } from './actions/curse-actions';
import {Observable} from 'rxjs/Rx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  @select() counter$: Observable<number>;
  @select() curse$: Observable<number>;

  constructor(private counterActions: CounterActions,private curseActions: CurseActions) {
    counterActions.increment()
  }
}
