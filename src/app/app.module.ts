import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Counter } from './count.component';

import { NgReduxModule, NgRedux, DevToolsExtension } from 'ng2-redux';
import { rootReducer } from '../store/reducers';

import { CounterActions } from './actions/counter-actions';


interface IAppState {

};

@NgModule({
  declarations: [
    AppComponent,
    Counter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule.forRoot()
  ],
  providers: [CounterActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>,devTool: DevToolsExtension) {
    ngRedux.configureStore(rootReducer, {}, [ ], [devTool.isEnabled() ? devTool.enhancer() : f => f]);
  }
}
