import { Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path : "", component : ConnectionComponent},
    {path : "inscription", component : InscriptionComponent},
    {path : "home", component : HomeComponent},
    {path : "**",redirectTo : "/notfound"}
];
