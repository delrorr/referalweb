import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReferralComponent } from './referral/referral.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { PatientComponent } from './patient/patient.component';
import { ProcedureComponent } from './procedure/procedure.component';
import { NotesComponent } from './notes/notes.component';
import { CompleteComponent } from './complete/complete.component';
import { SearchComponent } from './search/search.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'referral', component: ReferralComponent },
  { path: 'receiver', component: ReceiverComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'procedure', component: ProcedureComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'complete', component: CompleteComponent },
  { path: 'search/:specialty', component: SearchComponent }
];

