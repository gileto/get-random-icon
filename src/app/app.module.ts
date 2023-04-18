import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconButtonComponent } from './components/iconButton/iconButton.component';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AppComponent, IconButtonComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
