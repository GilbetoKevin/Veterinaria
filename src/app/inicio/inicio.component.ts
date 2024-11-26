import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Slide {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  
  slides: Slide[] = [
    {
      image: 'images/specialties/cardiologia.jpg',
      title: 'CARDIOLOGIA',
      description: 'La enfermedad cardiaca es uno de los padecimientos cada vez más diagnosticados en la actualidad, debido a que los pacientes viven más tiempo y, sobre todo, existen mejores métodos de evaluación del corazón.',
    },
    {
      image: 'images/specialties/endoscopia.webp',
      title: 'Endoscopía',
      description: 'Por medio de la Endoscopia, se pueden establecer diferentes diagnósticos con minima invasion hacia el paciente, incluso hasta pueden resolverse algunos problemas como la extracción de cuerpos extraños.',
    },
    {
      image: 'images/specialties/cirugia.webp',
      title: 'Cirugía',
      description: 'Los procedimientos quirúrgicos son procedimientos que se realizan de manera rutinaria, ya sea para procedimientos programados como de emergencias. Contamos con equipos quirúrgicos completos para cirugías generales y especializadas.',
    },
    {
      image: 'images/specialties/interna.webp',
      title: 'Medicina Interna',
      description: 'El establecimiento de un correcto diagnóstico a través de un examen físico completo, auxiliándose de pruebas de laboratorio y gabinete como el ultrasonido y rayos X, permite un tratamiento adecuado y/o estimar un pronóstico.',
    },
    {
      image: 'images/specialties/resonancia.webp',
      title: 'Resonancia Magnetica',
      description: 'Gracias a los avances tecnológicos hemos podido acceder a esta herramienta fundamental para establecer el diagnóstico de enfermedades neurológicas.',
    },
    {
      image: 'images/specialties/neurologia.webp',
      title: 'Neurología',
      description: 'Los padecimientos neurologicos en perros y gatos no eran considerados importantes anteriormente. Sin embargo, en la actualidad cada vez se reciben a consulta con mayor frecuencia. El establecimiento de un correcto neurodiagnostico hace de esta rama un reto.',
    },
    {
      image: 'images/specialties/labanalisisclinicos.webp',
      title: 'Laboratorio de Análisis Clínicos',
      description: 'La determinación precisa de una enfermedad requiere en muchos casos del uso de estudios complementarios como el hemograma y quimica sanguinea, y estas pruebas presentan un mayor valor cuando son realizados en un periodo muy corto de tiempo.',
    },
    {
      image: 'images/specialties/rayosx.webp',
      title: 'Rayos X',
      description: 'La radiografía constituye una herramienta fundamental para el diagnóstico de muchas enfermedades. Prácticamente sería muy difícil establecer con exactitud alteraciones ortopédicas importantes en nuestras mascotas, como una fractura. Es por ello que su uso se considera rutinario en la práctica médica veterinaria.',
    },
    {
      image: 'images/specialties/urgencias.webp',
      title: 'Urgencias 24 HRS',
      description: 'Sabemos que la salud de tu mascota es muy importante, es por eso que eso que te compartimos esta información que puede ser muy útil a la hora de que tu mascota presente alguna alteración',
    },
    {
      image: 'images/specialties/hospitalizacion.webp',
      title: 'Hospitalización',
      description: 'En caso de tener que hospitalizar a tu mascota, nuestro equipo le proporcionará todo lo necesario para que su recuperación sea rápida y su estancia sea lo más cómoda posible.',
    },
    {
      image: 'images/specialties/prevencionmedica.webp',
      title: 'Medicina Preventiva',
      description: 'Damos un seguimiento a la evolución de tu mascota y nos convertimos en su médico de cabecera, contamos con todas las vacunas que tu mascota necesita, pregunta por el calendario de vacunación.',
    },
    {
      image: 'images/specialties/alimento.webp',
      title: 'Alimento',
      description: 'Tenemos el alimento ideal para tu mascota. Brindamos la asesoría que necesitas para que puedas seleccionar el adecuando, además, para su mayor comodidad, podemos enviarle el alimento directamente hasta su casa sin costo alguno.',
    },
    {
      image: 'images/specialties/medicinafelina.webp',
      title: 'Medicina Felina',
      description: 'Un maullido acaricia el corazón. Independecia, astucia, inteligencia e intuición, son solo por mencionar algunas de las maravillosas características de los felinos.',
    },
    {
      image: 'images/specialties/oftalmologia.webp',
      title: 'Oftalmología',
      description: 'La longevidad de las mascotas, su estilo de vida así como las genética, favorecen la aparición de algunas enfermedades oftalmológicas como las queratoconjuntivitis seca, el glaucoma y las úlceras corneales.',
    }
  ];

  currentIndex = 0;
  // Método para ir al siguiente slide
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  // Método para ir al slide anterior
  previousSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
