import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListMusicComponent} from './page/list-music/list-music.component';

const routes: Routes = [
  {
    path: '',
    component: ListMusicComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
