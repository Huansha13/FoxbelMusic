import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { ListMusicComponent } from './page/list-music/list-music.component';
import {SharedModule} from '../shared/shared.module';
import { ResultadoComponent } from './page/resultado/resultado.component';


@NgModule({
  declarations: [ListMusicComponent, ResultadoComponent],

  imports: [
    CommonModule,
    MusicRoutingModule,
    SharedModule,
  ]
})
export class MusicModule { }
