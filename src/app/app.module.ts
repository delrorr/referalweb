import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ReferralComponent } from './referral/referral.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { PatientComponent } from './patient/patient.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { NotesComponent } from './notes/notes.component';
import { CompleteComponent } from './complete/complete.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReferralComponent,
    ReceiverComponent,
    PatientComponent,
    ProcedureComponent,
    NotesComponent,
    CompleteComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
