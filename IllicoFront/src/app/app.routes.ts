import { Routes } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';
export const routes: Routes = [
    {path : "", component : ConnectionComponent},
    {path : "inscription", component : InscriptionComponent},
    {path : "**",redirectTo : "/notfound"}
];
