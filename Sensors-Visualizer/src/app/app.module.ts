import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule} from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemperaturaSalasComponent } from './temperatura-salas/temperatura-salas.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturaSalasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
