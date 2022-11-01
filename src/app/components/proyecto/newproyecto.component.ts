import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreP: string;
  descripcionP: string;

  constructor(private proyectoS: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyectos(this.nombreP, this.descripcionP);
    this.proyectoS.save(proyecto).subscribe(
      {
        next: data =>{
        alert("Proyecto añadido correctamente");
        this.router.navigate(['']);
      }, error: err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    }
    )
  }

}