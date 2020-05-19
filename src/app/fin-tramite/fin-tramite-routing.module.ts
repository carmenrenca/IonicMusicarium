import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinTramitePage } from './fin-tramite.page';

const routes: Routes = [
  {
    path: '',
    component: FinTramitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinTramitePageRoutingModule {}
