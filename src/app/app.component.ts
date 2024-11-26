import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { InicioComponent } from "./inicio/inicio.component";
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ClinicaComponent } from "./clinica/clinica.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, InicioComponent, NosotrosComponent, ClinicaComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Veterinaria';
  currentPage: string = 'inicio';

 
  
}
