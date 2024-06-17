// sobre.module.ts
// sobre.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SobrePage } from './sobre.page';
import { SobreRoutingModule } from './sobre-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SobreRoutingModule
  ],
  declarations: [SobrePage],
  exports: [SobrePage]
})
export class SobreModule {}