import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { ForumComponent } from './forum/forum.component';
import { TopComponent } from './top/top.component';


@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    TopComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
