import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinTramitePageRoutingModule } from './fin-tramite-routing.module';

import { FinTramitePage } from './fin-tramite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinTramitePageRoutingModule
  ],
  declarations: [FinTramitePage]
})
export class FinTramitePageModule {}
