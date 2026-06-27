import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

const data81 = [
  {
    id: "aide001",
    title: "Schéma narratif",
    htmltag: "<aide001></aide001>"
  },
  {
    id: "aide002",
    title: "Reformulation",
    htmltag: "<aide002></aide002>"
  },
  {
    id: "aide003",
    title: "Types de discours",
    htmltag: "<aide003></aide003>"
  },
  {
    id: "aide004",
    title: "Types d’arguments",
    htmltag: "<aide004></aide004>"
  },
  {
    id: "gram001",
    title: "Exprimer la concession",
    htmltag: "<gram001></gram001>"
  },
  {
    id: "gram002",
    title: "Publicité et art de persuader",
    htmltag: "<gram002></gram002>"
  },
  {
    id: "phon001",
    title: "« E » muet",
    htmltag: "<phon001></phon001>"
  },
  {
    id: "phon002",
    title: "« E » qui se prononce",
    htmltag: "<phon002></phon002>"
  }
];

@Injectable({
  providedIn: 'root'
})
export class Module01Service {

  constructor() { }

  getData81(): Observable<any[]> {
    return of(data81).pipe(delay(400));
  }

}
