import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputModule } from './modules/input/input.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
