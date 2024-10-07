import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule } from '@angular/forms';

import { EvenementsComponent } from './evenements/evenements.component';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';

@NgModule({
  declarations: [
    AppComponent,
    EvenementsComponent,
    AddEvenementComponent,
    UpdateEvenementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
