import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MusicService} from '../../services/music.service';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit {
  description: string = '(Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.8';
  check: boolean = true;
  name: string = 'Huansha L.';
  show: boolean;
  volume: number = 0.5;
  audio = new Audio();
  get resul() {
    return this.musicService.resultadoBaner;
  }

  constructor( private musicService: MusicService ) { }

  ngOnInit(): void {
    this.musicService.buscarMusic("Nuevas Canciones");
  }
  mostarOcultar(): void {
    this.check = !this.check;
  }

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;
  buscar( ): void {
    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.musicService.buscarMusic(valor);
    this.musicService.banerMusic(valor);
    this.txtBuscar.nativeElement.value = '';
  }

}
