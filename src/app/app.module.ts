
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
  NbCheckboxModule,
  NbToastrService,
  NbIconModule,
} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { HttpErrorInterceptor } from './@core/interceptors/HttpErrorInterceptor';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ConfirmDialogComponent } from './@theme/components';

registerLocaleData(localePt, "pt")

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),

    FormsModule,
    NbCheckboxModule,
    NbIconModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    AngularFirestore,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true, deps: [NbToastrService, Router] },
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class AppModule {
}
