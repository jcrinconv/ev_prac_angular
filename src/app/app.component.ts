import { Component } from '@angular/core';

const VISTAS = ['home', 'new_vehicles', 'pre_owned_vehicles'] as const;
type Vista = typeof VISTAS[number];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'TuSegundazo.com';
  vistaSeleccionada: Vista = 'pre_owned_vehicles';
  mostrarVista(v: Vista) { this.vistaSeleccionada = v; }
}
