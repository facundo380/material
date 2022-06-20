import { Component, OnInit } from '@angular/core';

interface Paises {
  id: number;
  nombre: string;
  urlbandera: string;
}

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  paises: Paises[] = [
    {
      "id":1,
      "nombre":"Argentina",
      "urlbandera":"https://cdn-icons-png.flaticon.com/512/206/206654.png"
   },
   {
       "id":2,
       "nombre":"Colombia",
       "urlbandera":"https://cdn-icons-png.flaticon.com/512/330/330508.png"
    },{
       "id":3,
       "nombre":"España",
       "urlbandera":"https://as1.ftcdn.net/v2/jpg/01/74/67/06/1000_F_174670655_0gpIoVJsQjBbCSCPp6YesrEQj6LIRxLI.jpg"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
