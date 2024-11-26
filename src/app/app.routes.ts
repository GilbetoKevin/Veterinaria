import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ClinicaComponent } from './clinica/clinica.component';

export const routes: Routes = [
    {
        path:"inicio",
        component:InicioComponent
    },{
        
        component:NosotrosComponent,
        path:"nosotros"
    },
    {
        component:ClinicaComponent,
        path:"clinica"
    }
    ,{
        path:"**",
        redirectTo:"inicio"
    }
];
