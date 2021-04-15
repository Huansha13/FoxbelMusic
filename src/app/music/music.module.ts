import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { ListMusicComponent } from './page/list-music/list-music.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [ListMusicComponent],

  imports: [
    CommonModule,
    MusicRoutingModule,
    SharedModule,
  ]
})
export class MusicModule { }
