import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchClientComponent } from './pages/client/search-client/search-client.component';
import { ClientInfoComponent } from './pages/client/client-info/client-info.component';

const routes: Routes = [
  {
    path: '',
    component: SearchClientComponent,
  },
  {
    path: 'client-info',
    component: ClientInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
