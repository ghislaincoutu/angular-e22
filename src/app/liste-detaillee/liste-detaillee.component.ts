import { Component } from '@angular/core';
import { Module01Service } from '../module01.service';
import { Observable } from 'rxjs';

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
