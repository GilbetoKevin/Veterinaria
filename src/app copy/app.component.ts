import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from "./inicio/inicio.component";
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ClinicaComponent } from "./clinica/clinica.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InicioComponent, NosotrosComponent, ClinicaComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Veterinaria';
  currentPage: string = 'inicio'; // Variable que controla la página actual

  navigateTo(page: string) {
    if (page === 'inicio') {
      this.currentPage = 'inicio';
    } else if (page === 'nosotros') {
      this.currentPage = 'nosotros';
    } else if (page === 'clinicas') {
      this.currentPage = 'clinicas';
    }
  }
  
}
