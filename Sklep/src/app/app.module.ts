import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { ZawartoscComponent } from './zawartosc/zawartosc.component';
import { DodajArtykulComponent } from './dodaj-artykul/dodaj-artykul.component';
import { MenuComponent } from './menu/menu.component';
import { ArtykulyComponent } from './artykuly/artykuly.component';
import { ONasComponent } from './o-nas/o-nas.component';

@NgModule({
  declarations: [
    AppComponent,
    NaglowekComponent,
    ZawartoscComponent,
    DodajArtykulComponent,
    MenuComponent,
    ArtykulyComponent,
    ONasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
