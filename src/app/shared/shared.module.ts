import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MainNavComponent } from './page/main-nav/main-nav.component';


@NgModule({
  declarations: [MainNavComponent],
  exports: [
    MainNavComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
