import { NgModule } from '@angular/core';
import { NbMenuModule, NbTabsetModule, NbCardModule, NbAccordionModule, NbCheckboxModule, NbListModule, NbActionsModule, NbIconModule, NbButtonModule, NbInputModule, NbUserModule, NbChatModule, NbSelectModule, NbRadioModule, NbProgressBarModule, NbStepperModule, NbSpinnerModule, NbTooltipModule, NbAlertModule, NbDialogModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteTabsetComponent } from '../@theme/components';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoradorListComponent } from './morador/morador-list/morador-list.component';
import { MoradorEditComponent } from './morador/morador-edit/morador-edit.component';
import { MoradorService } from './morador/morador.service';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbTabsetModule,
    NbCardModule,
    FormsModule,
    NbAccordionModule,
    NbCheckboxModule,
    NbListModule,
    NbActionsModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbUserModule,
    NbChatModule,
    NbSelectModule,
    NbRadioModule,
    NbProgressBarModule,
    NbStepperModule,
    ReactiveFormsModule,
    NbSpinnerModule,
    NbTooltipModule,
    NbAlertModule,
    NbDialogModule,
  ],
  declarations: [
    PagesComponent,
    RouteTabsetComponent,
    DashboardComponent,
    MoradorListComponent,
    MoradorEditComponent,
  ],
  providers: [
    MoradorService
  ],
})
export class PagesModule {
}
