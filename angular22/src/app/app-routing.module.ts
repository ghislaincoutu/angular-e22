import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccueilComponent } from './accueil/accueil.component';
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

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'liste-sommaire', component: ListeSommaireComponent },
  { path: 'liste-detaillee', component: ListeDetailleeComponent },
  { path: 'aide001', component: Aide001Component },
  { path: 'aide002', component: Aide002Component },
  { path: 'aide003', component: Aide003Component },
  { path: 'aide004', component: Aide004Component },
  { path: 'gram001', component: Gram001Component },
  { path: 'gram002', component: Gram002Component },
  { path: 'phon001', component: Phon001Component },
  { path: 'phon002', component: Phon002Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
