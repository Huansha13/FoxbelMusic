import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit {
  description = 'Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.8';
  check: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  mostarOcultar(): void {
    this.check = !this.check;
  }
}
