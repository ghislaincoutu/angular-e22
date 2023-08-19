import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { ListeSommaireComponent } from './liste-sommaire/liste-sommaire.component';
import { ListeDetailleeComponent } from './liste-detaillee/liste-detaillee.component';
import { Aide001Component } from './fiches/aide001/aide001.component';
import { Aide002Component } from './fiches/aide002/aide002.component';
import { Aide003Component } from './fiches/aide003/aide003.component';
import { Aide004Component } from './fiches/aide004/aide004.component';
import { Gram001Component } from './fiches/gram001/gram001.component';
import { Gram002Component } from './fiches/gram002/gram002.component';
import { Phon001Component } from './fiches/phon001/phon001.component';
import { Phon002Component } from './fiches/phon002/phon002.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    ListeSommaireComponent,
    ListeDetailleeComponent,
    Aide001Component,
    Aide002Component,
    Aide003Component,
    Aide004Component,
    Gram001Component,
    Gram002Component,
    Phon001Component,
    Phon002Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
