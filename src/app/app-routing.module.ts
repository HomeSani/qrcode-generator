import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QrlistComponent } from './qrlist/qrlist.component';
import { QrcreatorComponent } from './qrcreator/qrcreator.component';

const routes: Routes = [
  { path: '', component: QrlistComponent },
  { path: 'create', component: QrcreatorComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
