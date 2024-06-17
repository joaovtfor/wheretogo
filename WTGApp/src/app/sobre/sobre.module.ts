// sobre.module.ts
// sobre.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SobrePage } from './sobre.page';
import { SobreRoutingModule } from './sobre-routing.module';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SobreRoutingModule,
    HeaderComponent
  ],
  declarations: [SobrePage],
  exports: [SobrePage]
})
export class SobreModule {}