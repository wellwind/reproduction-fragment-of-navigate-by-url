import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TargetRoutingModule } from './target-routing.module';
import { TargetComponent } from './target.component';


@NgModule({
  declarations: [TargetComponent],
  imports: [
    CommonModule,
    TargetRoutingModule
  ]
})
export class TargetModule { }
