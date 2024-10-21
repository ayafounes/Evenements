import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EvenementsComponent } from './evenements/evenements.component';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import { AddEvenementComponent } from './add-evenement/add-evenement.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    EvenementsComponent,
    AddEvenementComponent,
    UpdateEvenementComponent,
    RechercheParGenreComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    LoginComponent,
    ForbiddenComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
