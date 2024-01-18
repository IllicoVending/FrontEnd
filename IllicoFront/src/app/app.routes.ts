import { Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path : "", component : HomeComponent},
    {path : "inscription", component : InscriptionComponent},
    {path : "connection", component : ConnectionComponent},
    {path : "**",redirectTo : "/notfound"}
];
