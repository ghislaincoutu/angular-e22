import { Component } from '@angular/core';
import { Module01Service } from '../module01.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-liste-sommaire',
  templateUrl: './liste-sommaire.component.html',
  styleUrls: ['./liste-sommaire.component.scss'],
  standalone: false
})
export class ListeSommaireComponent {

  notions81!: Observable<any[]>;

  constructor(private Module01: Module01Service) { }

  ngOnInit(): void {
    this.notions81 = this.Module01.getData81();
    console.log(this.notions81);
  }

}
