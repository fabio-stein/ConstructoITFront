import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoradorListComponent } from './morador/morador-list/morador-list.component';
import { MoradorEditComponent } from './morador/morador-edit/morador-edit.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'morador',
      component: MoradorListComponent
    },
    {
      path: 'morador/new',
      component: MoradorEditComponent
    },
    {
      path: 'morador/:id',
      pathMatch: 'full',
      component: MoradorEditComponent
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
