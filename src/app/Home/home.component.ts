import { Component } from '@angular/core';
import { Escena } from "../interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  frasesH: Escena[] = [{ txt: "El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial", img: "/ITAcademy-6-comic/assets/img/0.jpg" },
    { txt: "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes.", img: "/ITAcademy-6-comic/assets/img/1.jpg" },
    { txt: "L'heroi va decidir travessar la porta que el portava a casa.", img: "/ITAcademy-6-comic/assets/img/2.jpg" },
    { txt: "Mentrestant, altres herois no van tenir tanta sort en l'elecció ...", img: "/ITAcademy-6-comic/assets/img/3.jpg" }];
  
  bi: boolean = false;

  mostrar() {
    this.bi = true;
  }
}
