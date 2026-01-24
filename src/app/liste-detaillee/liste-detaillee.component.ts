import { Component } from '@angular/core';
import { Module01Service } from '../module01.service';
import { Observable } from 'rxjs';

import { Aide001Component } from '../fiches/aide001/aide001.component';
import { Aide002Component } from '../fiches/aide002/aide002.component';
import { Aide003Component } from '../fiches/aide003/aide003.component';
import { Aide004Component } from '../fiches/aide004/aide004.component';
import { Gram001Component } from '../fiches/gram001/gram001.component';
import { Gram002Component } from '../fiches/gram002/gram002.component';
import { Phon001Component } from '../fiches/phon001/phon001.component';
import { Phon002Component } from '../fiches/phon002/phon002.component';

interface Notions55 {
  id: string;
}

@Component({
  selector: 'app-liste-detaillee',
  templateUrl: './liste-detaillee.component.html',
  styleUrls: ['./liste-detaillee.component.scss'],
  standalone: false
})

export class ListeDetailleeComponent {
  notions81!: Observable<any[]>;
  notions56: Notions55[] = [];
  aide001: string = '';
  aide002: string = '';
  aide003: string = '';
  aide004: string = '';
  gram001: string = '';
  gram002: string = '';
  phon001: string = '';
  phon002: string = '';

  componentMap: Record<string, any> = {
    'aide001': Aide001Component,
    'aide002': Aide002Component,
    'aide003': Aide003Component,
    'aide004': Aide004Component,
    'gram001': Gram001Component,
    'gram002': Gram002Component,
    'phon001': Phon001Component,
    'phon002': Phon002Component,
  };

  constructor(private Module01: Module01Service) {
    this.notions56 = [
      { id: "aide001" },
      { id: "aide002" },
      { id: "aide003" },
      { id: "aide004" },
      { id: "gram001" },
      { id: "gram002" },
      { id: "phon001" },
      { id: "phon002" }
    ];
  }

  ngOnInit(): void {
    this.notions81 = this.Module01.getData81();
    console.log(this.notions81);
  }
}
