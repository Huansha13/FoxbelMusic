import { Component, OnInit } from '@angular/core';
import {MusicService} from '../../services/music.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  most: boolean;
  get resultados() {
    this.most = true;
    return this.musicService.resultados;
  }
  constructor( private musicService: MusicService ) { }

  ngOnInit(): void {
  }

}
