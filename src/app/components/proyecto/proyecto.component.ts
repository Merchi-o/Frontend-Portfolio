import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
proyecto: Proyectos[] = [];

  constructor(private proyectoS: ProyectosService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarProyecto(): void{
    this.proyectoS.lista().subscribe(
      data =>{
        this.proyecto = data;
      }
    )
  }

  delete(id?: number){
    if( id != undefined){
      this.proyectoS.delete(id).subscribe(
        {
          next: data => {
          this.cargarProyecto();
        }, error: err => {
          alert("No se pudo eliminar");
        }
      }
      )
    }
  }
}
