import { Input, Component, OnInit } from '@angular/core';
import { Escena } from "../interfaces";

@Component({
  selector: 'app-escena',
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss']
})
export class EscenaComponent implements OnInit{
  //Obtenim dades d'array frasesH de home.component.ts
  @Input() frasesE: Escena[] = [];

  //Obtenim l'url de la primera escena per establir-lo com a fons de pantalla
  currentSrc: string = "";

  ngOnInit(): void {
    this.currentSrc = this.frasesE[0].img;
  }

  //Amb els botons anterior-següent canviem el valor de currentScene, i de retop els de currentSrc
  currentScene: number = 0;//Comencem a la primera escena

  canvi(n: number): void {
    this.currentScene + n < 0 ? this.currentScene = 3
    : this.currentScene + n > 3 ? this.currentScene = 0
        : this.currentScene += n;
    
    this.currentSrc = this.frasesE[this.currentScene].img;
  }

}
